import React from "react";

const CartItem = ({item, index}) => {
  console.log(item);
  return (
      <div className="gap-10 p-2" key={index}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={item.image}
              alt={item.title}
              height='200'
              width='200'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Detail</button>
              <button className="btn btn-secondary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CartItem;