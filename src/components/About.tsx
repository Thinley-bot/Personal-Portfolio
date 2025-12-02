import { Code2, Database, Cloud, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Code2, text: 'Full-Stack Development', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, text: 'Database Architecture', color: 'from-emerald-500 to-teal-500' },
    { icon: Cloud, text: 'Cloud Solutions', color: 'from-violet-500 to-purple-500' },
    { icon: Zap, text: 'Performance Optimization', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="py-20 px-6 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-12"></div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 shadow-xl">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Results-driven Software Engineer with a strong background in full-stack development, system design,
            and cloud-based application deployment. Skilled in building scalable, maintainable, and secure software
            solutions using modern frameworks and architectures.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Experienced in designing RESTful APIs, implementing database-driven systems, and optimizing backend
            performance. Adept at collaborating in cross-functional teams, applying clean code principles, and
            leveraging best practices like SOLID and the Dependency Inversion Principle for sustainable software
            growth. Passionate about innovation, automation, and continuous learning in emerging technologies such
            as AI integration, RAG-based systems, and clean architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-slate-900">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
