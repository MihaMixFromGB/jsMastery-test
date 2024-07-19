// import { BentoGrid, BentoGridItem } from "./BentoGrid";
import AnimatedTooltip from "./AnimatedTolltip";

const TechStack = () => {
  const items = [
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
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
};

export default TechStack;
