import '../styles/ProductCard.css';
export default function ProductCard({ name, price, image, product, handleAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
