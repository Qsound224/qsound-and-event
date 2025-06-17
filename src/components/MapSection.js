import React from 'react';

export default function MapSection() {
  return (
    <div>
      <h2>Nous trouver</h2>
      <iframe
        title='localisation'
        src='https://www.google.com/maps/embed?...'
        width='100%'
        height='300'
        allowFullScreen
        loading='lazy'
      ></iframe>
    </div>
  );
}