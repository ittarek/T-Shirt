import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../T-shirt/Tshirt';
import Cart from '../cart/Cart';
import './Home.css'


const Home = () => {
          const tShirts = useLoaderData();
          const [cart , setCart] = useState([]);

          const handleAddToCart = (tShirt) =>{
                    console.log(tShirt);

          }

          return (
                    <div className='home-container'>
                          

                             <div className="tShirts-container">
                             {
                                        tShirts.map(tShirt => <Tshirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></Tshirt>)
                              }
                             </div>
                             <div className="cart-container">
                              <Cart></Cart>
                             </div>
                    </div>
          );
};

export default Home;