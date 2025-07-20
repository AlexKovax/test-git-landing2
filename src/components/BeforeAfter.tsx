import { XCircle, CheckCircle } from 'lucide-react';

const BeforeAfter = ({ beforeAfter }) => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
          Avant vs Après Git 📊
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          Voyez la différence que Git peut faire dans votre workflow quotidien
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-red-200">
          <h3 className="text-2xl font-bold font-display mb-6 text-red-600 flex items-center">
            <XCircle className="w-8 h-8 mr-3" />
            Sans Git 😰
          </h3>
          <div className="space-y-4">
            {beforeAfter.before.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                {item.icon}
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-green-200">
          <h3 className="text-2xl font-bold font-display mb-6 text-green-600 flex items-center">
            <CheckCircle className="w-8 h-8 mr-3" />
            Avec Git 🎉
          </h3>
          <div className="space-y-4">
            {beforeAfter.after.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                {item.icon}
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
