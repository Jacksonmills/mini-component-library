import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderWidth: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderWidth: 2,
    height: 36,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  // TODO: validate styles

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{ '--size': styles.iconSize + 'px' }}
      >
        <Icon
          id={icon}
          size={styles.iconSize}
        />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--border-width': styles.borderWidth + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  transition: color 100ms ease;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  border-width: var(--border-width);
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;

  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
