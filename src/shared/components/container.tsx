import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`w-full mx-auto px-4
        max-w-full
        sm:max-w-[640px]
        md:max-w-[768px]
        lg:max-w-[1024px]
        xl:max-w-[1280px]
        2xl:max-w-[1536px]
        ${className}`}
    >
      {children}
    </div>
  );
}
