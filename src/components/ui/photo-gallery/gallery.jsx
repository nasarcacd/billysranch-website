import React from 'react';
import ImageGallery from 'react-image-gallery';
import './gallery-style.scss';

import image1 from '../../../assets/gallery/barchilli.jpg';
import image2 from '../../../assets/gallery/cab1.jpg';
import image3 from '../../../assets/gallery/gifs.jpg';
import image4 from '../../../assets/gallery/cabinas.jpg';
import image5 from '../../../assets/gallery/express.jpg';
import image6 from '../../../assets/gallery/pool.jpg';
import image7 from '../../../assets/gallery/hamb.jpg';
import image8 from '../../../assets/gallery/postemara.jpg';
import image9 from '../../../assets/gallery/surtido.jpg';
import image10 from '../../../assets/gallery/cabcamas.jpg';



const images = [
  {
    original: image4,
    thumbnail: image4,
  },
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image5,
    thumbnail: image5,
  },
  {
    original: image6,
    thumbnail: image6,
  },
  {
    original: image7,
    thumbnail: image7,
  },
  {
    original: image8,
    thumbnail: image8,
  },
  {
    original: image9,
    thumbnail: image9,
  },
  {
    original: image10,
    thumbnail: image10,
  },
];
 
const MyGallery = () => {
  return (
     <ImageGallery 
      items={images}
      showPlayButton={false}
      showGalleryPlayButton={false}
      />
  )
}

export default MyGallery;