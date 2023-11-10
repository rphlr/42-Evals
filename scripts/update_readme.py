from github import Github
import os
from datetime import datetime
import re

PERSONAL_ACCESS_TOKEN = os.getenv('PERSONAL_ACCESS_TOKEN')
REPO_NAME = "rphlr/42-Evals"

def get_latest_stargazer_info(repo_name):
    g = Github(PERSONAL_ACCESS_TOKEN)
    repo = g.get_repo(repo_name)
    stargazers = repo.get_stargazers_with_dates()
    for star in stargazers:
        return star.user.login, star.user.avatar_url, star.user.html_url
    return None, None, None

def update_readme(repo_name, last_stargazer, last_stargazer_avatar, last_stargazer_url):
    g = Github(PERSONAL_ACCESS_TOKEN)
    repo = g.get_repo(repo_name)
    contents = repo.get_contents("README.md")
    readme_text = contents.decoded_content.decode()

    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Utilisez les expressions régulières pour remplacer les valeurs dans les marqueurs
    readme_text = re.sub(r'<!--last_stargazer_image-->.*', f"<!--last_stargazer_image-->{last_stargazer_avatar}&s=250", readme_text)
    readme_text = re.sub(r'<!--last_stargazer_url-->.*', f"<!--last_stargazer_url-->{last_stargazer_url}", readme_text)
    readme_text = re.sub(r'<!--last_stargazer_name-->.*', f"<!--last_stargazer_name-->{last_stargazer}", readme_text)
    readme_text = re.sub(r'<!--last_stargazer_url_2-->.*', f"<!--last_stargazer_url_2-->{last_stargazer_url}", readme_text)
    readme_text = re.sub(r'<!--last_update-->.*', f"<!--last_update-->{now}", readme_text)

    repo.update_file(contents.path, "Automated README update with stargazer info and timestamp", readme_text, contents.sha)


if __name__ == "__main__":
    last_stargazer, last_stargazer_avatar, last_stargazer_url = get_latest_stargazer_info(REPO_NAME)
    if last_stargazer and last_stargazer_avatar and last_stargazer_url:
        update_readme(REPO_NAME, last_stargazer, last_stargazer_avatar, last_stargazer_url)