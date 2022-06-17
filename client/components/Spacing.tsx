type spacingProps = {
  children?: JSX.Element | JSX.Element[];
  color?: string;
};

const Spacing = ({ children, color }: spacingProps) => {
  return (
    <div
      className={`max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full mx-auto px-3 py-12 sm:px-0 md:py-16 lg:py-20 2xl:py-24 ${
        color ? color : "bg-transparent"
      }`}
    >
      {children}
    </div>
  );
};

export default Spacing;
