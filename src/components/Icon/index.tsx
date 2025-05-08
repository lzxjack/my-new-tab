import { ReactNode } from "react";

interface IProps {
  className?: string;
  size?: number;
  children?: ReactNode;
}

const Icon = ({ className, size = 30, children }: IProps) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
      }}
    >
      {children}
    </div>
  );
};

export default Icon;
