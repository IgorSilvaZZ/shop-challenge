import styled from "styled-components";

interface IContainerCart {
  isOpen: boolean;
}

export const ContainerCart = styled.div<IContainerCart>`
  height: 100%;
  width: 30%;

  position: absolute;

  z-index: 2;

  right: ${(props) => (props.isOpen ? "0" : "-100vh")};

  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  transition: 350ms;
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  padding: 10px;
`;

export const TitleCart = styled.div`
  width: 50%;

  p {
    font-weight: 700;
    font-size: 27px;

    color: white;
  }
`;

export const CloseCartIcon = styled.span`
  font-weight: 400;
  font-size: 28px;

  padding: 0px 8px;

  border-radius: 50%;

  background: #000000;

  color: white;

  cursor: pointer;
`;

export const ContentCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  height: 70%;

  overflow-x: hidden;
  overflow-y: auto;
`;

export const CardProduct = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 379px;
  height: 95px;

  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const ImageCard = styled.img`
  width: 10%;
`;

export const NameProduct = styled.span`
  font-weight: 400;
  font-size: 13px;

  width: 30%;

  color: #2c2c2c;
`;

export const SectionQuantities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: fit-content;
  height: 70%;

  p {
    font-size: 10px;
  }
`;

export const BoxQuantities = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 70px;
  height: 29px;

  background: #ffffff;

  border: 0.3px solid #bfbfbf;
  border-radius: 4px;

  transition: all 0.2s;

  span {
    text-align: center;

    font-weight: 400;
    font-size: 13px;

    cursor: pointer;

    &:nth-child(2) {
      padding: 0 5px;

      border-left: 1px solid #bfbfbf;
      border-right: 1px solid #bfbfbf;
    }

    &:hover {
      font-weight: 600;
    }
  }
`;

export const PriceProduct = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

export const SectionTotalProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 10%;

  p {
    font-weight: 700;
    font-size: 28px;

    color: white;
  }
`;

export const ButtonFinish = styled.button`
  width: 100%;

  padding: 10px;

  text-align: center;

  font-weight: 700;
  font-size: 28px;

  color: #ffffff;
  background: #000000;

  outline: none;
  border: none;

  cursor: pointer;
`;
