import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 md:justify-items-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Homestay works</p>
        <p>News</p>
        <p>Investors</p>
        <p>Homestay Plus</p>
        <p>Homestay Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Hey guys!</p>
        <p>This is a test site</p>
        <p>I love Next.js</p>
        <p>You should try it too</p>
        <p>&hearts; &hearts; &hearts; &hearts; &hearts;</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Tino Liu</p>
        <p>Presents</p>
        <p>A beautiful page</p>
        <p>Using the latest tech</p>
        <p>&hearts; &hearts; &hearts; &hearts; &hearts;</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Contact Us</p>
        <p>Our Location</p>
        <p>Carreers</p>
      </div>
    </div>
  );
}

export default Footer;
