export default function CourseCard({ course }) {
  return (
    <article className="w-full rounded-[28px] border border-[#ececf0] bg-white p-3 shadow-[0_18px_35px_rgba(15,16,27,0.04)]">
      <div className="relative overflow-hidden rounded-[22px] bg-gray-200">
        <img src={course.image} alt={course.title} className="h-[220px] w-full object-cover sm:h-[250px]" />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-center gap-1.5">
          {[{ value: '17', label: 'Lessons' }, { value: '2h 16m', label: '' }, { value: '59', label: 'Comments' }].map((pill, idx) => (
            <div key={idx} className="flex items-center gap-0.5 rounded-full border border-white/40 bg-white/25 px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-md whitespace-nowrap">
              <span>{pill.value}</span>
              {pill.label && <span className="text-white/85">{pill.label}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="px-2 pb-1 pt-5">
        <div className="mb-1 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-tight text-[#111] sm:text-[22px]">{course.title}</h3>
          <div className="flex shrink-0 items-center gap-1 text-base font-bold text-[#3b3b3b] sm:text-[22px]">
            <span>{course.rating}</span>
            <span className="text-[#d9d9dd]">★</span>
          </div>
        </div>

        <p className="mb-5 text-[15px] font-medium text-[#111]">
          by <span className="text-[#2b59ff]">purepearl studio</span>
        </p>

        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f2f3f5] px-3 py-2 text-[12px] font-medium text-[#1d1d1d] sm:px-4 sm:text-[14px]">
            <img src="/beginner.png" alt="" className="h-4 w-4" />
            <span>{course.level}</span>
          </div>

          <div className="flex items-center">
            <div className="flex -space-x-3">
              {['#f4c8b0', '#ffe08a', '#cbb6ff', '#b8d4f0'].map((color, idx) => (
                <span key={idx} className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-[#1d1d1d] sm:h-10 sm:w-10" style={{ backgroundColor: color }} />
              ))}
            </div>
            <span className="-ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#c8ff00] text-[10px] font-bold text-[#111] sm:h-10 sm:w-10 sm:text-[12px]">
              26+
            </span>
          </div>
        </div>

        <p className="text-2xl font-black leading-none text-[#2b59ff] sm:text-[26px]">
          {course.price}
          <span className="ml-0.5 align-baseline text-[13px] font-medium text-[#6b6b6b]">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
