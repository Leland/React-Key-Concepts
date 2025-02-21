function Product({ title, price }: { title: string; price: string }) {
  return (
    <div style={{ backgroundColor: "#333", borderBottom: "solid 1px #111" }}>
      <p style={{ margin: 0, padding: 0 }}>
        {title} ({price})
      </p>
    </div>
  );
}

export { Product };
