import { Input } from "@/components/ui/input";


interface InputFormProps{
    title:string;
    placeholder:string;
}


export function InputForm({title,placeholder}:Readonly<InputFormProps>){
    return <div className="text-sm font-light text-primary flex-1">
        <label className="mb-1">{title}</label>
        <Input className="h-14 rounded-4xl w-full px-4" placeholder={placeholder}/>
    </div>
}