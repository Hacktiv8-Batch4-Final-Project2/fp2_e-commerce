import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/templates/CartItem/CartItem";
import { fetchProducts } from "@/components/store/reducers/Product";


export default function Home() {
  const dispatch = useDispatch();
  const {products, isLoading} = useSelector((state) => state.products);
  // console.log(products);

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <>
    <div className="container px-10 xl:px-20">
      <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">
       {
          isLoading ? <h1>Loading...</h1> : (
            products.map((item, index) => {
              return (
                <CartItem key={index} item={item}/>
              )
            })
          )
        }
    </div>
    </div>

    </>
  );
}
