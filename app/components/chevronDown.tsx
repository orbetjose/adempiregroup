import Image from "next/image";



export default function ChevronDown() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;



  return (
    <div className={`py-1 relative z-1 bg-primary-gray`}>
      <Image
        src={`${currentDomain}wp-content/uploads/2026/03/chevron-down.png`}
        alt="Flecha hacia abajo"
        className="h-12 object-contain mx-auto block -my-4"
        width={184}
        height={184}
      />
    </div>
  );
}
