const paths = [
  { image: '/a_one.png', label: 'Design' },
  { image: '/a_two.png', label: 'Development' },
  { image: '/a_three.png', label: 'IT & Software' },
  { image: '/a_four.png', label: 'Business' },
  { image: '/a_five.png', label: 'Marketing' },
  { image: '/a_six.png', label: 'Photography' },
];

export default function LearningPaths() {
  return (
    <section className="px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto max-w-6xl text-sm text-gray-600 sm:text-base md:text-lg">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various
            <br className="hidden md:block" />
            fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-[40px]">
          {paths.map((path) => (
            <div
              key={path.label}
              className="flex h-[167px] w-[167px] flex-col items-center justify-center gap-3 rounded-[25px] border-2 border-[#ced0d3] p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#c8ff00] shadow-md transition-transform group-hover:scale-110">
                <img src={path.image} alt={path.label} className="w-[36px]" />
              </div>
              <span className="px-2 text-center text-sm font-medium text-gray-900">{path.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
