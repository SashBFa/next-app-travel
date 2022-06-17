import Header from "../components/Header";
import Meta from "../components/Meta";
import Spacing from "../components/Spacing";
import Article from "../components/Article";

type indexProps = {
  articles: [];
  id: number;
  userId: number;
  title: string;
  body: string;
};

const index = ({ articles }: indexProps) => {
  return (
    <>
      <Meta />
      <Header
        title={`Experience. Shared.`}
        subtitle={`Welcome to the Modern Group Travel Company !`}
        hScreen={true}
      />
      <div className="bg-white">
        <Spacing>
          <h2 className="text-center text-2xl xl:text-3xl font-medium italic mx-auto drop-shadow-md xl:w-[50rem] ">
            Find the people you&apos;ll climb mountains with. Find the friends
            to trek through jungles with. Find your beach party entourage & find
            it all with Sash Travel.
          </h2>

          <div>
            {articles.map((article: indexProps) => (
              <Article article={article} key={article.id} />
            ))}
          </div>
        </Spacing>
      </div>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const articles: indexProps = await res.json();

  return {
    props: {
      articles,
    },
  };
};
