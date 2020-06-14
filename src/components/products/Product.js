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
          className="card-img-top"
          alt={product.slug}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            @{product.store.name}
          </h6>
          <p className="card-text">
            <span className="">
              {product.price} {product.currency.value}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
