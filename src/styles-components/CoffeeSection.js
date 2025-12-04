import styled from "styled-components";

export const CoffeeMainSection = styled.div`
  background-color: #f0eeed;
  padding: 87px 108px;
`;

export const CoffeeHeading = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 36px;
    font-weight: 500;
  }
  button {
    width: 71px;
    height: 45px;
    color: #f0eeed;
    background-color: #1f1f22;
    font-size: 20px;
    border-radius: 5px;
  }
`;
export const CardSections = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 55px;
  margin-top: 34px;
`;

export const CoffeCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  & > img {
    object-fit: cover;
    height: 206px;
  }
  & > div {
    background-color: white;
    padding: 14px 20px;
    color: #766f6b;
    display: flex;
    justify-content: space-between;
    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;
    }
    img {
      width: 62px;
      height: 62px;
    }
  }
`;
