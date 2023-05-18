import React from "react";

const ProductDetail = () => {
  return (
    <>
      <div className="h-full">
        <div className="relative h-full max-h-[600px] overflow-hidden">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div className="absolute bottom-10 right-10 flex h-12 flex-row border border-white text-white shadow-xl dark:border-black dark:text-black"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
