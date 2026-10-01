export default function Testimonials() {
  const testimonials = [
    {
      image: '/img_three.png',
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      image: '/img_one.png',
      name: 'James L.',
      role: 'Lifelong Learner',
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      image: '/img_two.png',
      name: 'Alex B.',
      role: 'Inspired Creator',
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ];

  return (
    <section className="relative isolate overflow-hidden px-4 py-14 sm:px-6 md:px-12 md:py-20 lg:px-32">
      {/* ===== Background base ===== */}
      <div className="absolute inset-0 -z-10 bg-[#f7f8fa]" />

      {/* ===== Yellow-green glow #1: TOP CENTER (above 2nd card) ===== */}
      <div className="absolute left-1/2 top-0 z-0 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#dcff85] opacity-90 blur-[120px]" />

      {/* ===== Yellow-green glow #2: RIGHT SIDE, MIDDLE (around 3rd card) ===== */}
      <div className="absolute right-0 top-1/3 z-0 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-[#dcff85] opacity-80 blur-[130px]" />

      {/* ===== Blue-purple glow: BOTTOM LEFT ===== */}
      <div className="absolute bottom-0 left-0 z-0 h-[500px] w-[700px] rounded-full bg-[#b8c4ff] opacity-55 blur-[140px]" />

      {/* ===== Soft white glow in center ===== */}
      <div className="absolute left-1/3 top-1/2 z-0 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-white opacity-80 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* ===== Header: title left, description right ===== */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:mb-16 md:grid-cols-2 md:gap-16">
          {/* Left: Big heading */}
          <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-[#111] sm:text-5xl md:text-6xl">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          {/* Right: Description */}
          <p className="max-w-xl text-base leading-relaxed text-[#4a4a4a] md:pt-2 md:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-3xl border border-[#ececf0] bg-white p-6 shadow-[0_4px_24px_rgba(15,16,27,0.06)] sm:p-7"
            >
              {/* Avatar */}
              <div className="mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-[72px] w-[72px] rounded-full object-cover"
                />
              </div>

              {/* Name + Role */}
              <h3 className="mb-1 text-[17px] font-bold text-[#111]">{t.name}</h3>
              <p className="mb-5 text-[15px] text-[#2b59ff]">{t.role}</p>

              {/* Quote */}
              <p className="text-[15px] leading-relaxed text-[#3a3a3a]">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}