import React, { useState } from "react";
import Footer from "../Footer/Footer";

function Home() {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const imageSize = showTranslation ? "w-full h-auto md:w-1/3 md:h-auto lg:w-1/3 lg:h-auto xl:w-1/4 xl:h-auto mt-28" : "w-full h-auto sm:w-64 sm:h-64 mt-28";

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start mx-4 md:mx-16">
        <img
          src="Images/Ashraf_Image.png"
          alt="Ashraf image"
          className={`${imageSize}`}
        />
        <p className="text-left md:ml-4 md:mt-10 mt-4">
          <h2 className="text-4xl sm:mx-56 mx-0 font-bold mb-8 mt-16 text-gray-800">
           {
            showTranslation ? `സഖാവ് അഷറഫ്`:`Comrade Ashraf`
           } 
          </h2>
          <p className="text-left">
            {showTranslation
              ? `കേരളത്തിലെ വലതുപക്ഷ വിദ്യാർത്ഥി സംഘടനകളുടെ
            കഠാര രാഷ്ട്രീയത്തിൻ്റെ ഇരയാണ് എസ്എഫഐ സഖാവ് അഷറഫ്. കണ്ണൂർ ജില്ലയിലെ
            തലശ്ശേരി ബ്രണ്ണൻ കോളേജിൽ ജനറൽ ക്യാപ്റ്റൻ സ്ഥാനത്തേക്കുള്ള കോളേജ്
            യൂണിയൻ തിരഞ്ഞെടുപ്പിൽ വിജയിച്ച് വിദ്യാർത്ഥികളുടെ ഹൃദയം കീഴടക്കിയ
            അദ്ദേഹം വലതുപക്ഷ രാഷ്ട്രീയക്കാരുടെ കണ്ണിലെ കരടായി. അദ്ദേഹത്തിൻ്റെ
            സഹപ്രവർത്തകർ അദ്ദേഹത്തെ "കളിസ്ഥലങ്ങളുടെ രാജകുമാരൻ" എന്ന് വിളിച്ചു.
            ജനറൽ ക്യാപ്റ്റൻ എന്ന നിലയിൽ തൻ്റെ കലാലയത്തിൻ്റെ കായിക സ്വപ്നങ്ങൾക്ക്
            ചിറകു നൽകി. അദ്ദേഹത്തിൻ്റെ
            വിജയം എതിരാളികളെ പരിഭ്രാന്തരാക്കി.
            ചെറുപ്പം മുതലേ പുരോഗമന പ്രസ്ഥാനങ്ങളിലെ സജീവ പ്രവർത്തകനായിരുന്നു.
            കോളേജ് പഠനകാലത്ത് എസ്എഫഐയുടെ സജീവ പ്രവർത്തകനായി. കാഷ്വൽ സംസാരത്തിൽ
            പോലും രാഷ്ട്രീയം കൊണ്ടുവരാനുള്ള അദ്ദേഹത്തിൻ്റെ കഴിവ് ഒരു
            വിപ്ലവകാരിയുടെ ആദ്യ പാഠങ്ങൾ സുഹൃത്തുക്കളെ പഠിപ്പിച്ചു. 1973 ഡിസംബർ
            10-ന് കെഎസ്‌യു ക്രിമിനലുകൾ സഖാവ് അഷറഫിനെ അദ്ദേഹത്തിൻ്റെ കോളേജിലെ
            മലയാളം ഡിപ്പാർട്ട്‌മെൻ്റിന് മുന്നിൽ കുത്തിക്കൊന്നു. ഉടൻ തന്നെ
            സഖാക്കൾ അദ്ദേഹത്തെ ആശുപത്രിയിലെത്തിച്ചു. എന്നാൽ നീണ്ട ജീവിത
            പോരാട്ടത്തിനൊടുവിൽ 1974 മാർച്ച് 5-ന് അദ്ദേഹം അന്ത്യശ്വാസം വലിച്ചു.
            സൈതാർപ്പള്ളി മമ്മുവിൻ്റെയും ഫാത്തിമയുടെയും മകനായിരുന്നു അദ്ദേഹം.`:`
            SFI Comrade Asharaf is the victim of dagger politics of right wing student organizations of Kerala. He won the hearts of students by winning the college union election for the post of general captain, in the Thalassery Brennen College of Kannur district, and thus became a sore in the eye for the right wing politicians. His colleagues named him the “prince of play grounds”. Being a general captain he gave wings to the sports dreams of his college. His victory made the opponents panicky. From his early childhood he was an active worker in the progressive movements. During his college days he became an active worker of SFI. His ability to bring in politics even in his casual talk taught his friends the first lessons of being a revolutionary. On 10th December 1973 KSU criminals stabbed Com Asharaf in front of the Malayalam department of his college. He was taken to the hospital immediately by his comrades. But after a long struggle for life he breathed his last on 5th March 1974. He was the son of Saitharppalli Mammu and Fathima.`}
          </p>
          <p
            className="text-blue-500 flex justify-end cursor-pointer"
            onClick={toggleTranslation}
          >
            {showTranslation ? "See translation" : "See malayalam"}
          </p>
        </p>
      </div>
    </>
  );
}

export default Home;
