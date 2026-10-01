export default function CreateCourses() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-5xl mx-auto flex items-center gap-12">
        {/* Left card */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            {/* Total Revenue card */}
            <div className="bg-white rounded-2xl shadow-lg p-4 w-52 mb-4">
              <div className="text-xs text-gray-500 mb-1">Total Revenue</div>
              <div className="text-xl font-bold text-gray-900">$120.29</div>
            </div>
            {/* Person image */}
            <div className="w-52 h-52 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
              [ person image ]
            </div>
            {/* Up to date card */}
            <div className="bg-[#1a1aff] rounded-2xl p-4 w-52 mt-4">
              <div className="text-xs text-blue-200 mb-1">Up to date</div>
              <div className="text-xl font-bold text-white">$1,200.39</div>
            </div>
            {/* Happy students badge */}
            <div className="absolute -bottom-4 -right-8 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1,2,3].map(i => (
                  <div key={i} className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <span className="text-xs font-medium text-gray-700">Happy Students</span>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Create & Manage<br />Courses Easily.
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-sm">
            ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>
          <ul className="space-y-3">
            {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 bg-[#c8ff00] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
