import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      school: 'College of Science and Technology',
      period: '2019 - 2023',
      degree: 'BE Information Technology',
      subjects: 'BE Information Technology',
    },
    {
      school: 'Jigme Sherubling Central School',
      period: '2017 - 2018',
      degree: 'Higher Secondary',
      subjects: 'Physics, Chemistry, Biology, Mathematics, English',
    },
    {
      school: 'Dungtse Central School',
      period: '2013 - 2016',
      degree: 'Secondary',
      subjects: 'Science, HCG, English, Computer Application, Dzongkha',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-12"></div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                <div className="absolute left-5 top-6 w-6 h-6 bg-white border-4 border-blue-500 rounded-full hidden md:block"></div>

                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg font-semibold text-slate-700 mb-2">{edu.degree}</p>
                      <p className="text-slate-600">{edu.subjects}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
