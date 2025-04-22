import React from "react"

function StatsSection() {
  return (
    <section className="w-full py-12 bg-[#1F7DBA] text-white">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex gap-4  justify-center items-center">
          <div className="bg-white border-2 rounded-full p-4 w-16 h-16 flex items-center justify-center">
           <img src="./s1.svg"/>
          </div>
          <div>
          <h3 className="text-3xl font-bold mb-1">60 +</h3>
          <p className="uppercase text-xs font-bold tracking-wider">DEDICATED VOLUNTEERS</p>
          </div>
          
        </div>

        <div className=" flex gap-4 items-center">
          <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center ">
          <img src="./s2.svg"/>
          </div>
          <div>
          <h3 className="text-3xl font-bold mb-1">4.2K</h3>
          <p className="uppercase text-xs font-bold tracking-wider">DONATIONS RECEIVED</p>
          </div>
         
        </div>

        <div className=" flex  gap-4 items-center">
          <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center ">
          <img src="./s3.svg"/>
          </div>
          <div>
          <h3 className="text-3xl font-bold mb-1">540 +</h3>
          <p className="uppercase text-xs font-bold tracking-wider">SUCCESSFUL ADOPTIONS</p>
          </div>
          
        </div>

        <div className=" flex gap-4 items-center">
          <div className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
          <img src="./s4.svg"/>
          </div>
          <div>
          <h3 className="text-3xl font-bold mb-1">800</h3>
          <p className="uppercase text-xs  font-bold tracking-wider">VETERINARY CHECKUPS</p>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default StatsSection
