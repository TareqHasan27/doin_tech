export default function CTABanner() {
  return (
    <section className="relative w-full">
      {/* Background image — full width, natural aspect ratio, no crop */}
      <img
        src="/cta_bg.png"
        alt=""
        className="block w-full h-auto"
      />

      {/* Content overlay on top of image */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mx-auto max-w-5xl text-5xl md:text-6xl font-extrabold leading-[1.1] text-white">
            Unlock Your Potential as a
            <span className="block">Creator with ByteSpace</span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-white opacity-95">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="rounded-full bg-[#d9ff00] px-8 py-4 text-lg font-bold text-[#0b1f5a] shadow-[0_8px_0_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.02]">
              Join as Creator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}