from github import Github
import os
from datetime import datetime

PERSONAL_ACCESS_TOKEN = os.getenv('PERSONAL_ACCESS_TOKEN')
REPO_NAME = "rphlr/42-Evals"

def get_latest_stargazer_info(repo_name):
    g = Github(PERSONAL_ACCESS_TOKEN)
    repo = g.get_repo(repo_name)
    stargazers = repo.get_stargazers_with_dates()
    for star in stargazers:
        return star.user.login, star.user.avatar_url
    return None, None

def update_readme(repo_name, last_stargazer, last_stargazer_avatar):
    g = Github(PERSONAL_ACCESS_TOKEN)
    repo = g.get_repo(repo_name)
    contents = repo.get_contents("README.md")
    readme_text = contents.decoded_content.decode()

    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    updated_readme = readme_text.replace("<!--last_stargazer_image-->none", last_stargazer_avatar)
    updated_readme = updated_readme.replace("<!--last_stargazer-->none yet.", last_stargazer)
    updated_readme = updated_readme.replace("<!--last_update-->not updated yet.", now)

    repo.update_file(contents.path, "Automated README update with stargazer image and timestamp", updated_readme, contents.sha)

if __name__ == "__main__":
    last_stargazer, last_stargazer_avatar = get_latest_stargazer_info(REPO_NAME)
    if last_stargazer and last_stargazer_avatar:
        update_readme(REPO_NAME, last_stargazer, last_stargazer_avatar)
