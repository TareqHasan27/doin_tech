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
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover Your Passion,<br />Build Your Skills</h2>
          <p className="text-gray-600 text-base md:text-lg mx-auto py-6 max-w-7xl">
            At Bytespace Courses, we bring you life-changing knowledge. Explore a variety of courses across different <br /> fields, from technology to the arts, and discover your passion on your course journey.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat, index) => {
            const isActive = active === cat;
            const isFeatured = index === 0;

            let buttonClasses = 'px-3 py-1.5 rounded-full text-base border transition-colors';

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
          <button className="px-3 py-1.5 rounded-full text-base font-thin border border-gray-200 text-gray-600 hover:bg-[#d4fb20] hover:text-gray-900 hover:border-[#d4fb20] transition-colors">
            + More
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.image} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
