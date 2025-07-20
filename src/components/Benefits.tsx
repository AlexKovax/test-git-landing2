import { GitBranch, Users, Shield, Zap } from 'lucide-react';

const Benefits = ({ benefits }) => (
  <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
          Pourquoi Git & GitHub ? 🤔
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
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
            <h3 className="text-xl font-bold font-display mb-3 text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
