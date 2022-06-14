import Header from "../components/Header";
import Meta from "../components/Meta";
import Spacing from "../components/Spacing";

const index = () => {
  return (
    <>
      <Meta />
      <Header
        title={`Experience. Shared.`}
        subtitle={`Welcome to the Modern Group Travel Company !`}
        hScreen={true}
      />
      <div className="bg-white hidden md:block">
        <Spacing>
          <h2 className="text-center text-2xl xl:text-3xl font-medium italic mx-auto drop-shadow-md xl:w-[50rem] ">
            Find the people you&apos;ll climb mountains with. Find the friends
            to trek through jungles with. Find your beach party entourage & find
            it all with Sash Travel.
          </h2>
        </Spacing>
      </div>
    </>
  );
};

export default index;
