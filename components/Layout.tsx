import Navigation from "./Navigation";

type layoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
