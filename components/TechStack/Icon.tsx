import Image from "next/image";

type IconProps = {
  icon: string;
  onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
};
const Icon: React.FC<IconProps> = ({ icon, onMouseMove }) => {
  return (
    <div className="flex justify-center items-center w-14 h-14 p-2 rounded-full bg-transparent border border-zinc-500">
      <div className="relative w-full h-full">
        <Image
          src={icon}
          fill
          objectFit="contain"
          alt="hard skill"
          onMouseMove={onMouseMove}
        />
      </div>
    </div>
  );
};

export default Icon;
