import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: teal;
  color: white;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Anouncements = () => {
  return <Container>Super Deal! Free Shipping on Orders over $50</Container>;
};

export default Anouncements;
