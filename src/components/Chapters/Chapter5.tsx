import { useState } from "react";
import { EmailForm } from "../EmailForm";
import { ProductList } from "../ProductList/ProductList";
import { productData } from "../../assets/products";

const MAX_PRODUCTS = productData.length;

export function Chapter5() {
  const [email, setEmail] = useState("");
  const [productsCount, setProductsCount] = useState(5);

  return (
    <>
      <EmailForm
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <ProductList
        products={productData.slice(0, productsCount)}
        onAddProduct={() =>
          setProductsCount((p) => {
            return p === MAX_PRODUCTS ? p : p + 1;
          })
        }
      />
    </>
  );
}
