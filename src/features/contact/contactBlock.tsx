import { Button } from "@/components/ui/button";
import { InputForm } from "./inputForm";
import { Textarea } from "@/components/ui/textarea";

export function ContactBlock() {
  return (
    <div className="h-[550px] max-w-[630px] flex-1 rounded-4xl border p-7 flex flex-col gap-6 max-md:border-none">
      <div className="flex flex-wrap gap-3 w-full not-lg:flex-col">
        <InputForm title="Your Mail" placeholder="example@test.com" />
        <InputForm title="Your phone" placeholder="+261-0-0-0-000" />
      </div>
      <InputForm title="Your Address" placeholder="Antananarivo, Madagascar" />
      <div className="text-sm font-light text-primary flex flex-col flex-1 gap-2 ">
        <label htmlFor="">Message</label>
        <Textarea
          placeholder="Write your Message here..."
          className="h-32 rounded-3xl p-4"
        />
      </div>
      <Button className="h-14 w-full rounded-3xl">Send Message</Button>
    </div>
  );
}
