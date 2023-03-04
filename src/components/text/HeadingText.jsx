import React from 'react';
import {Text} from '@chakra-ui/react'

const HeadingText = (props) => {
    return (
        <Text fontSize={props.size ? size : '16px'} {...props}> {props.children}</Text>
    );
}

export default HeadingText;
