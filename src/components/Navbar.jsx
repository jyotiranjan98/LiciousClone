import { Box, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AllRoutes } from './AllRoutes'


export const Navbar = () => {
  return (
    <Box>
        <Box border="1px solid red" height="70PX" padding="20px">
            <Flex gap="40px" marginLeft="100px">
                <Flex><Link to="/"><Image src="https://www.licious.in/img/rebranding/licious-logo.svg"/></Link></Flex>
                <Flex>
                <Flex><Image src="https://www.licious.in/img/rebranding/location_icon.svg"/></Flex>
                <Flex><Text>Location</Text></Flex>
                </Flex>
                <Flex><Input placeholder='kolkata'/></Flex>
                <Flex gap="50px">
                <Flex><Image src="https://www.licious.in/img/rebranding/profile_icon.svg"/></Flex>
                <Flex><Image src="https://www.licious.in/img/rebranding/cart_icon.svg"/></Flex>
                </Flex>
            </Flex>
        </Box>
        <Box border="1px solid red" height="100PX">
                <Flex height="66px" margin="10px" gap="40px" marginLeft="100px">
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/59724ce1-1f3d-f1f4-c688-c05a0005c8de/original/Circle@3x-16.png?format=webp"/></Flex>
                <Flex><Link to="/chicken"><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e0442fff-f076-427c-93e2-ebd5c88c271c/original/Circle@3x-23.png?format=webp"/></Link></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/59724ce1-1f3d-f1f4-c688-c05a0005c8de/original/Circle@3x-16.png?format=webp"/></Flex>
                <Flex><Link to="/fish"><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e13f894d-d51e-beea-4ef5-aab1a193d373/original/Circle@3x-13.png?format=webp"/></Link></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4d9c0c72-c070-dd56-4a2e-9fbfe8230f42/original/Circle@3x-1.png?format=webp"/></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/450e3217-59ac-8145-3bee-296e729f03bf/original/Circle@3x-17.png?format=webp"/></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f7ef9035-9baa-b9b5-d56d-97059ffe6c39/original/Circle@3x-18.png?format=webp"/></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2569efa2-90ca-533c-e7c2-48330c4b3a59/original/Circle@3x-21.png?format=webp"/></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7b500ec8-8001-436b-74ca-430fd4e2ff0b/original/Circle@3x-14.png?format=webp"/></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/27cf80b9-2a8f-d70d-7695-8142c85e5bcb/original/Circle@3x-2.png?format=webp"/></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c7cde9d8-4e31-8ea5-79a4-cce48c7ed109/original/Circle@3x-15.png?format=webp"/></Flex>
                <Flex><Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3130cc9b-71e5-ff33-d413-9fcda531afac/original/Circle@3x-20.png?format=webp"/></Flex>
                </Flex>
        </Box>
       
    </Box>
  )
}
