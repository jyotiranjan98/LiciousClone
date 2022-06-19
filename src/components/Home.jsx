import { Box, Button, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62a882919ddbf" />
      </Box>
      <Box
        bg="rgb(255,220,147)"
        mt="20px"
        h="100px"
        width="60%"
        marginLeft="300px"
        borderRadius="10px"
        padding="15px"
      >
        <Flex gap="70%">
          <Image
            src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
            height="36px"
            marginLeft="20px"
          />
          <Button bg="#D11243">JOIN NOW</Button>
        </Flex>
        <Text textAlign={"initial"}>
          Enjoy unlimited free delivery & perks crafted for true meat lovers
        </Text>
      </Box>
      <Box mt={"10px"} >
        <Text fontSize={"20px"} fontWeight={"bold"} color={"#D11243"}>
          Know the Licious way
        </Text>
        <Center>
          <Box border={"1px solid grey"} h={"100px"}>
            <Flex textAlign={"center"} gap={"20px"}>
              <Box m={"30px"}>
                <Text>Premium </Text>
                <Text> Produce</Text>
              </Box>
              <Box borderLeft={"1px solid Grey"} m={"30px"}>
                <Text ml={"30px"}>World-Class Central</Text>
                <Text>Production Unit</Text>
              </Box>
              <Box borderLeft={"1px solid Grey"} m={"30px"}>
                <Text ml={"30px"}>150 Quality</Text>
                <Text>Checks</Text>
              </Box>
              <Box borderLeft={"1px solid Grey"} margin={"30px"}>
                <Text ml={"30px"}>Delivered Fresh</Text>
                <Text>Everyday</Text>
              </Box>
              <Box borderLeft={"1px solid Grey"} m={"30px"}>
                <Text ml={"30px"}>Extraordinary</Text>
                <Text>Cooking</Text>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Box>
      <Center>
        {" "}
        <Box border={"3px solid #D11243"} width="200px" borderRadius={"5px"}>
          <Text fontWeight={"semibold"} color={"#D11243"}>
            Discover How{" "}
          </Text>
        </Box>
      </Center>
      <Box ml={"230px"} mt={"20px"}>
        <Image
          src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/e9d038c8-2170-6174-ce4d-537bf27aa0b3/original/static-bank-units-June-web_(25).jpg?format=webp"
          borderRadius="8px"
        />
      </Box>
      <Box  bg={"#f1a94b"} ml={"290px"} h={"80px"} borderRadius={"8px"} width={"60%"} mt={"20px"}>
        <Flex gap={"30px"} mt={"10px"}>
            <Image src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_referral_banner_icon.png" width={"40px"} ml={"40px"}></Image>
            <Text fontWeight={"bold"} fontSize={"30px"} color={"white"}>Invite friends and get Rs 200 per referral</Text>
        </Flex>
      </Box>
      <Box>
        <Text ml={"150px"} textAlign={"initial"} fontWeight={"bold"} fontSize={"22px"}>
          Best Sellers
        </Text>
        <Text ml={"150px"} textAlign={"initial"} fontWeight={"bold"} fontSize={"22px"}>
          Boneless Cuts
        </Text>
      </Box>
      <Box>
        <Flex>
          <Text ml={"150px"} fontWeight={"bold"} fontSize={"22px"}>
            Explore by category
          </Text>
        </Flex>
        <Grid
          mt={"10px"}
          ml={"150px"}
          templateColumns="repeat(4, 260px)"
          gap={2}
        >
          <Image src="https://dao54xqhg9jfa.cloudfront.net/Category/782aa584-4978-2e46-e38a-4aff56f10800/original/1603885852.4258--2020-10-2817_20_52--738.jpeg?format=webp"></Image>
          <Image
            src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/840ded78-a6e8-c768-4069-9abde900b5ea/original/Chicken_(1).png?format=webp"
            width={"260px"}
            height={"230px"}
          ></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/050c5580-8e16-30f3-213f-f109d86be44a/original/cat-image_(1).jpg?format=webp"></Image>
          <Image
            src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b297aada-cd28-8357-f0e1-2ae25d3dd1ee/original/FishSeafood.png?format=webp"
            width={"260px"}
            height={"230px"}
          ></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/b4b90104-3976-ee97-7cdd-812a4916c0e6/original/Mutton.jpg?format=webp"></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1db15fd5-a5d3-b275-1579-2e3b2edc0d30/original/RTC.png?format=webp"></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/Category/2105beee-e9a9-3efd-4912-2b9657f32d99/original/1604284739.3526--2020-11-0208_08_59--472.jpeg?format=webp"></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/db686e9b-3609-a719-49a6-435a883a1d59/original/Cold-Cuts_(1).png?format=webp"></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/Category/4073bb7f-24ac-d482-06cf-1aa87d471940/original/1603646492.575--2020-10-2522_51_32--738.jpeg?format=webp"></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/Category/bdfca08e-566b-4439-0aac-9c100704cb0b/original/1603646527.5457--2020-10-2522_52_07--738.jpeg?format=webp"></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4ee5e278-2218-6df0-9f74-63943fcf4ca7/original/Kebabs.png?format=webp"></Image>
          <Image src="https://dao54xqhg9jfa.cloudfront.net/Category/8209cc57-cc85-4e5d-ac6b-4d8f2f36c1ce/original/1604645369.2866--2020-11-0612_19_29--738.jpeg?format=webp"></Image>
        </Grid>
      </Box>
      <Text textAlign={"initial"} fontWeight={"bold"} fontSize={"22px"} ml={"150px"} mt={"40px"}>
        Check out our blog
      </Text>
      <Grid templateColumns="repeat(4, 400px)" gap={2} ml={"150px"} mt={"10px"}>
        <Box>
          <Image src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_436300522.jpg" ></Image>
          <Text>
            Have you Ever Heard of Omega-3 Eggs? Learn About Their Benefits in
            This Article!Have you Ever Heard of Omega-3 Eggs? Learn About Their
            Benefits in This Article!
          </Text>
        </Box>
        <Box>
          <Image src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1695762436.jpg"></Image>
          <Text>
            Try This Easy Recipe for Pan-Seared Mahi Mahi in a Butter-Garlic
            Sauce!Try This Easy Recipe for Pan-Seared Mahi Mahi in a
            Butter-Garlic Sauce!
          </Text>
        </Box>
        <Box>
          <Image src="https://www.licious.in/blog/wp-content/uploads/2022/06/honey-garlic-chicken-wings.jpg" width={"500px"} height={"268px"}></Image>
          <Text>
            Make Delicious, Scrumptious Licious Honey Chilli Garlic Wings at
            home!Make Delicious, Scrumptious Licious Honey Chilli Garlic Wings
            at home!
          </Text>
        </Box>
      </Grid>
      <Center mt={"10"}>
        <Image src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34bdbb6f63"></Image>
      </Center>
     <Footer/>
    </Box>
  );
};
