import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Chicken = () => {
  const [chicken, setChicken] = useState([]);
  const [state,setState]=useState({})

  useEffect(() => {
    chickendata();
  }, []);
  const chickendata = () => {
    axios.get("http://localhost:5000/chicken").then((res) => {
      setChicken(res.data);
    });
  };
  console.log(chicken);

  // const handleChange=(e)=>{
  //     const {Name,value}
  // }

  const addChicken = () => {
    axios.post("http://localhost:5000/cart",state).then(()=>{
      setState({});
    })
      // .then((res) => {
      //   console.log(res.data);
      // })
      // .catch((err) => {
      //   console.log(err.data);
      // });
  };
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
        Chicken
      </Text>
      <div className="cdata">
        {chicken.map((e) => (
          <div className="desc" key={e._id}>
            <img src={e.Image} />
            <h1>{e.Name}</h1>
            <p>{e.Description}</p>
            <h6>Net.wt:{e.Weight}</h6>
            <Flex ml={"10px"} gap={"40%"}>
              <Text color={"#D11243"}>MRP: {e.Price}.00</Text>
              <Button onClick={addChicken} bg={"#D11243"} color="white">
                ADD TO CART
              </Button>
            </Flex>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};
