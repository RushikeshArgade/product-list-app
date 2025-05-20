import { useEffect, useState } from 'react'
import type { Product } from '../../types/Product';
import ProductCard from '../../components/ProductCard/ProductCard';
import ToggleLayout from '../../components/ToggleLayout/ToggleLayout';
import ProductTable from '../../components/ProductTable/ProductTable';
import { sortProductsByPrice } from '../../utils/sort';
import './ProductList.css'

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [layout, setLayout] = useState<'grid' | 'table'>('grid');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                console.log(response)

                if (!response.ok) {
                    throw new Error("Error while fetching Products")
                }

                const data = await response.json()
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log("Error Cought: ", error)
            }
        }

        fetchProducts();
    }, []);

    const sortedProducts = sortProductsByPrice(products, sortOrder);

    return (
        <div className='container'>
            <div className='button-container'>
                <div className='sort-buttons'>
                    <button className='sort-btn' onClick={() => setSortOrder('asc')}>Low to High</button>
                    <button className='sort-btn' onClick={() => setSortOrder('desc')}>High to Low</button>
                </div>
                <ToggleLayout layout={layout} setLayout={setLayout} />
            </div>
            {
                loading ? (
                    <p>Loading products...</p>
                )
                    : layout === 'grid' ? (
                        <div className='grid'>
                            {sortedProducts.map(product => <ProductCard key={product.id} product={product} />)}
                        </div>
                    ) : (
                        <ProductTable products={sortedProducts} />
                    )
            }
        </div>
    )
}

export default ProductList