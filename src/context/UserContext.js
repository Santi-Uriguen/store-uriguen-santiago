import React, { useEffect, useState } from "react";
class UserService {
  static headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0ZTFjNDc2NmZiNTAwMjRhYTg3OTYiLCJpYXQiOjE2MTgyNzI3MDh9.d_OkCE--ik9X6lupRN-peFbHfc6wNKQKGeH10YknKFg",
  };
  static async getUserInfo() {
    const headers = { headers: this.headers };
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
  static addPoints(pointAmount) {
    let request = new XMLHttpRequest();
    request.open("POST", "https://coding-challenge-api.aerolab.co/user/points");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization", this.headers.Authorization);
    var body = {
      amount: pointAmount,
    };
    request.send(JSON.stringify(body));
  }
}
export const UserContext = React.createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", points: "", redeemHistory: [] });
  const getUser = async () => {
    const newUser = await UserService.getUserInfo();
    setUser(newUser);
  };
  const pointsAdder = (amount) => {
    UserService.addPoints(amount);
  };
  useEffect(() => {
    getUser();
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser, pointsAdder }}>
      {children}
    </UserContext.Provider>
  );
}
