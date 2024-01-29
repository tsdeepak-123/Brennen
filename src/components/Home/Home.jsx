import React from 'react';


function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url("Images/brennen.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    maxHeight: '100%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  };

  const textContainerStyle = {
    textAlign: 'center',
    zIndex: 50,
  };

  return (
    <>
    <div className='w-full h-14 bg-red-700 overflow-hidden'>
    <div className='animate-slide-text'>
        <p className='inline-block text-white whitespace-nowrap mt-4'>
        എസ്എഫ്ഐ ബ്രണ്ണൻ കോളേജ് യൂണിറ്റ് കമ്മിറ്റിയുടെ വിവരങ്ങൾ വിദ്യാർത്ഥികളിലേക്ക് എത്തിക്കുന്നതിന് വേണ്ടി  തുടങ്ങിയ വെബ്സൈറ്റ്

        </p>
      </div>
    </div>
      <div style={backgroundImageStyle}>
        <div style={overlayStyle}></div>
        <div style={textContainerStyle}>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-wide mx-16 text-white">
            Welcome to SFI Brennen
          </p>
          <p className="text-xl md:text-2xl mb-6 text-white">Study & Struggle</p>
          <div className="bg-red-700 py-2 px-4 rounded-full shadow-md mx-16">
            <p className="text-white text-sm lg:text-base">
              🌐 Independence | 🗳 Democracy | ☭ Socialism
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
