import React from "react"

function ContactSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <img src="./foot2.svg" className="h-12"/>
        </div>

        <p className="text-[#FDDF55] uppercase tracking-wider font-medium text-center mb-4">- CONTACTS -</p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Let's Get In Touch<span className="text-blue-500">.</span>
        </h2>

        <p className="text-gray-600 text-lg font-bold text-center mb-12">
          Whether you're interested in adopting, donating, or simply want to learn more, don't hesitate to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-80 flex items-center justify-center">
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </div>

          <div>
  <form className="space-y-6 text-lg">
    <div className="">
      <input
        type="text"
        placeholder="Enter your full name*"
        className="w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <input
        type="tel"
        placeholder="Enter your phone number*"
        className="w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <input
        type="email"
        placeholder="Enter your e-mail*"
        className="w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <textarea
        placeholder="Type your message"
        rows="4"
        className="w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
    <div>
      <button className="w-full bg-[#e7c531] rounded-2xl hover:bg-amber-600 text-white font-medium py-3 px-4  transition-colors">
        Request a Quote
      </button>
    </div>
  </form>
</div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
