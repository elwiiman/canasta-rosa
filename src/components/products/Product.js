import React from "react";

const Product = ({ product }) => {
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <img
          src={
            product.photo.small
              ? product.photo.small
              : "https://res.cloudinary.com/elwiiman/image/upload/v1592095087/CanastaRosa/no-disponible_swk376.jpg"
          }
          className="card-img-top p-2"
          alt={product.slug}
        />
        <div className="card-body pt-1 pb-1">
          <h6 className="card-title pb-0">{product.name}</h6>
          <h6 className="card-subtitle mb-2 text-muted pb-0">
            <small> @{product.store.name} </small>
          </h6>
          <p className="card-text pb-0 mb-0">
            <span className="price">
              {product.price} {product.currency.value}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
