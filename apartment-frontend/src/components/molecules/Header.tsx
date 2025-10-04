import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center text-white">
      <Image
        src="/cropped.jpeg"
        alt="Apartments Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Find Your Dream Apartment
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
          Browse through our listings and discover your perfect home.
        </p>
      </div>
    </header>
  );
}
