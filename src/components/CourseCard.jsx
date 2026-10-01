export default function CourseCard({ course }) {
  return (
    <article className="w-full max-w-[360px] rounded-[28px] p-3 shadow-[0_18px_35px_rgba(15,16,27,0.04)] border border-[#ececf0] bg-white">
      <div className="relative overflow-hidden rounded-[22px] bg-gray-200">
        <img src={course.image} alt={course.title} className="h-[250px] w-full object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-1.5 flex-nowrap">
          {[{ value: '17', label: 'Lessons' }, { value: '2h 16m', label: '' }, { value: '59', label: 'Comments' }].map((pill, idx) => (
            <div key={idx} className="flex items-center gap-0.5 rounded-full backdrop-blur-md bg-white/25 border border-white/40 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] whitespace-nowrap">
              <span>{pill.value}</span>
              {pill.label && <span className="text-white/85">{pill.label}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="px-2 pb-1 pt-5">
        <div className="mb-1 flex items-start justify-between gap-3">
          <h3 className="text-[22px] font-bold leading-tight text-[#111]">{course.title}</h3>
          <div className="flex shrink-0 items-center gap-1 text-[22px] font-bold text-[#3b3b3b]">
            <span>{course.rating}</span>
            <span className="text-[22px] text-[#d9d9dd]">★</span>
          </div>
        </div>
        <p className="mb-5 text-[15px] font-medium text-[#111]">
          by <span className="text-[#2b59ff]">purepearl studio</span>
        </p>
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f2f3f5] px-4 py-2.5 text-[14px] font-medium text-[#1d1d1d]">
            <img src="/beginner.png" alt="" className="h-4 w-4" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {['#f4c8b0', '#ffe08a', '#cbb6ff', '#b8d4f0'].map((color, idx) => (
                <span key={idx} className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-[#1d1d1d]" style={{ backgroundColor: color }} />
              ))}
            </div>
            <span className="-ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c8ff00] text-[12px] font-bold text-[#111] border-2 border-white">26+</span>
          </div>
        </div>
        <p className="text-[26px] font-black leading-none text-[#2b59ff]">
          {course.price}
          <span className="ml-0.5 align-baseline text-[13px] font-medium text-[#6b6b6b]">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
