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
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="text-gray-600 text-base md:text-lg mx-auto max-w-7xl">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various <br /> fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>
        <div className="flex justify-center gap-[40px] flex-wrap">
          {paths.map((path, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 cursor-pointer group border-2 border-[#ced0d3] rounded-[25px] p-6 w-[167px] h-[167px]"
            >
              <div className="w-[60px] h-[60px] bg-[#c8ff00] rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={path.image} alt={path.label} className="w-[36px]" />
              </div>
              <span className="text-sm font-medium text-gray-900 text-center px-2">
                {path.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
