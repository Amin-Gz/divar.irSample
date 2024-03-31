// import React from "react";
import LogIn from "../oragans/LogIn";
import Header from "../oragans/Header";
import CreateProduct from "../oragans/CreateProduct";

function NewProduct() {
  // todo chek the validation of token and if true > CreateProduct: false > LogIn and loading
  return (
    <section>
      <Header></Header>
      <LogIn></LogIn>
      <CreateProduct></CreateProduct>
    </section>
  );
}

export default NewProduct;
