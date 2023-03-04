import React from 'react';
import {Text} from '@chakra-ui/react'

const BodyText = (props) => {
    return (
        <Text fontSize={props.size ? size : '20px'} {...props}> {props.children}</Text>
    );
}

export default BodyText;
