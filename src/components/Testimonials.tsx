const Testimonials = ({ testimonials }) => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-800">
          Ce qu'en disent les développeurs 💬
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">{testimonial.avatar}</div>
              <div>
                <h4 className="font-bold font-display text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm font-medium">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic text-lg font-medium">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
