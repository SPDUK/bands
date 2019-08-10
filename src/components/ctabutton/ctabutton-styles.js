import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  border-radius: 60px;
  box-sizing: border-box;
  background: rgba(24, 144, 255, 0.3);
  border: 1px solid rgba(24, 144, 255, 0.8);
  color: #f8f9fa;
  padding: 10px 18px;
  height: 55px;
  font-weight: bold;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;
