import { DataSectionType } from "../choise-us/choose-us";

const WorkflowItem: React.FC<{
  data: DataSectionType;
  withMargin?: boolean;
  inverse?: boolean;
}> = ({ data, withMargin, inverse }) => {
  const { title, description, icon } = data;

  return (
    <article className={` ${withMargin ? " mr-10 " : " "} max-md:mr-0`} >
      <div
        className={`flex flex-col justify-center px-14 py-8 relative max-w-[524px] min-h-[180px] rounded-[30px] max-xl:max-w-[400px] bg-primary ${
          inverse ? " pr-18 " : " pl-18 "
        }`}
      >
        <h2 className="text-[#F5FBFF] font-[600]">{title}</h2>
        <p className="text-[#F5FBFF] text-sm font-[300]">{description}</p>
        <div
          className={`absolute ${
            inverse ? " right-[-30px] " : " left-[-30px] "
          } `}
        >
          <div className="rounded-full w-[60px] h-[60px] flex flex-col justify-center items-center bg-blue-sky border-[1px] border-primary/30">
            {icon}
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkflowItem;
