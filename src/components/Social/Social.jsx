import React from 'react';

function Social() {
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com',
  };

  return (
    <div className="text-center mt-8">
      <p className="text-lg font-bold mb-4">Follow us on social media</p>
      <ul className="flex justify-center space-x-4">
        <li>
          <a
            href={socialMediaLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </li>
        <li>
          <a
            href={socialMediaLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </li>
        <li>
          <a
            href={socialMediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
