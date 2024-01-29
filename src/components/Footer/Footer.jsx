import React from 'react';

function Footer() {
  return (
    <div className="bg-red-700">
      <div className="max-w-2xl mx-auto text-white py-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
          <div className="order-2 md:order-1 mt-8 md:mt-0">
            SFI BRENNEN
          </div>
          <div className="order-3">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
