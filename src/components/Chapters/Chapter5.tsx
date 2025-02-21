import { useState } from "react";
import { EmailForm } from "../EmailForm";
import { ProductList } from "../ProductList/ProductList";

export function Chapter5() {
  const [email, setEmail] = useState("");

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <EmailForm value={email} onChange={onChangeEmail} />
      <ProductList onAddProduct={} />
    </>
  );
}
