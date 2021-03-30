import React, { useEffect, useState } from "react";
class ProdService {
  static headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMzUxMWEyNGI1NzAwMjBjNmM3MTgiLCJpYXQiOjE2MTcxMTQzODV9.yyna3Evs1zqxQ6uU9w9PjmdvhRLgtoOpvdkcmjajG-U",
  };
  static async getProducts() {
    const headers = { headers: this.headers };
    try {
      const response = await fetch(
        `https://coding-challenge-api.aerolab.co/products`,
        headers
      );
      if (response.status !== 200) {
        throw new Error(response);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
export const ProdContext = React.createContext();

export default function ProdContextProvider({ children }) {
  const [prod, setProds] = useState([]);
  const getProds = async () => {
    const newProd = await ProdService.getProducts();
    setProds(newProd);
  };
  useEffect(() => {
    getProds();
  }, []);
  return (
    <ProdContext.Provider value={{ prod, setProds }}>
      {children}
    </ProdContext.Provider>
  );
}
