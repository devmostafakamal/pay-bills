function Testimonials() {
  const testimonials = [
    {
      name: "Rahim Khan",
      role: "DESCO Customer",
      content:
        "This service saved me so much time! I can now pay my electricity bill in just a few clicks.",
      avatar: "/avatar1.jpg",
    },
    {
      name: "Fatima Begum",
      role: "NESCO User",
      content:
        "Very reliable platform. I've been using it for 2 years without any issues.",
      avatar: "/avatar2.jpg",
    },
    {
      name: "Jamal Uddin",
      role: "Business Owner",
      content:
        "The auto-pay feature is a game changer for my business. Highly recommended!",
      avatar: "/avatar3.jpg",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
