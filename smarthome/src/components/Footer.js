// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'goldenrod', color: 'white', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%', padding: '0px 0' }}>
      {/* Your footer content here */}
      <div>
        <p style={{ margin: '0' }}>Find me on:</p>
        <a href="https://www.linkedin.com/in/amrshehata/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          LinkedIn
        </a>
        <a href="https://github.com/WFlorida2" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          GitHub
        </a>
        <a href="https://twitter.com/amrshehata12345" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          X (formerly Twitter)
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          Instagram
        </a>
        <a href="https://trailblazer.me/id/ashehata3" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          Salesforce
        </a>
      </div>
    </footer>
  );
};

export default Footer;






