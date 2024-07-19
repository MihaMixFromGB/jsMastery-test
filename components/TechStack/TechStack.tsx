import { BentoGrid, BentoGridItem } from "./BentoGrid";
import AnimatedTooltip from "./AnimatedTolltip";

const TechStack = () => {
  const items = [
    {
      title: "Frontend",
      className: "md:col-span-3",
    },
    {
      title: "Architecture",
    },
    {
      title: "Backend",
    },
    {
      title: "DevOps",
    },
  ];

  const stack = [
    {
      id: 1,
      name: "HTML",
      image: "/stack/html.svg",
    },
    {
      id: 2,
      name: "CSS",
      image: "/stack/css.svg",
    },
    {
      id: 3,
      name: "Javascript",
      image: "/stack/javascript.svg",
    },
  ];

  return (
    <BentoGrid className="w-full m-5">
      {items.map((item, idx) => (
        <BentoGridItem key={idx} className={item.className}>
          {item.title}
          {idx === 0 && (
            <div className="flex flex-row items-center w-full">
              <AnimatedTooltip items={stack} />
            </div>
          )}
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
};

export default TechStack;
