import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF, FaGoogle, FaShopify, FaTelegram} from 'react-icons/fa'

function Social() {
  return (
    <HStack spacing="14">
        <Icon as={FaFacebookF} boxSize="50"/>
        <Icon as={FaGoogle} boxSize="50"/>
        <Icon as={FaTelegram} boxSize="50"/>
        <Icon as={FaShopify} boxSize="50"/>
    </HStack>
  )
}

export default Social