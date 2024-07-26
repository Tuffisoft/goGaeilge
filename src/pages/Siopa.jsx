import { useEffect, useState } from "react";
import { getProducts } from "../printful/printful";

function Siopa() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products");
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="shop-container flex flex-col justify-center items-center">
      <h1 className="mb-4">An Siopa</h1>
      <div className="product-grid grid grid-cols-2 gap-4 justify-center items-center">
        {products.map((product) => (
          <div key={product.id} className="product-card border border-ggPurple p-8 rounded-xl">
            <h2 className="mb-4">{product.name}</h2>
            <div className="w-32">
            <img src={product.thumbnail_url} alt={product.name} />
            </div>
            <p>{product.retail_price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Siopa;
