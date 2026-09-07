import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image?: string;
};

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#111111] pt-[88px] text-white">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className={`absolute inset-0 ${
          image
            ? "bg-[linear-gradient(90deg,rgba(8,8,8,.94),rgba(8,8,8,.72),rgba(8,8,8,.35))]"
            : "bg-[#111111]"
        }`}
      />

      <div className="absolute right-[-220px] top-[-220px] h-[600px] w-[600px] rounded-full border border-white/[0.08]" />

      <div className="absolute right-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full border border-[#d71920]/25" />

      <div className="relative mx-auto flex min-h-[540px] max-w-[1280px] items-center px-6 py-24 lg:px-0">
        <div className="max-w-4xl">
          <div className="site-eyebrow mb-8 text-white">
            {eyebrow}
          </div>

          <h1 className="text-[48px] font-bold leading-[.92] tracking-[-.055em] sm:text-6xl lg:text-[82px]">
            {title}

            {highlight && (
              <>
                <br />
                <span className="text-[#d71920]">
                  {highlight}
                </span>
              </>
            )}
          </h1>

          <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/65 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
