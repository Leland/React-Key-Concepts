interface ProductProps {
  title: string;
  price: string;
}

export function ProductList({
  products,
  onAddProduct,
}: {
  products: [ProductProps];
  onAddProduct: (e: any) => void;
}) {
  return (
    <div>
      <button onClick={onAddProduct}>Add Product</button>
      {products.map(({ title, price }, key) => (
        <Product key={key} title={title} price={price} />
      ))}
    </div>
  );
}

function Product({ title, price }: ProductProps) {
  return (
    <div style={{ backgroundColor: "#333", borderBottom: "solid 1px #111" }}>
      <p style={{ margin: 0, padding: 0 }}>
        {title} ({price})
      </p>
    </div>
  );
}
