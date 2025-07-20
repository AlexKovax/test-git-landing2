import {
  Header,
  Hero,
  GitVsGitHub,
  Benefits,
  BeforeAfter,
  Stats,
  Testimonials,
  Pricing,
  CTA,
  Footer,
} from './components';
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
  Github,
  HardDrive,
  Cloud,
  Network,
  FileText,
  Folder,
  Globe,
  Coffee,
  Pizza,
  Crown
} from 'lucide-react';

function App() {
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

  const pricingPlans = [
    {
      name: "Commit Timide",
      subtitle: "Pour les débutants courageux",
      price: "3 ☕ par mois",
      originalPrice: "47 croissants",
      emoji: "🙈",
      icon: <Coffee className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      borderColor: "border-green-200",
      features: [
        "1 repository (c'est déjà bien !)",
        "Droit à 10 erreurs par jour",
        "Support émotionnel inclus",
        "Autocollants motivants",
        "Accès au chat des débutants"
      ],
      popular: false
    },
    {
      name: "Push Confiant",
      subtitle: "Pour les aventuriers du code",
      price: "1 🍕 par semaine",
      originalPrice: "23 burgers",
      emoji: "😎",
      icon: <Pizza className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      borderColor: "border-blue-300",
      features: [
        "Repositories illimités (ou presque)",
        "Merge conflicts résolus par magie",
        "Café offert en cas de bug critique",
        "Accès VIP aux memes de développeurs",
        "Badge 'Je sais ce que je fais'"
      ],
      popular: true
    },
    {
      name: "Merge Master",
      subtitle: "Pour les légendes vivantes",
      price: "Votre âme 👻",
      originalPrice: "Inestimable",
      emoji: "🧙‍♂️",
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-300",
      features: [
        "Pouvoir de remonter le temps",
        "Git rebase niveau Jedi",
        "Statue à votre effigie chez GitHub",
        "Ligne directe avec Linus Torvalds",
        "Immortalité dans l'historique Git"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      <Header />
      <Hero />
      <GitVsGitHub />
      <Benefits benefits={benefits} />
      <BeforeAfter beforeAfter={beforeAfter} />
      <Stats stats={stats} />
      <Testimonials testimonials={testimonials} />
      <Pricing pricingPlans={pricingPlans} />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;