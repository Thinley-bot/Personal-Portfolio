import { Code, Layout, Server, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: Layout,
      color: 'from-pink-500 to-rose-500',
      skills: [
        'Prototyping and wireframing using Figma',
        'Designing intuitive and responsive user interfaces',
        'Applying user-centered design principles and design thinking',
        'Conducting requirement analysis and usability testing',
        'Proficient in using Adobe Illustrator and Photoshop',
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'HTML5, CSS3, JavaScript (ES6+), TypeScript',
        'Frameworks: React, Next.js, Tailwind CSS, Bootstrap',
        'State management (Redux, Context API), API integration (REST, GraphQL)',
        'Responsive and accessible design implementation',
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        'Languages: Python, JavaScript (Node.js), Java',
        'Frameworks: Django, Spring Boot, NestJS, T3 Stack',
        'API Development & Integration, Authentication, and Middleware Design',
        'Database Management: PostgreSQL, MySQL',
        'Deployment: Docker, Nginx',
        'Clean Architecture',
      ],
    },
    {
      title: 'Artificial Intelligence',
      icon: Brain,
      color: 'from-violet-500 to-purple-500',
      skills: [
        'Experience with LangChain, Ollama, and APIs for building RAG-based chat systems',
        'Data extraction, preprocessing, ingestions and model integration',
        'Working knowledge of vector databases (e.g., ChromaDB, PineconeDB)',
        'Development of RAG based chatbot for RMA',
      ],
    },
    {
      title: 'Other Skills',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        'Version Control (Git/GitHub), CI/CD, Agile & Scrum Practices',
        'System Design, Clean Architecture, and Dependency Inversion Principle (DIP)',
        'Strong problem-solving, analytical thinking, and collaboration skills',
        'Communication and Macro economics knowledges',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
