type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <>{children}</>;
};


type SectionTitleTitleProps = {
  children: React.ReactNode;
};
export const SectionTitleTitle: React.FC<SectionTitleTitleProps> = ({
  children,
}) => {
  return <h1 className="text-xxl font-[800] text-center">{children}</h1>;
};
// ${
//     align === "right"
//       ? " text-right "
//       : align === "left"
//       ? " text-left "
//       : "text-center "
//   }

type SectionTitleEngProps = {
  children: React.ReactNode;
};

export const SectionTitleEng: React.FC<SectionTitleEngProps> = ({
  children,
}) => {
  return (
    <h2
      className={`text-foreground/50 tracking-widest `}
    >
      {children}
    </h2>
  );
};

type SectionTitleDescriptionProps = {
  children: React.ReactNode;
};
export const SectionTitleDescription: React.FC<
  SectionTitleDescriptionProps
> = ({ children }) => {
  return <p className="text-foreground/50 text-center mt-2">{children}</p>;
};

type SectionTitleAccentProps = {
  children: React.ReactNode;
};
export const SectionTitleAccent: React.FC<SectionTitleAccentProps> = ({
  children,
}) => {
  return <span className="text-accent">{children}</span>;
};

export default SectionTitle;
