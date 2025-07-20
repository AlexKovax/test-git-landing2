import { GitBranch } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <GitBranch className="w-8 h-8 text-violet-400" />
        <span className="text-2xl font-bold font-display">GitMaster</span>
      </div>
      <p className="text-gray-400 mb-4 font-medium">
        Votre guide pour maîtriser Git et GitHub 🎓
      </p>
      <div className="flex justify-center space-x-6 text-sm text-gray-400">
        <span>Fait avec ❤️ pour les développeurs</span>
      </div>
    </div>
  </footer>
);

export default Footer;
