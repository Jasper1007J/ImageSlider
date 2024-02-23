import { useState } from 'react';

function ImageSlider() {

  const [currentImage, setCurrentImage] = useState(0);  
  const images = [image1, image2, image3, image4, image5];

  function nextSlide() {
    setCurrentImage(prev => 
      prev === images.length-1 ? 0 : prev + 1  
    );
  }

  function prevSlide() {
    setCurrentImage(prev => 
       prev === 0 ? images.length-1 : prev - 1
    );
  }
  
}

ImageSlider();