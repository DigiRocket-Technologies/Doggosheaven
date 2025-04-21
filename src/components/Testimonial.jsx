"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function TestimonialsSection() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John & Sarah Davis",
      image:
        "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0ed8995899838cc53392_optimized_343_c343x343-0x0",
      petAdopted: "Max (Dog)",
      quote:
        "Adopting Max was the best decision we ever made! He's brought so much joy into our lives, and we can't imagine our home without him. Max was shy at first, but with patience and love, he's opened up and become the most loyal and loving dog. He greets us every day with excitement and tail wags, and we feel so lucky to have him. He's become part of our family, and seeing him happy makes us the happiest family in the world.",
      date: "December 15, 2024",
    },
    {
      id: 2,
      name: "Emily Johnson",
      image:
        "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0ed8995899838cc53392_optimized_343_c343x343-0x0",
      petAdopted: "Luna (Cat)",
      quote:
        "Luna has completely transformed our home with her playful energy and affectionate nature. She was so timid when we first brought her home, but now she's the queen of the house! Every evening she curls up on our laps while we watch TV, and her purring is the most soothing sound. Adopting her was one of the best decisions we've ever made.",
      date: "November 3, 2024",
    },
    {
      id: 3,
      name: "Michael & Lisa Thompson",
      image:
        "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0ed8995899838cc53392_optimized_343_c343x343-0x0",
      petAdopted: "Buddy (Rabbit)",
      quote:
        "We never knew rabbits could have such unique personalities until we met Buddy! He's curious, intelligent, and has brought so much joy to our family. Our children have learned so much about responsibility and compassion through caring for him. We're so grateful to the shelter for helping us find the perfect addition to our family.",
      date: "October 22, 2024",
    },
  ]

  // State to track current testimonial
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
        <div>
          <img src="./foot.svg" className="h-16"/>
         </div>
        </div>

        <p className="text-amber-500 uppercase tracking-wider font-medium mb-4">- SUCCESS STORIES -</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Loyal Hearts, Forever Homes<span className="text-amber-500">.</span>
        </h2>

        <p className="text-gray-600 text-xl font-bold mb-12">
          Read the heartwarming stories of those who gave a second chance to animals in need.
        </p>

        <div className="relative">
        <div className="relative flex flex-col items-center">

{/* Left button */}
<button
  onClick={goToPrevious}
  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors"
  aria-label="Previous testimonial"
>
  <ChevronLeft className="w-6 h-6" />
</button>  

{/* Testimonial content */}
<div className="flex flex-col items-center px-12"> {/* added horizontal padding to prevent overlap with buttons */}
  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
    <img
      src={currentTestimonial.image || "/placeholder.svg"}
      alt={currentTestimonial.name}
      className="object-cover w-full h-full"
    />
  </div>

  <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentTestimonial.name}</h3>
  <p className="text-gray-500 mb-4">
    Pet Adopted: <span className="font-medium">{currentTestimonial.petAdopted}</span>
  </p>

  <blockquote className="text-gray-600 italic text-center max-w-2xl mb-8">
    "{currentTestimonial.quote}"
  </blockquote>

  <p className="text-[#489CBE] font-bold mb-8">{currentTestimonial.date}</p>

  {/* Indicator dots */}
  <div className="flex justify-center mt-6 gap-2">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-amber-500" : "bg-gray-300"}`}
        aria-label={`Go to testimonial ${index + 1}`}
      />
    ))}
  </div>
</div>

{/* Right button */}
<button
  onClick={goToNext}
  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-colors"
  aria-label="Next testimonial"
>
  <ChevronRight className="w-6 h-6" />
</button>
</div>

        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
