
function HeroSection() {
  return (
    <section
      id='hero'
      className='absolute inset-0 text-gray-400 z-0 min-h-screen flex flex-col items-center justify-center px-4 md:-translate-x-20'
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className='text-6xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'> Hi, I'm</span>
            <span className='text-primary opacity-0 animate-fade-in-delay-1'> Jack</span>
            <span className='text-secondary opacity-0 animate-fade-in-delay-2'> Mcmahon</span>
          </h1>
        </div>
      </div>

    </section>
  )
}

export default HeroSection