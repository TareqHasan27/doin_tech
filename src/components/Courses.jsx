import { useState } from 'react';
import CourseCard from './CourseCard';

const categories = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Storytelling', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking'];

const courses = [
  { title: 'Balancing Productivity an...', rating: '4.5', students: '2k', price: '$25', level: 'Beginner', image: '/course_one.png' },
  { title: 'Learn Figma from Basic', rating: '4.9', students: '4k', price: '$25', level: 'Beginner', image: '/course_two.png' },
  { title: 'Build Digital Asset', rating: '4.8', students: '3k', price: '$25', level: 'Beginner', image: '/course_three.png' },
  { title: 'The Power of Big Data', rating: '4.8', students: '5k', price: '$25', level: 'Beginner', image: '/course_four.png' },
  { title: 'Mastering Money Manage...', rating: '4.8', students: '3k', price: '$25', level: 'Beginner', image: '/course_five.png' },
  { title: 'From Idea to Startup Succ...', rating: '4.9', students: '4k', price: '$25', level: 'Beginner', image: '/course_six.png' },
];

export default function Courses() {
  const [active, setActive] = useState('Featured');

  return (
    <section className="bg-white px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Discover Your Passion,
            <br className="hidden sm:block" />
            Build Your Skills
          </h2>
          <p className="mx-auto max-w-6xl text-sm text-gray-600 sm:text-base md:text-lg">
            At Bytespace Courses, we bring you life-changing knowledge. Explore a variety of courses across different
            <br className="hidden md:block" />
            fields, from technology to the arts, and discover your passion on your course journey.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat, index) => {
            const isActive = active === cat;
            const isFeatured = index === 0;

            let buttonClasses = 'px-3 py-1.5 rounded-full text-sm sm:text-base border transition-colors';

            if (isActive) {
              buttonClasses += isFeatured
                ? ' bg-[#d4fb20] text-gray-900 border-[#d4fb20] font-medium'
                : ' bg-[#1a1aff] text-white border-[#1a1aff] font-medium';
            } else {
              buttonClasses += ' bg-[#f5f5f6] text-gray-700 border-gray-200 font-thin hover:bg-[#d4fb20] hover:text-gray-900 hover:border-[#d4fb20]';
            }

            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={buttonClasses}
              >
                {cat}
              </button>
            );
          })}
          <button className="rounded-full border border-gray-200 px-3 py-1.5 text-sm font-thin text-gray-600 transition-colors hover:border-[#d4fb20] hover:bg-[#d4fb20] hover:text-gray-900 sm:text-base">
            + More
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <div key={course.image} className="mx-auto w-full max-w-[360px] sm:max-w-none">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
