import { Input } from "@/components/ui/input";
import { ReactNode } from "react";

interface InputFormProps {
  title: string;
  placeholder: string;
  icon: ReactNode;
}

export function InputForm({
  title,
  placeholder,
  icon,
}: Readonly<InputFormProps>) {
  return (
    <div className="text-sm font-light text-primary flex flex-col flex-1 gap-2 h-24">
      <label className="mb-2">{title}</label>
      <div className="h-14 rounded-2xl w-full px-4 border content-center relative">
        <Input className="border-0 focus:border-0" placeholder={placeholder} />
        <div className="absolute right-2 top-[25%]">{icon}</div>
      </div>
    </div>
  );
}
