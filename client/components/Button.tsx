type btnProps = {
  children?: JSX.Element | JSX.Element[];
  color?: string;
  text?: string;
};

const Button = ({ children, color, text }: btnProps) => {
  return <button className="w-full">{children}</button>;
};

export default Button;
