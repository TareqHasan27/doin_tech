export default function Footer() {
  return (
    <footer className="bg-white px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-32">
      <div className="mx-auto max-w-[1600px]">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* ===== Left: Logo + Newsletter ===== */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/footer_logo.png"
                alt="ByteSpace"
                className="h-8 w-auto object-contain"
              />
              <h2 className="text-2xl font-bold text-black">ByteSpace</h2>
            </div>

            {/* Newsletter text */}
            <p className="mb-6 max-w-md text-[14px] font-light leading-relaxed text-[#3a3a3a]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Email input + Search button */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mb-6 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full flex-1 rounded-full border border-[#dcdce2] bg-white px-6 py-3.5 text-[14px] text-[#3a3a3a] placeholder-[#8a8a92] outline-none transition-colors focus:border-[#c8ff00]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#d9ff00] px-7 py-3.5 text-[15px] font-medium text-[#111] transition-transform hover:scale-[1.02]"
              >
                Search
              </button>
            </form>

            {/* Privacy text */}
            <p className="max-w-md text-[13px] font-light leading-relaxed text-[#6b6b73]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* ===== Right: Link Columns ===== */}
          <div className="md:col-span-7 md:pl-12">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {/* Column 1 */}
              {[
                'Featured Courses',
                'Featured Categories',
                'Business',
                'IT',
                'Design',
              ].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[15px] font-light text-[#1a1a1a] transition-colors hover:text-[#2b59ff]"
                >
                  {link}
                </a>
              ))}

              {/* Column 2 */}
              {[
                'Development',
                'Marketing',
                'Photography',
                'Finance',
                'Sport',
              ].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[15px] font-light text-[#1a1a1a] transition-colors hover:text-[#2b59ff]"
                >
                  {link}
                </a>
              ))}

              {/* Column 3 */}
              {[
                'Become a Creator',
                'Affiliate Program',
                'Contact',
                'Help',
                'About',
              ].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[15px] font-light text-[#1a1a1a] transition-colors hover:text-[#2b59ff]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#e6e6ec] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] font-light text-[#3a3a3a]">
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-[14px] font-light text-[#3a3a3a] transition-colors hover:text-[#2b59ff]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}