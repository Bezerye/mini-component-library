import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const sizes = {
  small: {
    '--marginLeft': '24px',
    'iconSize': 16,
    '--fontSize': (14 / 16)+'rem',
    '--lineHeightt': 'px',
    '--borderSize': '1px solid #000000',
    '--paddingBottom': '4px',
  },
  large: {
    '--marginLeft': '36px',
    'iconSize': 24,
    '--fontSize': (18 / 16)+'rem',
    '--lineHeight': '21px',
    '--borderSize': '2px solid #000000',
    '--paddingBottom': '7px',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = sizes[size]

  return (
    <Wrapper style={styles}>
      <IconEl id={icon} size={styles.iconSize}></IconEl>
      <label for='input'>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <Input width={width} style={styles} type='text' name='input' placeholder={placeholder}></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: var(--borderSize);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`
// Small variant
const Input = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  color: inherit;

  border: none;
  padding-left: var(--marginLeft);
  width: ${p => p.width}px;
  min-width: min-content;

  &::placeholder  {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 5px;
  }
`

const IconEl = styled(Icon)`
  position: absolute;
  top: calc(var(--paddingBottom)/ 2);
  left:0;
  bottom: var(--paddingBottom);
  margin: auto;
  pointer-events: none;
`

export default IconInput;
