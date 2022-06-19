import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { Button, Flex, Text } from "@chakra-ui/react";

export const Fish = () => {
  const [fish, setFish] = useState([]);
  useEffect(() => {
    fishdata();
  }, []);
  const fishdata = () => {
    axios.get("http://localhost:5000/fish").then((res) => {
      setFish(res.data);
    });
  };
  console.log(fish);

  // const handleChange=(e)=>{
  //     const {Name,value}
  // }

  // const addChicken=()=>{
  //     axios.post("http://localhost:5000/cart").then(res=>{
  //         console.log(res.data);
  //     }).catch(err=>{
  //         console.log(err.data);
  //     })
  // }
  return (
    <div>
      <Navbar />
      <Text
        fontWeight={"bold"}
        fontSize={"40px"}
        textAlign={"initial"}
        mt={"8%"}
        ml={"150px"}
      >
        Fish & Seafood
      </Text>
      <div className="cdata">
        {fish.map((e) => (
          <div className="desc" key={e._id}>
            <img src={e.Image} />
            <h1>{e.Name}</h1>
            <p>{e.Description}</p>
            <h6>Net.wt:{e.Weight}</h6>
            <Flex ml={"10px"} gap={"40%"}>
              <Text color={"#D11243"}>MRP: {e.Price}.00</Text>
              <Button bg={"#D11243"} color="white">
                ADD TO CART
              </Button>
            </Flex>
          </div>
        ))}
      </div>
    </div>
  );
};
