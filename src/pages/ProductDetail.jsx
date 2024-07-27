import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../printful/printful";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const fetchedProduct = await getProduct(id);
      setProduct(fetchedProduct);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch product");
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert('Product added to cart!'); // You can replace this with a more user-friendly notification
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.thumbnail_url} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.retail_price} €</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;