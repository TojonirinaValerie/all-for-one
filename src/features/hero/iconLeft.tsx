import { IconCompo } from "./icon";

export function IconLeft() {
  return (
    <div className="items-center justify-center not-xl:flex-row flex flex-col gap-2">
      <IconCompo hoverSrc="assets\icons\ic_baseline-facebook_L.svg" src="assets\icons\ic_baseline-facebook.svg"/>
      <IconCompo hoverSrc="assets\icons\entypo-social_linkedin-with-circle_L.svg" src="assets\icons\entypo-social_linkedin-with-circle.svg"/>
      <IconCompo hoverSrc="assets\icons\ic_baseline-whatsapp_L.svg" src="assets\icons\ic_baseline-whatsapp.svg"/>
      <IconCompo hoverSrc="assets\icons\entypo-social_linkedin-with-circle_L.svg" src="assets\icons\entypo-social_linkedin-with-circle.svg"/>
      <div className="h-32 w-0.5 bg-primary block not-xl:hidden" />
    </div>
  );
}