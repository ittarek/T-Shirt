import React from 'react';
import "./TShirt.css"

const Tshirt = ({tShirt ,handleAddToCart}) => {
          const {_id,name,picture,price} = tShirt;

          return (
                    <div className='single-t-shirt'>
                           
                          <img src={picture} alt={name} />  
                          <h4>{name}</h4>
                          <p>{price}$</p>

                          <button className='buy-btn' onClick={()=>handleAddToCart (_id)}>Buy Now</button>
                    </div>
          );
};

export default Tshirt;