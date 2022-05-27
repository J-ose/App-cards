import React from 'react';
import Card from './card';

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Luis Norton',
        image: image1,
        url: 'https://facebook.com'
        // text: 'this is fazt website'
    },
    {
        id: 2,
        title: 'Luis Blog',
        image: image2,
        url: 'https://twitter.com'
    },
    {
        id: 3,
        title: 'Luis Youtube',
        image: image3,
        url: 'https://youtube.com'
    },
];
function Cards() {
  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
        <div className="row">
            {
               cards.map(card => (
               <div className="col-md-4" key={card.id}>
                  <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
               </div>
          ))  
        } 
           
        </div>
      
    </div>
  );
}

export default Cards 