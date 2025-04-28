import { useState } from "react";
import { Facebook, Instagram, Youtube, Twitter, Menu, X } from "lucide-react";

function Header({onPetClick, onAboutClick, onHelpClick, onTestimonialClick, onContactClick}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <div className="w-full">
      <header className="lg:max-w-[90%] w-full mx-auto px-2 py-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden">
            <img
              src="./do.png"
              alt="Paws & Tails Logo"
              className="object-cover w-auto h-[30px] lg:h-[40px]"
            />
          </div>
        </div>

     
        <nav className="hidden md:flex text-xs  items-center gap-4 lg:gap-8">
          <button  onClick={onPetClick}
             className="text-gray-500 cursor-pointer hover:text-[#489CBE] underline underline-offset-4">
            Pets
          </button>
          <button  onClick={onAboutClick}
             className="text-gray-500 cursor-pointer hover:text-[#489CBE] underline underline-offset-4">
            About Us
          </button>
          <button  onClick={onHelpClick}
             className="text-gray-500 cursor-pointer hover:text-[#489CBE] underline underline-offset-4">
            How You Can Help
          </button>
         
          <button onClick={onTestimonialClick} 
             className="text-gray-500 cursor-pointer hover:text-[#489CBE] underline underline-offset-4">
            Testimonials
          </button>
          <button  onClick={onContactClick}
             className="text-gray-500 cursor-pointer hover:text-[#489CBE] underline underline-offset-4">
            Contact us
          </button>
        </nav>

     
        <div className="hidden md:flex items-center gap-3">
         
          <a href="https://www.instagram.com/doggosheaven_petresort/" target="_blank" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
            <Instagram size={15} />
          </a>
         
        </div>

     
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20">
          {/* Close button (X) in the top right corner */}
          <button 
            className="absolute top-4 right-4 text-gray-700 p-2"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col items-center gap-6 p-4">
            <a href="#pets" onClick={onPetClick} 
               className="text-gray-700 hover:text-[#489CBE] text-lg">
              Pets
            </a>
            <a href="#about" onClick={onAboutClick}
               className="text-gray-700 hover:text-[#489CBE] text-lg">
              About Us
            </a>
            <a href="#help" onClick={onHelpClick} 
               className="text-gray-700 hover:text-[#489CBE] text-lg">
              How You Can Help
            </a>
         
            <a href="#testimonials" onClick={onTestimonialClick} 
               className="text-gray-700 hover:text-[#489CBE] text-lg">
              Testimonials
            </a>
            <a href="#contact" onClick={onContactClick} 
               className="text-gray-700 hover:text-[#489CBE] text-lg">
              Contact us
            </a>

            {/* Social Media Icons in Mobile Menu */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="bg-[#489CBE] hover:bg-blue-600 text-white p-2 rounded-md transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;