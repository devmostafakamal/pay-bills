function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Account",
      description: "Register with your basic information",
    },
    {
      number: "2",
      title: "Add Payment Method",
      description: "Connect your bank account or card",
    },
    {
      number: "3",
      title: "Select Biller",
      description: "Choose from our list of billers",
    },
    {
      number: "4",
      title: "Pay & Relax",
      description: "Complete payment and receive confirmation",
    },
  ];

  return (
    <section
      className="py-12 bg-[#6bb3f7]
"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex  items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center md:w-[288px] h-[132px]">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
