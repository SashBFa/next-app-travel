import Head from "next/head";

type metaProps = {
  title?: string;
  description?: string;
};

const Meta = ({ title, description }: metaProps) => {
  return (
    <Head>
      <title>SashBFaTravel - {title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
Meta.defaultProps = {
  title: "E-commerce pour livre d'occasion",
  description: " Vendez, achetez et retrouver les livres qui vous plaisent",
};

export default Meta;
