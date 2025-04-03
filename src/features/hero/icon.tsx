interface IconCompoProps {
  src: string;
  onClick?:()=>void;
}

export function IconCompo({ src, onClick }: Readonly<IconCompoProps>) {
  return (
    <div className="h-12 w-12 rounded-full content-center hover:bg-primary hover:text-white">
      <img src={src} />
    </div>
  );
}
