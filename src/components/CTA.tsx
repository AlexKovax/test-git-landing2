const CTA = () => (
  <section className="py-20 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
        Prêt à commencer votre aventure Git ? 🎯
      </h2>
      <p className="text-xl mb-8 opacity-90 font-medium">
        Rejoignez des millions de développeurs qui ont déjà transformé leur workflow
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-violet-600 px-8 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
          Apprendre Git gratuitement 🚀
        </button>
        <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 font-medium">
          Créer un compte GitHub ✨
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
