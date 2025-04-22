import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

function Header() {
  return (
    <div className="w-full">
         <header className="max-w-[90%] mx-auto py-8 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="relative  overflow-hidden">
          <img
            src="./do.png"
            alt="Paws & Tails Logo"
            className="object-cover w-auto h-[40px]"
          />
        </div>
       
      </div>

      <nav className="hidden md:flex text-xs items-center gap-8">
  <a href="#" className="text-gray-500 hover:text-[#489CBE] underline underline-offset-4">
    Pets
  </a>
  <a href="#" className="text-gray-500 hover:text-[#489CBE] underline underline-offset-4">
    About Us
  </a>
  <a href="#" className="text-gray-500 hover:text-[#489CBE] underline underline-offset-4">
    How You Can Help
  </a>
  <a href="#" className="text-gray-500 hover:text-[#489CBE] underline underline-offset-4">
    Team
  </a>
  <a href="#" className="text-gray-500 hover:text-[#489CBE] underline underline-offset-4">
    Testimonials
  </a>
  <a href="#" className="text-gray-500 hover:text-[#489CBE] underline underline-offset-4">
    Contact us
  </a>
</nav>



      <div className="flex items-center gap-3">
        <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
          <Facebook size={15} />
        </a>
        <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
          <Instagram size={15} />
        </a>
        <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
          <Youtube size={15} />
        </a>
        <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
          <Twitter size={15} />
        </a>
      </div>
    </header>
    </div>
   
  )
}

export default Header
