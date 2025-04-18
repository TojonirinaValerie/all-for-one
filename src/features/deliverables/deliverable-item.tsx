import { DataSectionType } from "../choise-us/choose-us";

const DeliverableItem: React.FC<{
  data: DataSectionType;
  withMargin?: boolean;
}> = ({ data, withMargin }) => {
  const { title, description, icon } = data;
  return (
    <article className={` ${withMargin ? " pl-10 " : " "} max-lg:mr-0 max-md:pl-0 w-full hover:scale-[1.02] transition-all`}>
      <div
        className={`flex flex-col justify-center px-14 py-8 relative max-w-[524px] min-h-[180px] rounded-[30px] max-xl:max-w-[400px] bg-primary
          max-md:px-8 max-md:py-4`}
      >
        <h2 className="text-[#F5FBFF] font-[600]">{title}</h2>
        <p className="text-[#F5FBFF] text-sm font-[300]">{description}</p>
        <div className={`absolute right-[-30px]  `}>
          <div className="rounded-full w-[60px] h-[60px] flex flex-col justify-center items-center bg-blue-sky border-[1px] border-primary/30">
            {icon}
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeliverableItem;
