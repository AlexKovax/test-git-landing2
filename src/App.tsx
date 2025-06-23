import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Users, 
  Shield, 
  Zap, 
  Code, 
  Star, 
  GitMerge,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Github
} from 'lucide-react';

function App() {
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

  const benefits = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Versioning Intelligent",
      description: "Gardez un historique complet de tous vos changements 📚",
      emoji: "🎯"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration Fluide",
      description: "Travaillez en équipe sans conflits ni perte de code 🤝",
      emoji: "👥"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Garantie",
      description: "Vos projets sont sauvegardés et sécurisés dans le cloud ☁️",
      emoji: "🔒"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Déploiement Rapide",
      description: "Mettez en ligne vos projets en quelques clics ⚡",
      emoji: "🚀"
    }
  ];

  const beforeAfter = {
    before: [
      { text: "Fichiers perdus", icon: <XCircle className="w-5 h-5 text-red-500" /> },
      { text: "Travail en silo", icon: <XCircle className="w-5 h-5 text-red-500" /> },
      { text: "Versions multiples", icon: <XCircle className="w-5 h-5 text-red-500" /> },
      { text: "Stress permanent", icon: <XCircle className="w-5 h-5 text-red-500" /> }
    ],
    after: [
      { text: "Historique complet", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
      { text: "Collaboration efficace", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
      { text: "Versions organisées", icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
      { text: "Sérénité totale", icon: <CheckCircle className="w-5 h-5 text-green-500" /> }
    ]
  };

  const stats = [
    { number: "100M+", label: "Développeurs actifs", emoji: "👩‍💻" },
    { number: "420M+", label: "Repositories publics", emoji: "📦" },
    { number: "99.9%", label: "Uptime garanti", emoji: "⚡" },
    { number: "85%", label: "Fortune 100 companies", emoji: "🏢" }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Lead Developer @TechCorp",
      content: "Git a révolutionné notre façon de travailler. Plus jamais de code perdu ! 🎉",
      avatar: "👩‍💻"
    },
    {
      name: "Thomas Martin",
      role: "Freelance Developer",
      content: "GitHub m'a permis de montrer mon travail et décrocher de meilleurs projets 💼",
      avatar: "👨‍💻"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-sm bg-white/80 border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GitBranch className="w-8 h-8 text-violet-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Gitmaster
            </span>
          </div>
          <button className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Commencer 🚀
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            {typedText}
            <span className="animate-pulse text-violet-600">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez la puissance de Git et GitHub pour transformer votre façon de coder 
            et collaborer sur vos projets ✨
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-violet-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Apprendre Git</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full text-lg hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center space-x-2">
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

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Pourquoi Git & GitHub ? 🤔
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des millions de développeurs utilisent Git et GitHub pour leurs projets. 
              Voici pourquoi vous devriez vous y mettre aussi !
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl mb-4 text-center">{benefit.emoji}</div>
                <div className="text-violet-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Avant vs Après Git 📊
            </h2>
            <p className="text-xl text-gray-600">
              Voyez la différence que Git peut faire dans votre workflow quotidien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
                <XCircle className="w-8 h-8 mr-3" />
                Sans Git 😰
              </h3>
              <div className="space-y-4">
                {beforeAfter.before.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                Avec Git 🎉
              </h3>
              <div className="space-y-4">
                {beforeAfter.after.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              GitHub en chiffres 📈
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-4xl font-bold text-violet-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Ce qu'en disent les développeurs 💬
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer votre aventure Git ? 🎯
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des millions de développeurs qui ont déjà transformé leur workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-600 px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
              Apprendre Git gratuitement 🚀
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-violet-600 transition-all duration-300">
              Créer un compte GitHub ✨
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GitBranch className="w-8 h-8 text-violet-400" />
            <span className="text-2xl font-bold">GitMaster</span>
          </div>
          <p className="text-gray-400 mb-4">
            Votre guide pour maîtriser Git et GitHub 🎓
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>Fait avec ❤️ pour les développeurs</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;