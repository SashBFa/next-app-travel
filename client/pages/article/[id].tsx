import Link from "next/link";
import Meta from "../../components/Meta";

const article = ({ article }: any) => {
  return (
    <div className="article-page">
      <Meta title={article.title} />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <Link href="/">
        <a>Revenir à l{"'"}accueil</a>
      </Link>
    </div>
  );
};

export default article;

// getStaticProps ne fonctionnerait pas seul
export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const articles = await res.json();
  // Préparer les id pour le path (id: 1, id: 2...)
  const ids = articles.map((article: any) => article.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
