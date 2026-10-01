const logos = [
  '/logo_one.png',
  '/logo_two.png',
  '/logo_three.png',
  '/logo_four.png',
  '/loog_5.png',
];

export default function Partners() {
  return (
<section className="bg-[#f5f5f6] h-[202px] border-b border-gray-100 flex items-center">
  <div className="max-w-8xl mx-auto w-full flex items-center justify-around px-12">
    {logos.map((logo) => (
      <div key={logo} className="flex items-center gap-2 text-gray-400">
        <img src={logo} alt="Partner logo" className="h-8" />
      </div>
    ))}
  </div>
</section>
  );
}
