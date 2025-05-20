import type { Product } from '../../types/Product'
import './ProductCard.css'
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='card'>
        <img src={product.image} alt={product.title} className='product-image'  />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>⭐ {product.rating.rate}({product.rating.count})</p>
    </div>
  )
}

export default ProductCard