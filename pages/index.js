'use client'

import Image from "next/image";
import { Inter } from "next/font/google";
import { CartItem } from "../components/templates/CartItem/CartItem";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <CartItem />
    </>
  );
}
