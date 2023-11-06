import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ children, className }: ButtonProps) {
  const classes = `${className}`;
  return <button className={classes}>{children}</button>;
}
