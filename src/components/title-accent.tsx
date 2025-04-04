type TitleAccentProps = {
  text: string;
};
const TitleAccent: React.FC<TitleAccentProps> = ({ text }) => {
  return <span className="text-accent">{text}</span>;
};

export default TitleAccent;
