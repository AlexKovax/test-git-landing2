import { Star, CheckCircle, Coffee, Pizza, Crown } from 'lucide-react';

const Pricing = ({ pricingPlans }) => (
  <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
          Nos tarifs complètement farfelus 🤪
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
          Parce que Git et GitHub sont gratuits, on a inventé des prix imaginaires !
          Choisissez votre niveau de folie 🎭
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`relative bg-gradient-to-br ${plan.color} p-1 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'lg:-translate-y-4' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Plus populaire !
                </div>
              </div>
            )}

            <div className="bg-white rounded-3xl p-8 h-full">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{plan.emoji}</div>
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{plan.subtitle}</p>

                <div className="mb-4">
                  <div className="text-3xl font-bold font-display text-gray-800">{plan.price}</div>
                  <div className="text-sm text-gray-500 line-through">au lieu de {plan.originalPrice}</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                {plan.popular ? "C'est parti ! 🎉" : "Pourquoi pas ? 🤔"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
          <p className="text-2xl mb-4">🎭</p>
          <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">
            Psst... petit secret !
          </h3>
          <p className="text-lg text-gray-600 font-medium">
            En vérité, Git et GitHub sont <strong>100% gratuits</strong> !
            Cette section pricing n'existe que pour vous faire sourire 😄
          </p>
          <button className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Commencer gratuitement 🆓
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
