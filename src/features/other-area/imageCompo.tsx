import Image from "next/image";

interface ImageCompoProps {
  imgLink: string;
  title: string;
  description: string;
  bgImage: string;
}

export function ImageCompo({
  imgLink,
  title,
  description,
  bgImage,
}: Readonly<ImageCompoProps>) {
  return (
    <div className="group min-h-[400px] w-[330px] 2xl:h-[480px] 2xl:w-[430px] rounded-2xl bg-gray-400 overflow-hidden relative">
      <Image
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgImage}
        alt="background"
        width={200}
        height={200}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 
        2xl:pt-[420px] lg:pt-[350px] md:pt-[350px]  transition-all duration-1000 ease-in-out hover:pt-8 
        bg-gradient-to-t from-gray-900/50 to-slate-50/10 hover:from-gray-950 hover:to-gray-900/50"
      >
        <Image
          className="w-20 h-20 object-contain mb-2"
          src={imgLink}
          alt="icon"
          width={80}
          height={80}
        />
        <h1 className=" 2xl:text-xl lg:text-lg md:text-xl sm:text-sm font-bold text-center text-gray-50 mb-4">
          {title}
        </h1>
        <p className="text-gray-300 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}
