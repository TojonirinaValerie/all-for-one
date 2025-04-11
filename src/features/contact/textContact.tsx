import SectionTitle, {
  SectionTitleAccent,
  SectionTitleDescription,
  SectionTitleEng,
  SectionTitleTitle,
} from "@/components/section-title";

export default function TextContact() {
  return (
    <div className="flex justify-between items-center gap-x-6 h-52 content-center">
      <div>
        <SectionTitle>
          <SectionTitleEng align="left">CONTACT US</SectionTitleEng>
          <SectionTitleTitle align="left">
            Contactez- <SectionTitleAccent>nous</SectionTitleAccent>
          </SectionTitleTitle>
          <SectionTitleDescription align="left">
            N&apos;hésitez pas à nous contacter pour discuter de vos projets.{" "}
            <br />
            Vous pouvez également demander un devis <br />
            personnalisé pour des solutions sur mesure
          </SectionTitleDescription>
        </SectionTitle>
      </div>
      <div className="max-lg:hidden bg-[#D8ECFC] rounded-tl-4xl h-52 w-72"></div>
    </div>
  );
}
