import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const FixedInBottomButton = styled(Button)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  background-color: #ff4b5c;
  border: none;
`;

const ReservationButton = ({ history, match, otaURL }) => {
  console.log(history, match);
  const goToLoading = () => {
    history.push(`/loading?uri=${otaURL}`);
  };

  return (
    <FixedInBottomButton
      block
      onClick={() => goToLoading()}
    >
      숙소 예약하기
    </FixedInBottomButton>
  );
};

export default ReservationButton;
