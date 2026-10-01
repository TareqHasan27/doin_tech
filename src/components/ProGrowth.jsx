export default function ProGrowth() {
  return (
    <section
      className="pb-16 pt-32 px-8 relative overflow-hidden h-[1460px]"
      style={{
        backgroundImage: 'url(/pro_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        {/* ===== Row 1: Text Left, Image Right ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-10">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1a1a1a] mb-6">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-10 max-w-lg">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey.
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>

            <div className="flex gap-14">
              <div>
                <div className="text-3xl font-bold text-[#2b59ff]">12K</div>
                <div className="text-sm text-[#5a5a5a] mt-1">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2b59ff]">70+</div>
                <div className="text-sm text-[#5a5a5a] mt-1">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2b59ff]">16</div>
                <div className="text-sm text-[#5a5a5a] mt-1">Creators</div>
              </div>
            </div>
          </div>

          {/* Right: Image (top-right) */}
          <div className="relative flex justify-center md:justify-end w-[621px]">
            <img
              src="/pro_right.png"
              alt="Professional Growth"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* ===== Row 2: Image Left, Text Right ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Image (bottom-left) */}
          <div className="relative flex justify-center md:justify-start w-[548px]">
            <img
              src="/pro_left.png"
              alt="Course Creation"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right: Text + Checklist */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1a1a1a] mb-6">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-8 max-w-lg">
              <span className="font-bold text-[#1a1a1a]">ByteSpace</span>{' '}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            <ul className="space-y-4">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2b59ff] text-white text-[11px] font-bold">
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