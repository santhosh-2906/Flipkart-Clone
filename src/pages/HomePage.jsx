import products from "../data/products.js";
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';
export default function HomePage({ handleAddToCart }) {
  return (
    <div className="homepage">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            product={product} // pass whole product
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
