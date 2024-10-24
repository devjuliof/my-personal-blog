"use client";

import { useEffect } from "react";

export default function Comments(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "devjuliof/my-personal-blog");
    script.setAttribute("issue-term", "url");
    script.setAttribute("label", "Comentário");
    script.setAttribute("theme", "github-dark");
    script.crossOrigin = "anonymous";

    const commentsSection = document.getElementById("comments");
    if (commentsSection) {
      commentsSection.appendChild(script);
    }

    return () => {
      if (commentsSection) {
        commentsSection.innerHTML = "";
      }
    };
  }, []);

  return <div id="comments" />;
}
