import { IconCompo } from "./icon";

export function IconLeft() {
  return (
    <div className="items-center justify-center flex flex-col gap-2">
      <IconCompo src="assets\icons\ic_baseline-facebook.svg"/>
      <IconCompo src="assets\icons\entypo-social_linkedin-with-circle.svg"/>
      <IconCompo src="assets\icons\ic_baseline-whatsapp.svg"/>
      <IconCompo src="assets\icons\entypo-social_linkedin-with-circle.svg"/>
      <div className="h-32 w-0.5 bg-primary" />
    </div>
  );
}
