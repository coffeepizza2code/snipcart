interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  if (!className) {
    className = "max-w-5xl mx-auto";
  }
  return <div className={className}>{children}</div>;
}

export default Container;
