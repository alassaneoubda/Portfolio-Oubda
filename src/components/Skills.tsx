import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'Angular', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'Java', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 82 },
    { name: 'RESTful APIs', level: 88 },
    { name: 'Git', level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-blue-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}