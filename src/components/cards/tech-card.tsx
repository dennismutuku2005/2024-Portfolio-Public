import Image from "next/image";
import Marquee from "react-fast-marquee";
import CardWrapper from "@/components/cards/card-wrapper";

const MyTechCard = () => {
  const stack = [
    { name: "React", icon: "/tech-icons/reactjs.svg" },
    { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
    { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
    { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
    { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg" },
    { name: "HTML5", icon: "/tech-icons/html5.svg" },
    { name: "CSS3", icon: "/tech-icons/css3.svg" },
    { name: "SASS", icon: "/tech-icons/sass.svg" },
    { name: "Framer", icon: "/tech-icons/framer.svg" },
    { name: "VS Code", icon: "/tech-icons/vscode.svg" },
  
    { name: "Arc", icon: "/tech-icons/arc.svg" },
    { name: "Github", icon: "/tech-icons/github.svg" },
 
    { name: "Vercel", icon: "/tech-icons/vercel.svg" },
  ];

  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-8 p-8 justify-between">
        <Marquee
          speed={30}
          style={{
            maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
            margin: "auto"
          }}
        >
          {stack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 aspect-square w-[72px] bg-neutral-200 dark:bg-neutral-800 rounded-2xl mx-2 my-0"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={36}
                height={36}
              />
            </div>
          ))}
        </Marquee>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-60 uppercase">
            Currently Using
          </h4>
          <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center">
            Tech I <span className="text-xl">❤️</span>
          </h1>
        </div>
      </div>
    </CardWrapper>
  );
};

export default MyTechCard;
