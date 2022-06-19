import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Cart = () => {
  const [addcart, setAddCart] = useState([]);
  useEffect(() => {
    cartdata();
  }, []);
  const cartdata = () => {
    axios.get("http://localhost:5000/cart").then((res) => {
      setAddCart(res.data);
    });
  };
  console.log(addcart);
  return (
    <div className="crdata">
            <Text textAlign={"initial"} fontWeight={"bolder"} m={"40px"} fontSize={"large"}  >Order Summary</Text>
            <Box bg={"green"}><Text color={"white"}padding={"10px"}>Free delivery on all orders above ₹399</Text></Box>
        {
            addcart.map((e)=><div  className="crdesc" key={e._id}>
                <Text textAlign={"initial"}>{e.Name}</Text>
                <Flex gap={"60px"}><Box border={"1px solid grey"}>{e.Weight}gms</Box><Text fontWeight={"bold"} color={"#D11243"}> {e.Price}.00</Text></Flex>
            </div>) 
        }
        </div>
  );
};
