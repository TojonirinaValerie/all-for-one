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
            Lorem ipsum dolor a amet, consectetur adipiscing elit. Vestibulum
            feugiat pretium velit ac scelerisque. In vitae ligula eget ligula
            pulvinar rutrum convallis id.
          </SectionTitleDescription>
        </SectionTitle>
      </div>
      {/* <span className="text-gray-400"></span>
        <br />
        <span className="text-xl font-bold">Contactez-</span>
        <span className="text-accent text-xl font-bold"> nous</span>
        <br />
        <span className="text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          voluptates delectus inventore, placeat est adipisci saepe minus
          eligendi <br />
          exercitationem architecto nihil.
        </span> */}
      <div className="bg-[#D8ECFC] rounded-tl-4xl h-52 w-72"></div>
    </div>
  );
}
