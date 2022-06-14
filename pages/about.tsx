import React from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";

const about = () => {
  return (
    <>
      <Meta />
      <Header title={"About us."} hScreen={false} />
      <h2 className="h-screen bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione
        sunt at dignissimos perferendis, sed ut itaque ipsam cumque?
        Reprehenderit magni aliquam totam quis dolor dolorem. Ratione dolorum
        doloremque ea.
      </h2>
    </>
  );
};

export default about;
