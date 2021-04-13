import React, { useEffect, useState } from "react";
class ProdService {
  static headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMzUxMWEyNGI1NzAwMjBjNmM3MTgiLCJpYXQiOjE2MTcxMTQzODV9.yyna3Evs1zqxQ6uU9w9PjmdvhRLgtoOpvdkcmjajG-U",
  };
  static async getProducts(filterOption) {
    const headers = { headers: this.headers };
    try {
      const response = await fetch(
        `https://coding-challenge-api.aerolab.co/products`,
        headers
      );
      if (response.status !== 200) {
        throw new Error(response);
      }
      let data = await response.json();
      switch (filterOption) {
        case 1:
          data = data.sort((a, b) => {
            if (a.category > b.category) {
              return 1;
            } else if (a.category < b.category) {
              return -1;
            } else {
              return 0;
            }
          });
          return data;
        case 2:
          data = data.sort((a, b) => {
            if (a.cost > b.cost) {
              return 1;
            } else if (a.cost < b.cost) {
              return -1;
            } else {
              return 0;
            }
          });
          return data;
        case 3:
          data = data.sort((a, b) => {
            if (a.cost < b.cost) {
              return 1;
            } else if (a.cost > b.cost) {
              return -1;
            } else {
              return 0;
            }
          });
          return data;
        default:
          return data;
      }
    } catch (err) {
      console.log(err);
    }
  }
  static getHistory() {
    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://coding-challenge-api.aerolab.co/user/history",
      false
    );
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0ZTFjNDc2NmZiNTAwMjRhYTg3OTYiLCJpYXQiOjE2MTgyNzI3MDh9.d_OkCE--ik9X6lupRN-peFbHfc6wNKQKGeH10YknKFg"
    );
    request.send();
    return request.response;
  }
}
export const ProdContext = React.createContext();

export default function ProdContextProvider({ children }) {
  const [prod, setProds] = useState([]);
  const getProds = async (filterOption) => {
    const newProd = await ProdService.getProducts(filterOption);
    setProds(newProd);
  };
  const showHistory = (param) => {
    if (param === "home") {
      let history = ProdService.getHistory();
      history = JSON.parse(history);
      setProds(history);
    } else {
      getProds();
    }
  };
  const filterFunction = (filterOption) => {
    getProds(filterOption);
  };
  useEffect(() => {
    getProds();
  }, []);
  return (
    <ProdContext.Provider value={{ prod, filterFunction, showHistory }}>
      {children}
    </ProdContext.Provider>
  );
}
