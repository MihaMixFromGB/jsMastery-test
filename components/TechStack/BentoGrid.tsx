import { cn } from "@/utils";

type BentoGridProps = React.PropsWithChildren & {
  className?: string;
};
export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

type BentoGridItemProps = React.PropsWithChildren & {
  className?: string;
};
export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {children}
      </div>
    </div>
  );
};
