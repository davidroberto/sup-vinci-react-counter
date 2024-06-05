const LastProducts = () => {
  const lastProducts = [
    {
      id: 1,
      name: "Producto 1",
      price: 1000,
      isPublished: true,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 2000,
      isPublished: false,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 3000,
      isPublished: true,
    },
    {
      id: 4,
      name: "Producto 4",
      price: 4000,
      isPublished: false,
    },
    {
      id: 5,
      name: "Producto 5",
      price: 5000,
      isPublished: true,
    },
  ];

  return (
    <main>
      {lastProducts.map((product) => (
        <article key={product.id}>
          {product.isPublished ? (
            <>
              <h2>{product.name}</h2>
              <p>Precio: {product.price}</p>
            </>
          ) : (
            <p>Produit non publié</p>
          )}
        </article>
      ))}
    </main>
  );
};

export default LastProducts;
