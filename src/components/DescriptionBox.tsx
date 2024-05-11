import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Item from "./Item";

const DescriptionBox = () => {
  const [details, setDetails] = useState({
    price: Number,
    description: String,
    rating: {
      rate: Number,
      count: Number,
    },
  });

  //   const [price, setPrice] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [rate, setRate] = useState("");

  //   useEffect(() => {
  //     apiClient.get("price").then((res) => setPrice(res.data));
  //     apiClient.get("description").then((res) => setDescription(res.data));
  //     apiClient.get("rate").then((res) => setRate(res.data));
  //     apiClient.get("")
  //   }, []);

  return <div></div>;
};

export default DescriptionBox;
