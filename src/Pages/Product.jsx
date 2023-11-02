import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div className='product'>
        <BreadCrum product={product} />
    </div>
  )
}

export default Product;