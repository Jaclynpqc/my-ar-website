import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen relative p-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/switzerland-background.jpg")' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-8xl font-bold text-white leading-none">
          Jaclyn
          <br />
          pham
        </h1>
        <div className="mt-4 bg-white/10 backdrop-blur-md p-6 rounded-lg max-w-2xl text-white text-lg leading-relaxed">
          Product designer and developer, born and raised in Vietnam, based in New York,
          specialising in UI/UX and experiential marketing
        </div>
      </div>

      <div className="absolute left-8 bottom-8 bg-white/10 backdrop-blur-md p-4 rounded-lg text-white">
        <h3 className="text-base mb-2">My favorite place in the whole world</h3>
        <p className="text-sm opacity-80">Lake Brienz, Iseltwald, Switzerland</p>
      </div>

      <div className="absolute right-8 bottom-8 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-white cursor-pointer hover:bg-white/20 transition-colors flex items-center gap-2">
        About me!
      </div>
    </div>
  );
};

export default Home;
