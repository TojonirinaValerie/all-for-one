import { IconCompo } from "./icon";

export function IconLeft() {
  return (
    <div className="items-center justify-center not-xl:flex-row flex flex-col gap-2">
      <IconCompo
        hoverSrc="assets\icons\ic_baseline-facebook_L.svg"
        src="assets\icons\ic_baseline-facebook.svg"
        link="https://www.facebook.com/profile.php?id=61565939655126"
      />
      <IconCompo
        hoverSrc="assets\icons\entypo-social_linkedin-with-circle_L.svg"
        src="assets\icons\entypo-social_linkedin-with-circle.svg"
        link="https://www.linkedin.com/company/allforonemg/posts/?feedView=all"
      />
      <IconCompo
        hoverSrc="assets\icons\ic_baseline-whatsapp_L.svg"
        src="assets\icons\ic_baseline-whatsapp.svg"
        link="https://wa.me/+261345210385"
      />
      <IconCompo
        hoverSrc="assets\icons\ic_baseline-discord_L.svg"
        src="assets\icons\ic_baseline-discord.svg"
        link="https://discord.gg/7NZBZ97e2W"
      />
      <div className="h-32 w-0.5 bg-primary block not-xl:hidden" />
    </div>
  );
}
