import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: TContainerProps) {
  return (
    <div className={cn("w-full max-w-[1230px] px-5 mx-auto", className)}>
      {children}
    </div>
  );
}

export default Container;
