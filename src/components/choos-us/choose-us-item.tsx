import { ChooseUstype } from "@/features/choise-us/choose-us";

const ChooseUsItem: React.FC<{ data: ChooseUstype }> = ({ data }) => {
  const { title, icon, description } = data;
  return (
    <div className="w-full p-10 py-12 bg-white rounded-[40px] border-[010F19]/5 transition 
    hover:scale-[1.03] hover:shadow-[0_0_50px_0_#A2B6C359]">
      <div className="bg-blue-icon-bg p-4 w-[max-content] rounded-[20px]">
        {icon}
      </div>
      <h3 className="text-xl font-[600] py-1">{title}</h3>
      <p className="text-foreground/50 text-lg leading-7">{description}</p>
    </div>
  );
};

export default ChooseUsItem;
