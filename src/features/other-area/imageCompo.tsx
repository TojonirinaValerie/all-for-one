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
    <div className="h-96 w-96 rounded-2xl bg-gray-400 overflow-hidden relative">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgImage}
        alt="background"
      />
      <div
        className="p-2 absolute inset-0 bg-gradient-to-t from-gray-900/90 to-slate-50/10 flex flex-col items-center justify-center z-10 p-4 
  pt-80 transition-all duration-700 ease-in-out hover:pt-20"
      >
        <img
          className="w-20 h-20 object-contain mb-2"
          src={imgLink}
          alt="icon"
        />
        <h1 className="text-xl font-bold text-center text-gray-50 mb-6">{title}</h1>
        <p className="text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
}
