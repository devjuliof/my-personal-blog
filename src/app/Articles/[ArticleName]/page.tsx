export default async function Article({ params }) {
  const articleName = decodeURIComponent(params.ArticleName);

  return (
    <section>
      <h3>{articleName}</h3>
      <p>O conteúdo ficará aqui :)</p>
    </section>
  );
}
