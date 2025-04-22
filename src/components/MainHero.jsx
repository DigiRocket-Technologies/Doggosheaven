function MainHero() {
  return (
    <section
    className="w-full h-[100vh] bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 relative overflow-hidden bg-center bg-cover"
    style={{ backgroundImage: 'url(./cover.png)' }}
  >
    <div className="max-w-6xl ml-4 mx-auto h-full flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 z-10 flex items-center h-full">
        <div>
          <p className="text-sm uppercase tracking-wider mb-4">- LOVE AWAITS HERE -</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Give a Paw,
            <br />
            Save a Life!
          </h1>
          <p className="text-2xl mb-8">Bringing warmth and companionship into every home.</p>
          <div className="flex bg-white text-blue-600 font-medium w-[25%] h-[8vh] rounded-tr-[40px] rounded-l-full border-4  hover:bg-gray-100 transition-colors items-center justify-center text-center">
  <a href="#">
    Adopt Now
  </a>
</div>

       
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default MainHero
