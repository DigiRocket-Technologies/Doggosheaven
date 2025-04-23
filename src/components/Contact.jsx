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
        
          <div className="google-maps relative w-full pt-[56.25%]"> 
       
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9365510154903!2d76.9700345088445!3d28.39098429491173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d003aac66ab%3A0x32a6dd785b4cbc4f!2sDoggos%20Heaven!5e0!3m2!1sen!2sin!4v1745414318175!5m2!1sen!2sin"  loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
       
          title="Doggos Heaven"
        ></iframe>
      </div>
        

          <div>
  <form className="space-y-6 text-lg">
    <div className="">
      <input
        type="text"
        placeholder="Enter your full name*"
        className="w-full px-4 py-3 rounded-l-full rounded-tr-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <input
        type="tel"
        placeholder="Enter your phone number*"
        className="w-full px-4 py-3 rounded-l-full rounded-tr-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <input
        type="email"
        placeholder="Enter your e-mail*"
        className="w-full px-4 py-3 rounded-l-full rounded-tr-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <textarea
        placeholder="Type your message"
        rows="4"
        className="w-full px-8 py-3 rounded-l-full rounded-tr-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
    <div>
      <button className="w-full bg-[#e7c531] rounded-l-full rounded-tr-full hover:bg-amber-600 text-white font-medium py-3 px-4  transition-colors">
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
