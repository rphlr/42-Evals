"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [starCount, setStarCount] = useState(null);
  const [lastStargazer, setLastStargazer] = useState(null);

  const translations = {
    en: {
      title: "42 Evaluation Sheets Hub 🎯",
      message: `It is with great regret that I announce the closure of this repository due to a decision made by 42 School. 

        The project is no longer being updated and all evaluation sheets are permanently unavailable.

        Thank you to everyone who supported this project and helped improve it over the years. Your contributions and enthusiasm made it what it was.`,
      closing: `While this project is no longer maintained, I encourage you to stay connected for future projects:`,
      github: "Visit my GitHub",
      linkedin: "Connect on LinkedIn",
      statsTitle: "Repository Stats 📊",
      lastStargazer: "Last Stargazer:",
      starProject: "Star this project",
      totalStars: "Total Stars:",
      starHistory: "Star History:",
    },
    fr: {
      title: "42 Évaluation Hub 🎯",
      message: `C'est avec un grand regret que j'annonce la fermeture de ce dépôt suite à une décision de l'école 42. 

        Le projet n'est plus mis à jour et toutes les feuilles d'évaluation ne sont plus disponibles.

        Merci à tous ceux qui ont soutenu ce projet et contribué à son amélioration au fil des années. Vos contributions et votre enthousiasme ont fait de ce projet ce qu'il était.`,
      closing: `Bien que ce projet ne soit plus maintenu, je vous encourage à rester en contact pour mes futurs projets :`,
      github: "Visitez mon GitHub",
      linkedin: "Ajoutez-moi sur LinkedIn",
      statsTitle: "Statistiques du dépôt 📊",
      lastStargazer: "Dernier utilisateur ayant étoilé :",
      starProject: "Étoilez ce projet",
      totalStars: "Nombre total d'étoiles :",
      starHistory: "Historique des étoiles :",
    },
  };

  const {
    title,
    message,
    closing,
    github,
    linkedin,
    statsTitle,
    lastStargazer: lastStargazerLabel,
    starProject,
    totalStars,
    starHistory,
  } = translations[language];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoResponse = await fetch(
          "https://api.github.com/repos/rphlr/42-Evals"
        );
        const repoData = await repoResponse.json();
        setStarCount(repoData.stargazers_count);
  
        let stargazers = [];
        let page = 1;
        let perPage = 100;
        let hasMore = true;
  
        while (hasMore) {
          const stargazersResponse = await fetch(
            `https://api.github.com/repos/rphlr/42-Evals/stargazers?per_page=${perPage}&page=${page}`,
            {
              headers: { Accept: "application/vnd.github.v3.star+json" },
            }
          );
          const currentPageStargazers = await stargazersResponse.json();
  
          if (currentPageStargazers.length === 0) {
            hasMore = false;
          } else {
            stargazers = [...stargazers, ...currentPageStargazers];
            page += 1;
          }
        }
  
        if (stargazers.length > 0) {
          const recentStargazer = stargazers[stargazers.length - 1];
          setLastStargazer({
            username: recentStargazer.user.login,
            avatar: recentStargazer.user.avatar_url,
            profileUrl: recentStargazer.user.html_url,
          });
        }
      } catch (error) {
        console.error("Failed to fetch data from GitHub:", error);
      }
    };
    fetchGitHubData();
    const interval = setInterval(fetchGitHubData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex items-center justify-center h-full bg-gray-100 text-gray-900 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-6 whitespace-pre-line">{message}</p>
        <p className="text-gray-600 mb-6 whitespace-pre-line">{closing}</p>
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://github.com/rphlr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            {github}
          </a>
          <a
            href="https://www.linkedin.com/in/rphlr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            {linkedin}
          </a>
        </div>
        <hr className="my-4" />
        <h2 className="text-xl font-bold mb-4">{statsTitle}</h2>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">{lastStargazerLabel}</h3>
          {lastStargazer ? (
            <div>
              <a
                href={lastStargazer.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={lastStargazer.avatar}
                  alt={lastStargazer.username}
                  className="mx-auto rounded-full"
                  width={80}
                  height={80}
                />
              </a>
              <p className="text-lg font-medium mt-2">
                {lastStargazer.username}
              </p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">{totalStars}</h3>
          <p className="text-2xl font-bold text-gray-700">
            {starCount !== null ? starCount : "Loading..."}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">{starHistory}</h3>
          <img
            src="https://api.star-history.com/svg?repos=rphlr/42-Evals&type=Date"
            alt="Star History Chart"
            className="mx-auto"
          />
        </div>
        <div className="mt-6">
          <a
            href="https://github.com/rphlr/42-Evals"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
          >
            {starProject}
          </a>
        </div>
        <div className="mt-6">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </main>
  );
}
