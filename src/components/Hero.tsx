import { useState, useEffect } from 'react';
import { ArrowRight, Github } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Maîtrisez vos projets avec Git & GitHub';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
          {typedText}
          <span className="animate-pulse text-violet-600">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          Découvrez la puissance de Git et GitHub pour transformer votre façon de coder
          et collaborer sur vos projets ✨
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <button className="group bg-gradient-to-r from-violet-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-medium">
          <span>Apprendre Git</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="group border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full text-lg hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center space-x-2 font-medium">
          <Github className="w-5 h-5" />
          <span>Découvrir GitHub</span>
        </button>
      </div>

      {/* Hero Animation */}
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-left space-y-2 font-mono text-sm">
            <div className="text-gray-600">$ git init</div>
            <div className="text-green-600">Initialized empty Git repository 🎉</div>
            <div className="text-gray-600">$ git add .</div>
            <div className="text-gray-600">$ git commit -m "Premier commit 🚀"</div>
            <div className="text-blue-600">[main abc123] Premier commit 🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
