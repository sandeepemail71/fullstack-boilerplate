/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './StyledInput';
import Wrapper from './Wrapper';
import Label from './Label';

function TextInput(props) {
    const textInput = (
        <Wrapper>
            <Label>{props.label}</Label>
            <StyledInput width='300px' height='40px' onClick={props.onclick} onChange={props.onChange} />
        </Wrapper>
    );


    return textInput;
}

TextInput.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    onChange: PropTypes.func
};

export default TextInput;
