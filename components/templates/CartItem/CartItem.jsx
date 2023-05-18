import React from "react";

const CartItem = ({ item, index }) => {
  console.log(item);
  return (
    <div className="w-full flex justify-between "key={index}>
        <div className="w-full bg-base-100 shadow-xl relative">
          <div className="flex-1">
          
              <img
                src={item.image}
                alt={item.title}
                height="200"
                width="200"
                className="object-contain w-full h-[15rem]"
              />
              
           <div className="px-7 py-6">
             <h2 className="card-title">{item.title}</h2>
              <p>{item.category}</p>
              <p>{item.description}</p>
           </div>
          </div>
          <div className="flex px-7 py-6">
            <div className="w-full flex items-center">
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Detail</button>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default CartItem;
