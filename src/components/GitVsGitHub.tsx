import { GitBranch, Github, HardDrive, Cloud, Network, FileText, Clock, Users, ArrowRight, Globe } from 'lucide-react';

const GitVsGitHub = () => {
  const gitFeatures = [
    { icon: <FileText className="w-6 h-6" />, text: "Historique des changements", emoji: "📝" },
    { icon: <GitBranch className="w-6 h-6" />, text: "Branches et fusion", emoji: "🌳" },
    { icon: <HardDrive className="w-6 h-6" />, text: "Stockage local", emoji: "💾" },
    { icon: <Clock className="w-6 h-6" />, text: "Versions de votre code", emoji: "⏰" }
  ];

  const githubFeatures = [
    { icon: <Cloud className="w-6 h-6" />, text: "Hébergement cloud", emoji: "☁️" },
    { icon: <Users className="w-6 h-6" />, text: "Collaboration d'équipe", emoji: "👥" },
    { icon: <Globe className="w-6 h-6" />, text: "Partage public", emoji: "🌍" },
    { icon: <Network className="w-6 h-6" />, text: "Issues & Pull Requests", emoji: "🔗" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
            Git vs GitHub : Quelle différence ? 🤷‍♂️
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Beaucoup confondent Git et GitHub. Laissez-nous vous expliquer clairement !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Git Section */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl shadow-lg border-2 border-orange-200">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-display text-orange-600 mb-2">Git</h3>
              <p className="text-lg text-gray-700 font-medium">Le système de contrôle de version</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">💻</span>
                  Qu'est-ce que c\'est ?
                </h4>
                <p className="text-gray-600">
                  Un logiciel qui suit les modifications de vos fichiers au fil du temps.
                  Il fonctionne sur <strong>votre ordinateur</strong>.
                </p>
              </div>

              <div className="space-y-3">
                {gitFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                    <span className="text-2xl">{feature.emoji}</span>
                    <div className="text-orange-600">{feature.icon}</div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-100 p-4 rounded-xl">
              <p className="text-sm text-orange-800 font-medium">
                <strong>En résumé :</strong> Git = L'outil qui gère vos versions de code localement 📁
              </p>
            </div>
          </div>

          {/* GitHub Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg border-2 border-blue-200">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-display text-gray-800 mb-2">GitHub</h3>
              <p className="text-lg text-gray-700 font-medium">La plateforme de collaboration</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <span className="text-2xl mr-2">🌐</span>
                  Qu'est-ce que c\'est ?
                </h4>
                <p className="text-gray-600">
                  Un service en ligne qui héberge vos projets Git et permet la collaboration.
                  Il fonctionne dans <strong>le cloud</strong>.
                </p>
              </div>

              <div className="space-y-3">
                {githubFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-xl">
                    <span className="text-2xl">{feature.emoji}</span>
                    <div className="text-blue-600">{feature.icon}</div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl">
              <p className="text-sm text-blue-800 font-medium">
                <strong>En résumé :</strong> GitHub = La plateforme qui héberge et partage vos projets Git 🌐
              </p>
            </div>
          </div>

          {/* How they work together */}
          <div className="bg-gradient-to-r from-violet-100 to-blue-100 p-8 rounded-3xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-display text-gray-800 mb-4">
                Comment ils fonctionnent ensemble ? 🤝
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">1. Vous codez avec Git</h4>
                <p className="text-gray-600 text-sm">
                  Git suit vos modifications localement sur votre machine 💻
                </p>
              </div>

              <div className="text-center">
                <ArrowRight className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <p className="text-violet-600 font-bold">git push</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">2. Vous partagez sur GitHub</h4>
                <p className="text-gray-600 text-sm">
                  GitHub héberge et permet la collaboration sur vos projets 🌐
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl mt-8 text-center">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-2xl mr-2">💡</span>
                <strong>Analogie simple :</strong> Git est comme votre carnet de notes personnel,
                GitHub est comme la bibliothèque où vous le partagez avec le monde !
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default GitVsGitHub;
