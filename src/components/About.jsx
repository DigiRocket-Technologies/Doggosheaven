
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

function AboutSection() {

  const [openIndex, setOpenIndex] = useState(null)

  const items = [
    {
      title: "Commitment to Compassion",
      content:
        "We treat every animal with kindness and respect. Compassion guides our every action and decision.",
    },
    {
      title: "Focus on Health and Happiness",
      content:
        "We prioritize the well-being of pets through proper care. Our aim is a healthy and joyful life for every animal.",
    },
    {
      title: "Building Loving Connections",
      content:
        "We connect pets with loving families. Our goal is lifelong, heartwarming companionships.",
    },
  ]


  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
      <div className="h-full">
  <img
    src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0c969e0dbc5d3198ab4d_optimized_1396_c1396x930-0x0"
    alt="Person with rabbit"
    className="w-full h-full  object-cover"
  />
</div>


<div className="py-12 mt-12 max-w-[80%]">
  <img src="./foot.svg" className="h-12 mb-4" />
  
  <p className="text-amber-500 text-xs uppercase tracking-wider font-medium mb-4">- ABOUT US -</p>

  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
    What Makes Us Care About Pets<span className="text-amber-500">.</span>
  </h2>

  <p className="text-gray-600 text-lg mb-6">Our love for animals drives everything we do.</p>

  <p className="text-gray-400 text-lg mb-8">
    We care about pets because we see their unique personalities, the joy they bring, and their unwavering
    loyalty. Every animal deserves a chance to live a happy, healthy life, surrounded by love. Our mission is to
    rescue, protect, and find forever homes for these animals, giving them the second chance they truly deserve.
  </p>

  <div className="space-y-4">
    {items.map((item, index) => (
      <div key={index} className="border-b">
        <button
          className="w-full flex items-center justify-between p-4 font-medium text-gray-800 hover:text-gray-600"
          onClick={() => toggleItem(index)}
        >
          <span className="font-bold text-2xl">{item.title}</span>
          {openIndex === index ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </button>
        {openIndex === index && (
          <div className="px-4 pb-4 text-gray-600">
            {item.content}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  )
}

export default AboutSection
