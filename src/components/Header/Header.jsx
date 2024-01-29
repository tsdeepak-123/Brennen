import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong} from '@fortawesome/free-solid-svg-icons';

function Header() {
    const navigate=useNavigate()
  const goBack = () => {
    navigate("/")
  };

  return (
    <header className="bg-red-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">SFI Brennen</h1>
        </div>
        <button onClick={goBack} className="focus:outline-none">
          <FontAwesomeIcon icon={faLeftLong} className="text-xl" />
        </button>
      </div>
    </header>
  );
}

export default Header;
