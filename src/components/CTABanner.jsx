export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image — full width, natural aspect ratio, no crop */}
      <img
        src="/cta_bg.png"
        alt=""
        className="block h-auto w-full"
      />

      {/* Content overlay on top of image */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-32">
        <div className="mx-auto max-w-[1600px] text-center">
          <h2 className="mx-auto max-w-5xl text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Unlock Your Potential as a
            <span className="block">Creator with ByteSpace</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-white opacity-95 sm:text-base md:mt-8 md:text-lg md:text-xl">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <div className="mt-8 flex justify-center md:mt-10">
            <button className="rounded-full bg-[#d9ff00] px-6 py-3 text-base font-bold text-[#0b1f5a] shadow-[0_8px_0_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-lg">
              Join as Creator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}