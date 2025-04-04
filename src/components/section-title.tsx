type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <>{children}</>;
};

const getTextAlign = (align?: "right" | "left" | "center"): string => {
  if (align === "center") return "text-center";
  if (align === "left") return "text-left";
  if (align === "right") return "text-right";
  return "text-center";
};

type SectionTitleTitleProps = {
  children: React.ReactNode;
  align?: "right" | "left" | "center";
};
export const SectionTitleTitle: React.FC<SectionTitleTitleProps> = ({
  children,
  align,
}) => {
  return (
    <h1 className={`text-xxl font-bold text-center max-md:text-center leading-10 ${getTextAlign(align)}`}>
      {children}
    </h1>
  );
};

type SectionTitleEngProps = {
  children: React.ReactNode;
  align?: "right" | "left" | "center";
};

export const SectionTitleEng: React.FC<SectionTitleEngProps> = ({
  children,
  align,
}) => {
  return (
    <p className={`text-foreground/50 tracking-widest max-md:text-center uppercase ${getTextAlign(align)}`}>
      {children}
    </p>
  );
};

type SectionTitleDescriptionProps = {
  children: React.ReactNode;
  align?: "right" | "left" | "center";
};
export const SectionTitleDescription: React.FC<
  SectionTitleDescriptionProps
> = ({ children, align }) => {
  return (
    <p className={`text-foreground/50 text-center mt-2 max-md:text-center ${getTextAlign(align)}`}>
      {children}
    </p>
  );
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
