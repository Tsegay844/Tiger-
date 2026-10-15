import { ProductCard } from '../components/ProductCard';
import { products } from '../content';

export function Products() {
  return (
    <section className="section" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Products</p>
          <h2 id="products-title">Three product lines, one point of contact.</h2>
          <p>
            Finished water tanks in fiberglass or plastic, and the fiberglass materials used to make products like them.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
