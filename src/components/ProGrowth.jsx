export default function ProGrowth() {
  return (
    <section
      className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6 md:px-8 md:pb-16 md:pt-32 lg:px-32"
      style={{
        backgroundImage: 'url(/pro_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-10 md:gap-24">
        {/* ===== Row 1: Text Left, Image Right ===== */}
        <div className="grid grid-cols-1 gap-8 items-center pt-0 md:grid-cols-2 md:pt-10">
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
              Your Path to Professional
              <br className="hidden md:block" />
              Growth Starts Here!
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-[#4a4a4a] md:mx-0 md:text-[15px]">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey.
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-8 md:justify-start">
              <div>
                <div className="text-3xl font-bold text-[#2b59ff]">12K</div>
                <div className="mt-1 text-sm text-[#5a5a5a]">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2b59ff]">70+</div>
                <div className="mt-1 text-sm text-[#5a5a5a]">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2b59ff]">16</div>
                <div className="mt-1 text-sm text-[#5a5a5a]">Creators</div>
              </div>
            </div>
          </div>

          {/* Right: Image (top-right) */}
          <div className="relative flex justify-center md:justify-end">
            <img
              src="/pro_right.png"
              alt="Professional Growth"
              className="w-full max-w-[480px] object-contain md:max-w-md"
            />
          </div>
        </div>

        {/* ===== Row 2: Image Left, Text Right ===== */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left: Image (bottom-left) */}
          <div className="relative flex justify-center md:justify-start">
            <img
              src="/pro_left.png"
              alt="Course Creation"
              className="w-full max-w-[420px] object-contain md:max-w-md"
            />
          </div>

          {/* Right: Text + Checklist */}
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl md:text-5xl">
              Create &amp; Manage
              <br className="hidden md:block" />
              Courses Easily.
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-[#4a4a4a] md:mx-0 md:text-[15px]">
              <span className="font-bold text-[#1a1a1a]">ByteSpace</span>{' '}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2b59ff] text-[11px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[15px] font-medium text-[#1a1a1a]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}