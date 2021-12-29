import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper id={'chevron-down'} strokeWidth={2} size={24}></IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none
`
const Wrapper = styled.div`
  display: block;
  width: max-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  padding: 12px 52px 12px 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 19px;

  ${NativeSelect}:focus + & {
    outline: auto;
  }
`

const IconWrapper = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin : auto;
  `

export default Select;
