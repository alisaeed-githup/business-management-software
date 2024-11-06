import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Bonsai Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
