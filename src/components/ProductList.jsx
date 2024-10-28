const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List - {Date.now()}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.image} {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
