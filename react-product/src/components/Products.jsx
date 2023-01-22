
 import React, { useState, useEffect } from 'react';

 function Products() {

   const [products, setProducts] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
   const [filteredProducts, setFilteredProducts] = useState([]);
 
   useEffect(() => {
     fetch('https://dummyjson.com/products')
       .then(response => response.json())
       .then(data => setProducts(data));
   }, []);
 
   useEffect(() => {
     setFilteredProducts(
       products
         .filter(product =>
           product.name.toLowerCase().includes(searchTerm.toLowerCase())
         )
         .filter(product => product.price >= priceRange.min && product.price <= priceRange.max)
     );
   }, [searchTerm, priceRange, products]);
 
   return (
     <div>
       <h1>Welcome to our ecommerce app!</h1>
       <p>Here you can browse and purchase products.</p>
       <input
         type="text"
         placeholder="Search by name"
         value={searchTerm}
         onChange={e => setSearchTerm(e.target.value)}
       />
       <br />
       {/* <label>
         Min Price:
         <input
           type="number"
           value={priceRange.min}
           onChange={e =>
             setPriceRange({ ...priceRange, min: Number(e.target.value) })
           }
         />
       </label>
       <br />
       <label>
         Max Price:
         <input
           type="number"
           value={priceRange.max}
           onChange={e =>
             setPriceRange({ ...priceRange, max: Number(e.target.value) })
           }
         />
       </label> */}
       <ul>
         {filteredProducts.map(product => (
           <li key={product.id}>{product.title} - ${product.price}</li>
         ))}
       </ul>
     </div>
   );
 }
 
 export default Products;
 