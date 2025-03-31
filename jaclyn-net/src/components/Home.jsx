import Navigation from "./Navigation";
function Home() {
  <Navigation />
  return (
    <div className="relative min-h-screen">

      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('assets/images/Background_back.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-sky" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white font-poppins sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-sky mt-2">Jaclyn</span>
          </h1>
          <p className="mt-6 text-xl text-mist max-w-md mx-auto font-sans">
            I'm a passionate developer creating amazing digital experiences. Explore my work and let's build something incredible together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home; 