import React from 'react';

const BlogIcon = ({ size, color }) => (  
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
  >
    <path 
      style={{ fill: color }} 
      d="M9.5,9.6H9.2v0.8h0.1c0.3,0,0.6,0.3,0.6,0.6v0.4v1.2v1h0.8v-2.1v-0.1v-0.5C10.7,10.2,10.2,9.6,9.5,9.6z"/>
    <path 
      style={{ fill: color }} 
      d="M7.9,10.6c-0.3,0-0.5,0.1-0.7,0.2V9.6H6.4v4h0.8v-0.2c0.2,0.1,0.5,0.2,0.7,0.2c0.8,0,1.5-0.7,1.5-1.5S8.7,10.6,7.9,10.6zM7.9,12.8c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7S8.2,12.8,7.9,12.8z"/>
    <path 
      style={{ fill: color }} 
      d="M12.7,10.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S13.6,10.6,12.7,10.6z M12.7,12.8c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7S13.1,12.8,12.7,12.8z"/>
    <path 
      style={{ fill: color }} 
      d="M17.6,10.5h-0.8v0.2c-0.2-0.1-0.4-0.2-0.7-0.2c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.3,0,0.5-0.1,0.7-0.2v0.2c0,0.3-0.3,0.6-0.6,0.6h-0.1v0.8h0.2c0.7,0,1.3-0.6,1.3-1.3v-0.5v-0.1v-0.9c0,0,0-0.1,0-0.1s0-0.1,0-0.1V10.5z M16.9,12.1c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7V12.1z"/>
    <path 
      style={{ fill: color }} 
      d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M19.6,15c0,1.4-1.2,2.6-2.6,2.6l-3.5,0l-1.2,2.1c-0.1,0.2-0.4,0.2-0.5,0l-1.2-2.1l-3.5,0c-1.4,0-2.6-1.2-2.6-2.6l0-6.1c0-1.4,1.2-2.6,2.6-2.6l9.9,0c1.4,0,2.6,1.2,2.6,2.6L19.6,15z"/>
  </svg>
);

export default BlogIcon;