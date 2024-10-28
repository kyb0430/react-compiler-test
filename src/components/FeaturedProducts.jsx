const FeaturedProducts = ({ featuredProducts }) => {
  console.log(featuredProducts);
  return (
    <div>
      <h2>Featured List - {Date.now()}</h2>
      <ul>
        {featuredProducts.map((product) => (
          <li key={product.id}>
            {product.image} {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
