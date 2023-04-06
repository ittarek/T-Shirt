import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
          const tShirts = useLoaderData();

          return (
                    <div>
                              <h1>This is home </h1>
                              <h4>T-short is Quantity {tShirts.length}</h4>
                    </div>
          );
};

export default Home;