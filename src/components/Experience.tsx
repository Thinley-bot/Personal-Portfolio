import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Assistant IT Officer',
      period: '2024 - Present',
      organization: 'Royal Monetary Authority',
      description: 'Responsible for overseeing core operational applications and ensuring reliability, performance, and security of critical IT systems. Bridging infrastructure maintenance and software development to enhance organizational efficiency.',
      responsibilities: [
        'Oversee and maintain operational systems, servers, and databases ensuring high availability',
        'Diagnose and resolve system and application issues related to performance and connectivity',
        'Design and develop in-house software applications aligned with institutional standards',
        'Implement secure coding practices and adhere to organizational IT governance',
        'Collaborate with cross-functional teams to deliver scalable, maintainable software solutions',
        'Monitor database performance, manage backups, and perform regular system optimizations',
      ],
    },
    {
      title: 'Trainee Software Engineer',
      period: '2023 - 2024',
      organization: 'Royal Monetary Authority',
      description: 'Developed Data Warehouse system supporting financial analytics, departmental dashboards, and data-driven decision-making. Focused on designing database schemas and delivering high-performance reporting.',
      responsibilities: [
        'Design and implement data warehouse schemas optimized for analytical performance',
        'Develop and maintain ETL pipelines for efficient data ingestion and transformation',
        'Create financial reports and interactive dashboards to support departmental analytics',
        'Collaborate with cross-functional teams to align technical solutions with business requirements',
        'Coordinate User Acceptance Testing sessions, ensuring quality and resolving issues',
      ],
    },
    {
      title: 'Intern under Transformation Team',
      period: '2022 - 2023',
      organization: 'Singaporean Transformation Team',
      description: 'Completed professional internship gaining first-hand exposure to digital innovation and strategic change management within the financial sector. Worked in a fast-paced, multicultural environment focusing on modernization and system design.',
      responsibilities: [
        'Collaborated on Smart Parking System project throughout the entire product lifecycle',
        'Created UI/UX mockups using Figma ensuring user-centered design and functional flow',
        'Assisted in defining system architecture, integrating data flow, security, and scalability',
        'Participated in brainstorming sessions aligning technical solutions with strategic objectives',
        'Gained exposure to digital transformation frameworks, agile teamwork, and structured problem-solving',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                    <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-blue-600 mb-3">{exp.organization}</p>
                  <p className="text-slate-700 leading-relaxed mb-4">{exp.description}</p>
                </div>
              </div>

              <div className="pl-0 md:pl-16">
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-emerald-500 rounded"></span>
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="flex-shrink-0 text-emerald-500 mt-1" size={18} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
