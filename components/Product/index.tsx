import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";

import {
  BoxProduct,
  ContentProduct,
  DescriptionSection,
  FooterProduct,
  ImageProduct,
  PriceProduct,
  TitleProduct,
  TitleSection,
} from "./style";

export const Product = () => {
  const dispatch = useDispatch();

  function handleCart() {
    dispatch(
      cartActions.addCart({
        id: 1,
        name: "iPhone X 128 GB",
        brand: "Apple",
        description:
          "O Apple iPhone X é um smartphone iOS avançado e abrangente em todos os pontos de vista com algumas características excelentes",
        price: 2000.1,
      })
    );
  }

  return (
    <BoxProduct>
      <ContentProduct>
        <ImageProduct src='apple-watch.png' />

        <TitleSection>
          <TitleProduct>
            <p>Apple Watch Series 4 GPS</p>
          </TitleProduct>
          <PriceProduct>
            <p>R$ 399</p>
          </PriceProduct>
        </TitleSection>

        <DescriptionSection>
          <p>Redesigned from scratch and completely revised.</p>
        </DescriptionSection>
      </ContentProduct>

      <FooterProduct>
        <img src='shopping-bag.png' alt='Bag Icon' onClick={handleCart} />
        <span>COMPRAR</span>
      </FooterProduct>
    </BoxProduct>
  );
};
