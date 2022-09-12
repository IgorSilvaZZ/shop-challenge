import styled from "styled-components";

const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxProduct = styled(FlexColumnCenter)`
  width: 220px;
  height: 285px;

  background: #ffffff;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;

export const ContentProduct = styled(FlexColumnCenter)`
  width: 90%;
  height: 90%;
`;

export const ImageSection = styled(FlexColumnCenter)`
  width: 100%;
  height: 60%;
`;

export const ImageProduct = styled.img`
  width: 50%;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  height: 20%;
  width: 100%;
`;

export const TitleProduct = styled.div`
  height: 70%;
  width: 90%;

  overflow: hidden;
  text-overflow: ellipsis;

  p {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const PriceProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;

  background: #373737;
  color: white;

  border-radius: 8px;

  p {
    font-size: 15px;
    font-weight: 700;
  }
`;

export const DescriptionSection = styled.div`
  width: 100%;
  height: 10%;

  overflow: hidden;
  text-overflow: ellipsis;

  p {
    font-weight: 300;
    font-size: 10px;
  }
`;

export const FooterProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 10%;

  background: #8e44ad;

  border-radius: 0px 0px 8px 8px;

  span {
    font-weight: 600;
    font-size: 14px;

    color: white;
  }

  img {
    cursor: pointer;
  }
`;
