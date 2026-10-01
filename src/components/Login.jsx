import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const backCourse = { title: 'Build Digit...', rating: '4.8', students: '3k', price: '$25', level: 'Beginner', image: '/course_one.png' };
const frontCourse = { title: 'the Power of Big Data', rating: '4.5', students: '2k', price: '$25', level: 'Beginner', image: '/course_one.png' };

export default function Login() {
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
        className="absolute top-6 left-[300px]  w-12 h-12 object-contain z-50" 
      />

      {/* Left Side */}
      <div className="w-full max-w-[920px] flex flex-col items-center lg:items-start lg:pl-8 xl:pl-16">
        {/* Text */}
        <div className="text-white mt-16 lg:mt-20 mb-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Sign in with ease</h2>
          <p className="text-sm sm:text-base leading-relaxed opacity-90 max-w-md py-4">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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
      <div className="w-full max-w-[470px] flex items-center justify-center px-0 sm:px-4 lg:px-0">
        <div className="bg-white rounded-[2rem] p-7 sm:p-10 lg:p-12 w-full shadow-[0_30px_80px_rgba(15,23,42,0.18)] border border-white/60 backdrop-blur-sm">
          <p className="text-blue-500 text-sm font-semibold mb-2">Welcome Back</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Welcome Back
          </h1>
        
          <div className="space-y-5 sm:space-y-6">
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

          <div className="flex justify-end mt-8 mb-8">
            <button className="bg-[#c8f135] text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-[#b8e020] hover:-translate-y-0.5 transition-all shadow-lg text-sm">
              Sign In
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <button type="button" aria-label="Continue with Facebook" className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
              <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.397 20v-8h2.765l.411-3.2h-3.176V7.548c0-.926.257-1.558 1.587-1.558h1.697V2.93c-.294-.04-1.3-.1-2.474-.1-2.448 0-4.121 1.494-4.121 4.239V8.8H7v3.2h2.786v8h3.611z"/>
              </svg>
            </button>

            <button type="button" aria-label="Continue with Google" className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84Z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" fill="#EA4335"/>
              </svg>
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 font-medium">
            New user?{' '}
            <Link to="/register" className="text-blue-500 font-bold hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}