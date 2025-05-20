import type { Product } from '../../types/Product';
import './ProductTable.css'
const ProductTable = ({ products }: { products: Product[] }) => (
  <table className="product-table">
    <thead>
      <tr>
        <th className="table-header">Image</th>
        <th className="table-header">Title</th>
        <th className="table-header">Price</th>
        <th className="table-header">Rating</th>
      </tr>
    </thead>
    <tbody>
      {products.map(p => (
        <tr key={p.id}>
          <td className="table-cell"><img src={p.image} alt={p.title} className="product-image" /></td>
          <td className="table-cell">{p.title}</td>
          <td className="table-cell">${p.price}</td>
          <td className="table-cell">⭐ {p.rating.rate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductTable;
