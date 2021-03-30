import React, { useEffect, useState } from "react";
class UserService {
 static headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMzUxMWEyNGI1NzAwMjBjNmM3MTgiLCJpYXQiOjE2MTcxMTQzODV9.yyna3Evs1zqxQ6uU9w9PjmdvhRLgtoOpvdkcmjajG-U",
  };
  static async getUserInfo() {
    const headers = {headers: this.headers}
    try {
      const response = await fetch(
        `https://coding-challenge-api.aerolab.co/user/me`,
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
export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", points: "", redeemHistory: [] });
  const getUser = async () => {
    const newUser = await UserService.getUserInfo();
    setUser(newUser);
  };
  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
