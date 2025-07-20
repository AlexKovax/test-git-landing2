const Stats = ({ stats }) => (
  <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
          GitHub en chiffres 📈
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-4xl mb-2">{stat.emoji}</div>
            <div className="text-4xl font-bold font-display text-violet-600 mb-2">{stat.number}</div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
