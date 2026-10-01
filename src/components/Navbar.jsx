import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="px-4 py-3 sm:px-6 md:px-8 lg:px-32"
      style={{
        backgroundImage: "url('/signup_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/header_logo.png" alt="Logo" className="h-9 w-auto sm:h-10" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm text-white transition hover:text-[#c8ff00]">Home</Link>
          <Link to="/courses" className="text-sm text-white transition hover:text-[#c8ff00]">Courses</Link>
          <Link to="/creator" className="text-sm text-white transition hover:text-[#c8ff00]">Creator</Link>
        </div>

        <div className="hidden items-center gap-3 sm:gap-4 md:flex">
          <Link to="/login" className="text-sm text-white transition hover:text-[#c8ff00]">Sign In</Link>
          <Link to="/register" className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20 sm:px-4">
            Join Us
          </Link>
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00]" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00] md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-[#0b1020]/80 p-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-sm text-white transition hover:text-[#c8ff00]">Home</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="text-sm text-white transition hover:text-[#c8ff00]">Courses</Link>
            <Link to="/creator" onClick={() => setIsOpen(false)} className="text-sm text-white transition hover:text-[#c8ff00]">Creator</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-sm text-white transition hover:text-[#c8ff00]">Sign In</Link>
            <Link to="/register" onClick={() => setIsOpen(false)} className="rounded-full bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/20">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
