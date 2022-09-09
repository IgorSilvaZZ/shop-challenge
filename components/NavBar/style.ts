import styled from "styled-components";

export const ContainerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 12vh;

  padding: 10px 50px;

  background: #0f52ba;
`;

export const LogoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 20%;
  height: 100%;

  span {
    font-weight: 600;
    font-size: 40px;

    color: white;
  }

  p {
    font-weight: 300;
    font-size: 20px;

    color: white;
  }
`;

export const SectionCart = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;

  height: 30%;
  width: 90px;

  padding: 20px;

  background: #ffffff;
  border-radius: 8px;

  img {
    cursor: pointer;
  }

  span {
    font-weight: 700;
    font-size: 18px;

    color: #000000;
  }
`;
