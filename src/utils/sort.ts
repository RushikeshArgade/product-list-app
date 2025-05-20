import type { Product } from '../types/Product';

export const sortProductsByPrice = (
  products: Product[],
  order: 'asc' | 'desc'
): Product[] => {
  return [...products].sort((a, b) =>
    order === 'asc' ? a.price - b.price : b.price - a.price
  );
};
