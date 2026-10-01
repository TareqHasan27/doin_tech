import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const backCourse = { title: 'Build Digit...', rating: '4.8', students: '3k', price: '$25', level: 'Beginner', image: '/course_one.png' };
const frontCourse = { title: 'the Power of Big Data', rating: '4.5', students: '2k', price: '$25', level: 'Beginner', image: '/course_one.png' };

export default function Register() {
  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 py-8 sm:px-6 lg:px-10"
      style={{
        backgroundImage: "url('/signup_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      <img
        src="/logo.png"
        alt="logo"
        className="absolute top-6 left-[300px] w-12 h-12 object-contain z-50"
      />

      {/* Left Side */}
      <div className="w-full max-w-[920px] flex flex-col items-center lg:items-start lg:pl-8 xl:pl-16">
        {/* Text */}
        <div className="text-white mt-16 lg:mt-20 mb-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Sign up and come in</h2>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 max-w-md">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>
        </div>

        {/* Cards & Vectors Container */}
        <div className="relative mt-4 flex justify-center w-full max-w-xl">
          <div className="relative w-[520px] h-[420px] sm:w-[560px] sm:h-[470px]">
            <img src="/sign_one.png" alt="" className="absolute -top-5 left-2 sm:left-0 w-[130px] h-[130px] sm:w-[146px] sm:h-[146px] z-30" />
            <img src="/sign_two.png" alt="" className="absolute -bottom-14 -left-10 w-[160px] h-[160px] sm:w-[188px] sm:h-[188px] z-30" />

            <div className="absolute left-0 top-20 z-0 opacity-80 scale-95 origin-top-left">
              <CourseCard course={backCourse} />
            </div>

            <div className="absolute left-28 sm:left-40 -top-2 sm:-top-[50px] z-10">
              <CourseCard course={frontCourse} />
            </div>

            <div className="absolute -bottom-14 right-5 sm:right-[52px] z-20 bg-[#d4fb20] rounded-2xl p-4 shadow-xl w-[230px] sm:w-[258px]">
              <img src="/sign_three.png" alt="" className="absolute -top-20 -right-20 w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] z-50" />
              <p className="font-bold text-xs text-gray-900 mb-1">Happy Students</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs text-blue-700 font-bold">4.5</span>
                <span className="text-[10px] text-gray-600">(240)</span>
                <span className="text-yellow-600 text-xs">★</span>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-500 border-2 border-[#d4fb20]"></div>
                ))}
                <div className="w-6 h-6 rounded-full bg-black text-white text-[9px] flex items-center justify-center border-2 border-[#d4fb20]">2K+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full max-w-[470px] flex items-center justify-center px-0 sm:px-4 lg:px-0 mt-32">
        <div className="bg-white rounded-[2rem] p-7 sm:p-10 lg:p-12 w-full shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-white/60 backdrop-blur-sm">
          <p className="text-blue-500 text-sm font-semibold mb-2">Create an Account</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-10 leading-tight">
            Welcome to
            <br />
            ByteSpace
          </h1>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Jamie Davis"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition bg-gray-50/60"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                placeholder="designer@example.com"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition bg-gray-50/60"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition bg-gray-50/60"
              />
            </div>
          </div>

          <div className="flex justify-end mt-8 mb-10">
            <button className="bg-[#c8f135] text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-[#b8e020] hover:-translate-y-0.5 transition-all shadow-lg text-sm">
              Continue
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}