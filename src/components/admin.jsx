import"./admin.css";
import { useState } from "react";

const Admin = () => {
     const [product, setProduct] = useStates(??);

     const saveProduct = () => {
         console.log("Saving product");
     };

     const textChanged =(e) => {

     }
     return (
        <div className="admin-page">
            <h4>Store Administration</h4>

            <div className="content">
              <section ClassName="products">
                  <h5>Register new Product</h5>

                  <div className="field">
                    <label>Title</label>
                    <input name="title" onChange={textChanged} className="form-control" type="text"/>
                  </div>
                  
              </section>
              
              <section className="coupons"></section>
            </div>
        </div>
    )
}