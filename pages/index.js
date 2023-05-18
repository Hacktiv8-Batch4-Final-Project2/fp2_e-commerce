import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/templates/Card/Card";
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
      <div className="flex flex-wrap justify-center mt-8">
       {
          isLoading ? <h1>Loading...</h1> : (
            products.map((item, index) => {
              return (
                <Card key={index} item={item}/>
              )
            })
          )
        }
      </div>
    </>
  );
}
