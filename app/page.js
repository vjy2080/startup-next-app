'use client';

import { useRouter } from "next/navigation";
import HomeComponent from "./Home/page";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      push('/login');
    }
  }, [push]);

  return (
    <>
      <HomeComponent />
    </>
  );
}
