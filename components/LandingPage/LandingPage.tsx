import { FC } from "react";
import { HouseCat } from "./HouseCat";
import Link from "next/link";


export const LandingPage : FC = () => {
  return <>
    <h1> PPTB Scream Room </h1>
    <HouseCat />
    <Link href="/post"> Posts </Link>
    <Link href="/user"> Users </Link>
  </>
}