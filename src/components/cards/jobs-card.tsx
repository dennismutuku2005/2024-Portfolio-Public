import CardWrapper from "@/components/cards/card-wrapper";
import classNames from "classnames";

const jobsData = [
  {
    role: "Student information technology",
    company: "The technical university of Kenya",
    date: "2023 - Present",
  },
  {
    role: "Software Engineer",
    company: "ONE Technologies",
    date: "2024 - 2025",
  },
  {
    role: "Software Engineer Intern",
    company: "Loomar.",
    date: "2023 - 2024",
  },
];

const JobItem = ({
  job,
  active
}: {
  job: any;
  active?: boolean;
}) => {
  const { role, company, date} = job;

  return (
    <div
      className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2"
    >
      <div className="flex flex-col gap-1">
        <h5 className={classNames(
          "block text-xs md:text-md md:hidden font-medium dark:text-white text-black",
          { 'opacity-35': !active, 'opacity-65': active }
        )}>
          {date}
        </h5>
        <h1 className={classNames(
          "text-3xl md:text-4xl font-medium dark:text-white text-black text-left w-fit",
          { 'line-through opacity-55': !active, 'opacity-100': active }
        )}>
          {role}
        </h1>
      </div>
      <div className="flex flex-col md:items-end md:text-right">
        <h3 className={classNames(
          "text-sm lg:text-lg font-medium dark:text-white text-black",
          { 'opacity-65': !active, 'opacity-80': active }
        )}>
          {company}
        </h3>
        <h5 className={classNames(
          "hidden md:block text-xs lg:text-md font-medium dark:text-white text-black",
          { 'opacity-35': !active, 'opacity-65': active }
        )}>
          {date}
        </h5>
      </div>
    </div>
  );
};

const JobsCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-6 p-8 justify-start">
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-60 uppercase">
            2 Years of
          </h4>
          <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center">
            Experience
          </h1>
        </div>
        <div className="flex flex-col relative z-10 lg:justify-around">
          <JobItem job={jobsData[0]} active />

          {jobsData.slice(1).map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default JobsCard;
