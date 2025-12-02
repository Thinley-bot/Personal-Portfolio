import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-6xl font-bold">
                  TN
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Thinley Norbu
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
              Software Developer
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Results-driven Software Engineer specializing in full-stack development, system design, and cloud-based solutions.
              Passionate about building scalable, maintainable applications with modern frameworks.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a href="mailto:thinleynorbu210@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition">
                <Mail size={18} />
                <span className="text-sm">thinleynorbu210@gmail.com</span>
              </a>
              <a href="tel:+97577873210" className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition">
                <Phone size={18} />
                <span className="text-sm">+975 77873210</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <MapPin size={18} />
                <span className="text-sm">RTC, Thimphu</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition transform flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition flex items-center gap-2">
                <Github size={20} />
                GitHub
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition flex items-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
