import { GitBranch } from 'lucide-react';

const Header = () => (
  <header className="sticky top-0 backdrop-blur-sm bg-white/80 border-b border-gray-200 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <GitBranch className="w-8 h-8 text-violet-600" />
        <span className="text-2xl font-bold font-display bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
          GitMaster
        </span>
      </div>
      <button className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">
        Commencer 🚀
      </button>
    </div>
  </header>
);

export default Header;
