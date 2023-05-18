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
      <div className="md:flex flex-wrap justify-center">
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
    </>
  );
}
