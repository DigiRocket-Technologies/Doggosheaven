function HelpSection() {
    return (
      <section className="w-full py-28 bg-[#94699c] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Lend a Paw, Change a Life<span className="text-amber-500">.</span>
            </h2>
  
            <p className="text-white text-lg font-bold mb-10">
              Join us in making a difference today. Your support helps rescue animals, provide care, and give them the
              chance to find loving homes.
            </p>
  
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">How You Can Help:</h3>
  
              <div className="flex items-start gap-3">
                <div className="min-w-4 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="flex">
                  <p className="font-bold text-white">Adopt a Pet</p>
                  <p className="text-white">– Open your heart and home to a pet in need.</p>
                </div>
              </div>
  
              <div className="flex items-start gap-3">
                <div className="min-w-4 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="flex">
                  <p className="font-bold text-white">Donate</p>
                  <p className="text-white">– Your donation directly funds veterinary care, food, and shelter.</p>
                </div>
              </div>
  
              <div className="flex items-start gap-3">
                <div className="min-w-4 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="flex ">
                  <p className="font-bold text-white">Volunteer</p>
                  <p className="text-white">– Give your time to make a meaningful impact.</p>
                </div>
              </div>
            </div>
  
            <div className="mt-10">
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
  
          <div className="absolute bottom-0 right-42">
            <img
              src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/67349fde31bfbc8a38137972_optimized_1025"
              alt="Rottweiler dog"
              className="h-[90vh] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default HelpSection
  