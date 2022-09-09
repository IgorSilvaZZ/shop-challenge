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
        <img src='shopping-bag.png' alt='Bag Icon' />
        <span>COMPRAR</span>
      </FooterProduct>
    </BoxProduct>
  );
};
