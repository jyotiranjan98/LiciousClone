import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box mt={"20px"}>
      <Image
        src="https://www.licious.in/img/rebranding/licious-logo.svg"
        ml={"150px"}
        mt={"10px"}
        h={"50px"}
      ></Image>
      <Flex>
        <Box ml={"150px"} textAlign={"initial"}>
          <Text fontSize={"20px"} fontWeight={"bold"} mt={"20px"}>
            USEFUL LINKS
          </Text>
          <Text>Why Licious?</Text>
          <Text>Refer & Earn</Text>
          <Text>Licious Cash & Cash+</Text>
          <Text>Careers</Text>
          <Text>BLOG</Text>
          <Text>Campaign</Text>
          <Text>Bug Bounty Guidelines</Text>
          <Text>About Us</Text>
          <Text>FSSC 22000 Certification</Text>
          <Text>FSSAI Licenses</Text>
          <Text>Sitemap</Text>
        </Box>
        <Box ml={"40px"} mt={"20px"} textAlign={"initial"}>
          <Text> EXPERIENCE LICIOUS APP ON MOBILE</Text>
          <Flex>
            <Image src="https://www.licious.in/img/rebranding/app-store-new.svg"></Image>
            <Image src="https://www.licious.in/img/rebranding/play-store-new.png"></Image>
          </Flex>
        </Box>
        <Box mt={"20px"} ml={"50px"} textAlign={"initial"}>
          <Text fontWeight={"bold"} ml={"20px"}>
            CONTACT US
          </Text>
          <Text ml={"20px"}>Call: 1800-4190-786</Text>
          <Text ml={"20px"}>Talktous@licious.com</Text>
          <Text ml={"20px"} fontWeight={"bold"} mt={"10px"}>
            REGISTERED OFFICE ADDRESS:
          </Text>
          <Text ml={"20px"}>House of Licious, Zed Pearl, No 12, </Text>
          <Text ml={"20px"}>Domlur Layout</Text>
          <Text ml={"20px"}>Bangalore, Karnataka - 560071</Text>
        </Box>
        <Box textAlign={"initial"} mt={"20px"} ml={"30px"}>
          <Text ml={"20px"}>T&C</Text>
          <Text ml={"20px"}>FAQ</Text>
          <Text ml={"20px"}>Privacy Policy</Text>
          <Text ml={"20px"} fontWeight={"bold"}>
            HAVE SECURITY CONCERN?
          </Text>
          <Text ml={"20px"}>Mail us to: </Text>
          <Text ml={"20px"}>security@licious.com</Text>
        </Box>
        <Box ml={"20px"} width={"150px"} h={"30px"}>
          <Image src="https://www.licious.in/img/rebranding/3-dsecure.png"></Image>
        </Box>
      </Flex>
      <Text fontWeight={"bold"}>© 2022 Delightful Gourmet Pvt Ltd. All Rights Reserved.</Text>
      <Text mt={"10px"} ml={"150px"} w={"80%"}>
        Licious is your one-stop fresh meat delivery shop. In here, you get
        nothing but the freshest meat & seafood, delivered straight to your
        doorstep. Now you can buy meat online anytime at your convenience.
        Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
        Prawns, Crabs), Marinades & Cold Cuts. All our products are completely
        natural and healthy. Once you've experienced Licious, you'll never go
        back to the old way of buying meat and seafood.
      </Text>
    </Box>
  );
};
