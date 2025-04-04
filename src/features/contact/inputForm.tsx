import { Input } from "@/components/ui/input";


interface InputFormProps{
    title:string;
    placeholder:string;
}


export function InputForm({title,placeholder}:Readonly<InputFormProps>){
    return <div className="text-sm font-light text-primary flex flex-col flex-1 gap-2 h-24">
        <label className="mb-2">{title}</label>
        <Input className="h-14 rounded-2xl w-full px-4" placeholder={placeholder}/>
    </div>
}