import Image from "next/image";
import CardWrapper from "@/components/cards/card-wrapper";

const AboutCard = () => {
  return (
    <CardWrapper>
      <div className="static flex flex-col items-center sm:items-start px-6 py-5 sm:px-8 sm:py-6 gap-6">
        <div className="flex gap-2 sm:gap-6 flex-col items-center sm:justify-start sm:flex-row">
          <div className="relative w-16 h-16 min-w-16 sm:w-24 sm:min-w-24 sm:h-24 p-[2px] z-0 overflow-hidden rounded-full shadow-memoji">
            <Image
              src="/Memoji_Big_Smile.png" // replace with your own avatar/image if you want
              alt="Profile Picture"
              fill
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-silka text-2xl sm:text-4xl leading-tight font-medium text-slate-900 dark:text-white">
              Dennis Muuo
            </h1>
          </div>
        </div>

        <p className="dark:text-white text-slate-900 tracking-wide leading-6 text-xs sm:text-sm">
          B.Tech IT student at the Technical University of Kenya.<br />
          Aspiring Software Engineer skilled in Web Technologies, C, Dart, Java, and Android development.<br />
          Currently studying Embedded Systems and exploring hardware-software integration.
        </p>
      </div>
    </CardWrapper>
  );
};

export default AboutCard;
