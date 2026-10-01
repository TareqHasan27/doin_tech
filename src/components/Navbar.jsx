import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="px-[160px] py-4 flex items-center justify-between border-b border-white/10"
      style={{
        backgroundImage: "url('/signup_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex items-center gap-2">
        <div className="py-1 flex items-center gap-1">
          <img src="/header_logo.png" alt="Logo" className="h-10 w-auto" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Link to="/" className="text-white text-sm hover:text-[#c8ff00]">Home</Link>
        <Link to="/courses" className="text-white text-sm hover:text-[#c8ff00]">Courses</Link>
        <Link to="/creator" className="text-white text-sm hover:text-[#c8ff00]">Creator</Link>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/login" className="text-white text-sm hover:text-[#c8ff00]">Sign In</Link>
        <Link to="/register" className="text-white text-sm font-semibold px-4 py-2 rounded-full">Join Us</Link>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
