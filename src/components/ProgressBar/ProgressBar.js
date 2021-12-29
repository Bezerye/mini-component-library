/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  let Component;

  if (size === 'small') Component = WrapperSmall;
  if (size === 'medium') Component = WrapperMedium;
  if (size === 'large') Component = WrapperBase;

  return (
    <Component size={size}>
      <BarWrapper>
        <Bar value={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
          <VisuallyHidden>{value + '%'}</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Component>
  );
};

const Bar = styled.div`
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  height: 100%;
  border-radius: 4px 0px 0px 4px;
`
const BarWrapper = styled.div`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const WrapperBase = styled.div`
  width: 370px;
  height: 24px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: 4px;
  overflow: hidden;
`;

const WrapperMedium = styled(WrapperBase)`
  height: 12px;
  border-radius: 4px;
  padding: 0;
`
const WrapperSmall = styled(WrapperBase)`
  height: 8px;
  border-radius: 4px;
  padding: 0;
`

export default ProgressBar;
