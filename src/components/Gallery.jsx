

import { useState } from "react"


function GallerySection() {
  // Images data for the gallery
  const galleryImages = [
    {
      id: 1,
      src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b1893550232c45440dd8f_optimized_1396_c1396x930-0x0",
      alt: "Dog in shelter",
    },
    {
      id: 2,
      src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18b3550232c45440de47_optimized_1396_c1396x930-0x0",
      alt: "Couple with dog",
    },
    {
      id: 3,
      src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18c2ece0e84849bc17b8_optimized_930_c930x1395-0x0",
      alt: "Rabbit",
    },
    {
      id: 4,
      src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18d69e0dbc5d3198d4da_optimized_1140_c1140x1140-0x0",
      alt: "Cat",
    },
    {
      id: 5,
      src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18e9550232c45440def3_optimized_1091",
      alt: "Small pets",
    },
    {
      id: 6,
      src: "https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b18f9550232c45440df2f_optimized_1322_c1322x983-0x0",
      alt: "Cats on counter",
    },
  ]

  // Create a second set of images for the slider functionality
  const allImages = [...galleryImages, ...galleryImages]

  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0)
  const imagesPerSlide = 6 // Number of images shown at once
  const totalSlides = Math.ceil(allImages.length / imagesPerSlide)

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  // Get current slide images
  const getCurrentSlideImages = () => {
    const startIndex = currentIndex * imagesPerSlide
    return allImages.slice(startIndex, startIndex + imagesPerSlide)
  }

  const currentImages = getCurrentSlideImages()

  return (
<section className="w-full py-12 px-6 bg-gray-100">
  <div className="max-w-8xl mx-auto">
   

    {/* Fixed height applied here */}
    <div className="flex w-full space-x-6 h-[500px]">
      {/* Left large image */}
      <div className="w-[33%] h-full">
        <img
          src={currentImages[0].src || "/placeholder.svg"}
          alt={currentImages[0].alt}
          className="w-full h-full object-cover "
        />
      </div>

      {/* First column of two stacked images */}
      <div className="w-[16%] flex flex-col space-y-6 h-full">
        <div className="h-1/2">
          <img
            src={currentImages[1].src || "/placeholder.svg"}
            alt={currentImages[1].alt}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="h-1/2">
          <img
            src={currentImages[2].src || "/placeholder.svg"}
            alt={currentImages[2].alt}
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* Right large image */}
      <div className="w-[33%] h-full">
        <img
          src={currentImages[3].src || "/placeholder.svg"}
          alt={currentImages[3].alt}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Second column of two stacked images */}
      <div className="w-[16%] flex flex-col space-y-6 h-full">
        <div className="h-1/2">
          <img
            src={currentImages[4].src || "/placeholder.svg"}
            alt={currentImages[4].alt}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="h-1/2">
          <img
            src={currentImages[5].src || "/placeholder.svg"}
            alt={currentImages[5].alt}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default GallerySection
