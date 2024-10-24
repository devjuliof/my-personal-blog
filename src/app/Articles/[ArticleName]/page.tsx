"use client";

import React from "react";

interface ArticleProps {
  params: {
    ArticleName: string;
  };
}

export default function Article({ params }: ArticleProps) {
  const [articleName, setArticleName] = React.useState<string>("");

  React.useEffect(() => {
    const fetchParams = async () => {
      const unwrappedParams = await params;
      const decodedName = decodeURIComponent(unwrappedParams.ArticleName);
      setArticleName(decodedName);
    };

    fetchParams();
  }, [params]);

  return (
    <section>
      <h3>{articleName}</h3>
      <p>O conteúdo ficará aqui :)</p>
    </section>
  );
}
