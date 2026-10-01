// import HeroImg from 'image.png'
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-8 py-16 min-h-[1024px]"
      style={{
        backgroundImage: "url('/signup_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <div className="relative z-10  mx-auto text-center ">
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mt-[90px]">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="text-white text-base md:text-lg mb-8  mx-auto py-8 opacity-90">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search bar */}
        <div className="flex items-center gap-3 max-w-md mx-auto mb-12">
          {/* Input container */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, course..."
              className="flex-1 outline-none text-sm text-gray-600 bg-transparent"
            />
          </div>

          {/* Search button outside */}
          <button className="bg-white text-[#1a1aff] text-sm px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
            Search
          </button>
        </div>

      </div>


      {/* frame one place left top */}
      <div className="absolute left-0 top-20">
        <img className="w-[385px]" src="/frame-1.png" alt="frame 1" />
      </div>

      {/* place the cone on right top */}
      <div className="absolute right-0 top-20">
        <img className="w-[375px]" src="/cone.png" alt="cone" />
      </div>

      {/* place the elipse on bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
        <img className="w-[1149px]" src="/ellipse.png" alt="ellipse" />
      </div>

      {/* place the man photo center on the elipse */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <img className="w-[578px]" src="/man.png" alt="man" />
      </div>

      {/* place the mask group left of the elipse */}
      <div className="absolute bottom-0 left-[340px] z-20">
        <img className="w-[342px]" src="/mask_group.png" alt="mask group" />
      </div>

      {/* place the frame 2 right of the elipse */}
      <div className="absolute bottom-0 right-[320px] z-20">
        <img className="w-[330px]" src="/frame.png" alt="frame " />
      </div>

      {/* place the frame middle of the left */}
      <div className="absolute bottom-[370px] left-[360px] z-20">
        <img className="w-[175px]" src="/frame-2.png" alt="frame" />
      </div>

      {/* place the cone 1 top of the elipse at the right */}
      <div className="absolute right-[330px] top-[450px] z-20">
        <img className="w-[188px]" src="/cone-1.png" alt="cone 1" />
      </div>

      {/* ui ux design */}
      <div className="absolute bottom-[270px] left-[600px] z-32 bg-white rounded-2xl p-4 w-[228px] ">
        <h2 className="text-sm font-medium">UI/UX Design</h2>
        <div>
          <span className="text-[#82868e] text-sm font-thin">200 courses</span> <span className="text-[#82868e] text-sm font-thin">1000+ students</span>
        </div>
      </div>

      {/* Learning Progress and progress bar */}
      <div className="absolute bottom-[200px] right-[600px] z-30 bg-white rounded-2xl p-4 w-[228px] shadow-xl">
        <h2 className="text-sm font-medium text-gray-700">Learning Progress</h2>
        <p className="text-3xl font-bold text-gray-700 mt-1">55%</p>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-300 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-[#d4fb20] rounded-full"
            style={{ width: '55%' }}
          ></div>
        </div>




      </div>
        {/* happy students */}
      <div className="absolute bottom-[20px] left-[600px] z-20 bg-white rounded-2xl px-5 py-4 w-[200px] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
         <h2 className="text-[15px] font-bold text-gray-900">Happy Students</h2>
         <div className="flex items-center gap-1 mt-0.5 mb-3">
           <span className="text-[12px] text-blue-600 font-bold">4.5</span>
           <span className="text-[11px] text-gray-400">(240)</span>
           <span className="text-yellow-500 text-[12px]">★</span>
         </div>

         {/* Avatars */}
         <div className="flex items-center -space-x-3">
           {[1, 2, 3, 4, 5].map(i => (
             <img
               key={i}
               src={`/student-${i}.png`}
               alt={`student ${i}`}
               className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-300"
             />
           ))}
          <div className="w-8 h-8 rounded-full bg-[#c8f135] text-gray-900 text-[10px] font-bold flex items-center justify-center border-2 border-white">
           2K+
         </div>
       </div>
       </div>
    </section>
  );
}



// // import HeroImg from 'image.png'
// export default function Hero() {
//   return (
//     <section
//       className="relative overflow-hidden px-8 py-16 min-h-[1024px]"
//       style={{
//         backgroundImage: "url('/signup_bg.png')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >

//       <div className="relative z-10 mx-auto text-center">
//         <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mt-[90px]">
//           Get Access to Hundreds<br />Courses Available
//         </h1>
//         <p className="text-blue-200 text-sm mb-8 mx-auto py-8">
//           Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
//         </p>

//         {/* Search bar */}
//         <div className="flex items-center gap-3 max-w-md mx-auto mb-12">
//           <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg flex-1">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Course, topic, creator"
//               className="flex-1 outline-none text-sm text-gray-600 bg-transparent"
//             />
//           </div>

//           <button className="bg-[#c8f135] text-gray-900 text-sm px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-[#b8e020] transition">
//             Search
//           </button>
//         </div>
//       </div>


//       {/* frame one place left top */}
//       <div className="absolute left-0 top-20">
//         <img className="w-[385px]" src="/frame-1.png" alt="frame 1" />
//       </div>

//       {/* place the cone on right top */}
//       <div className="absolute right-0 top-20">
//         <img className="w-[375px]" src="/cone.png" alt="cone" />
//       </div>

//       {/* place the elipse on bottom center */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
//         <img className="w-[1149px]" src="/ellipse.png" alt="ellipse" />
//       </div>

//       {/* place the man photo center on the elipse */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
//         <img className="w-[578px]" src="/man.png" alt="man" />
//       </div>


//       {/* ================= UI/UX Design Card (Left) ================= */}
//       <div className="absolute bottom-[280px] left-[300px] z-20 bg-white rounded-2xl px-5 py-4 w-[210px] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
//         <h2 className="text-[15px] font-bold text-gray-900">UI/UX Design</h2>
//         <div className="flex items-center gap-1 mt-1">
//           <span className="text-[11px] text-gray-400 font-medium">200 Courses</span>
//           <span className="text-[11px] text-gray-300">•</span>
//           <span className="text-[11px] text-gray-400 font-medium">1000+ Students</span>
//         </div>
//       </div>


//       {/* ================= Learning Progress Card (Right) ================= */}
//       <div className="absolute bottom-[280px] right-[310px] z-20 bg-white rounded-2xl px-5 py-4 w-[210px] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
//         <h2 className="text-[13px] font-semibold text-gray-700">Learning Progress</h2>
//         <p className="text-[34px] font-extrabold text-gray-900 leading-none mt-1">55%</p>

//         {/* Progress bar */}
//         <div className="w-full h-[6px] bg-gray-200 rounded-full mt-3 overflow-hidden">
//           <div
//             className="h-full bg-[#c8f135] rounded-full"
//             style={{ width: '55%' }}
//           ></div>
//         </div>
//       </div>


//       {/* ================= Happy Students Card (Bottom Left) ================= */}
//       <div className="absolute bottom-[120px] left-[200px] z-20 bg-white rounded-2xl px-5 py-4 w-[240px] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
//         <h2 className="text-[15px] font-bold text-gray-900">Happy Students</h2>
//         <div className="flex items-center gap-1 mt-0.5 mb-3">
//           <span className="text-[12px] text-blue-600 font-bold">4.5</span>
//           <span className="text-[11px] text-gray-400">(240)</span>
//           <span className="text-yellow-500 text-[12px]">★</span>
//         </div>

//         {/* Avatars */}
//         <div className="flex items-center -space-x-3">
//           {[1, 2, 3, 4, 5].map(i => (
//             <img
//               key={i}
//               src={`/student-${i}.png`}
//               alt={`student ${i}`}
//               className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-300"
//             />
//           ))}
//           <div className="w-8 h-8 rounded-full bg-[#c8f135] text-gray-900 text-[10px] font-bold flex items-center justify-center border-2 border-white">
//             2K+
//           </div>
//         </div>
//       </div>


//       {/* place the cone 1 top of the elipse at the right */}
//       <div className="absolute right-[330px] top-[450px] z-20">
//         <img className="w-[188px]" src="/cone-1.png" alt="cone 1" />
//       </div>

//     </section>
//   );
// }