import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"

function TeamSection() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4">
        <div>
          <img src="./foot.svg" className="h-16"/>
         </div>
        </div>

        <p className="text-amber-500 uppercase tracking-wider font-medium text-center mb-4">- OUR TEAM -</p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Loyal, Passionate, and Driven<span className="text-blue-500">.</span>
        </h2>

        <p className="text-gray-400 text-xl font-bold text-center mb-16">
          Our team is made up of dedicated individuals who share a common love for animals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Team Member 1 */}
          <div className="flex flex-col rounded-2xl md:flex-row gap-8">
  <div className="md:w-1/2 overflow-hidden rounded-tl-[99px] rounded-bl-[99px] rounded-tr-none rounded-br-none">
    <img
      src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0d8f995899838cc52ef9_optimized_963_c963x1348-0x0"
      alt="Emma Johnson"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="md:w-1/2 flex text-center flex-col justify-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">Emma Johnson</h3>
    <p className="text-amber-500 uppercase tracking-wider font-medium mb-4">FOUNDER</p>
    <p className="text-gray-600 mb-6 text-center">
      Emma leads our team with a passion for animal welfare and years of experience.
    </p>
    <div className="flex justify-center gap-4">
      <a href="#" className="text-amber-500 hover:text-amber-600">
        <Facebook size={20} />
      </a>
      <a href="#" className="text-amber-500 hover:text-amber-600">
        <Instagram size={20} />
      </a>
      <a href="#" className="text-amber-500 hover:text-amber-600">
        <Youtube size={20} />
      </a>
      <a href="#" className="text-amber-500 hover:text-amber-600">
        <Twitter size={20} />
      </a>
    </div>
  </div>
</div>


          {/* Team Member 2 */}
          <div className="flex flex-col text-center md:flex-row gap-8">
          <div className="md:w-1/2 overflow-hidden rounded-tl-[99px] rounded-bl-[99px] rounded-tr-none rounded-br-none">
    <img
      src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0d95531e6a35a0650322_optimized_1028_c926x1261-102x20"
      alt="Emma Johnson"
      className="w-full h-full object-cover"
    />
  </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">David Smith</h3>
              <p className="text-amber-500 uppercase tracking-wider font-medium mb-4">VETERINARY SPECIALIST</p>
              <p className="text-gray-600 mb-6 text-center">
                David provides expert medical care to ensure the health and well-being of our animals.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col text-center md:flex-row gap-8">
   
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sophia Lee</h3>
              <p className="text-amber-500 uppercase tracking-wider font-medium mb-4">ADOPTION COORDINATOR</p>
              <p className="text-gray-600 mb-6 text-center">
                Sophia helps connect animals with loving families through her dedication and care.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 overflow-hidden rounded-tr-[99px] rounded-br-[99px] rounded-tl-none rounded-bl-none">
  <img
    src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0e0dece0e84849bbf4ab_optimized_930_c930x1395-0x0"
    alt="Emma Johnson"
    className="w-full h-full object-cover"
  />
</div>

          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col text-center md:flex-row gap-8">
         
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Emma Brown</h3>
              <p className="text-amber-500 uppercase tracking-wider font-medium mb-4">VOLUNTEER MANAGER</p>
              <p className="text-gray-600 mb-6 text-center">
                Emma manages our volunteers, ensuring they have the support needed to make a difference.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-amber-500 hover:text-amber-600">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-amber-500 hover:text-amber-600">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-amber-500 hover:text-amber-600">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-amber-500 hover:text-amber-600">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 overflow-hidden rounded-tr-[99px] rounded-br-[99px] rounded-tl-none rounded-bl-none">
  <img
    src="https://pets-shelter.sites.motocms.com/res/673338e1d51e2c8555b90485/673b0e06995899838cc53087_optimized_1109_c1109x1171-0x0"
    alt="Emma Johnson"
    className="w-full h-full object-cover"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
