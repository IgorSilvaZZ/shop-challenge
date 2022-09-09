import {
  BoxQuantities,
  ButtonFinish,
  CardProduct,
  CloseCartIcon,
  ContainerCart,
  ContentCart,
  HeaderCart,
  ImageCard,
  NameProduct,
  PriceProduct,
  SectionQuantities,
  SectionTotalProducts,
  TitleCart,
} from "./style";

interface ICart {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: ICart) => {
  return (
    <ContainerCart isOpen={isOpen}>
      <HeaderCart>
        <TitleCart>
          <p>Carrinho de compras</p>
        </TitleCart>

        <CloseCartIcon onClick={onClose}>&times;</CloseCartIcon>
      </HeaderCart>

      <ContentCart>
        <CardProduct>
          <ImageCard src='apple-watch.png' />

          <NameProduct>Apple Watch Series 4 GPS</NameProduct>

          <SectionQuantities>
            <p>Qtd:</p>

            <BoxQuantities>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </BoxQuantities>
          </SectionQuantities>

          <PriceProduct>R$399</PriceProduct>
        </CardProduct>

        <CardProduct>
          <ImageCard src='apple-watch.png' />

          <NameProduct>Apple Watch Series 4 GPS</NameProduct>

          <SectionQuantities>
            <p>Qtd:</p>

            <BoxQuantities>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </BoxQuantities>
          </SectionQuantities>

          <PriceProduct>R$399</PriceProduct>
        </CardProduct>

        <CardProduct>
          <ImageCard src='apple-watch.png' />

          <NameProduct>Apple Watch Sehries 4 GPS</NameProduct>

          <SectionQuantities>
            <p>Qtd:</p>

            <BoxQuantities>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </BoxQuantities>
          </SectionQuantities>

          <PriceProduct>R$399</PriceProduct>
        </CardProduct>
      </ContentCart>

      <SectionTotalProducts>
        <p>Total:</p>
        <p>R$798</p>
      </SectionTotalProducts>

      <ButtonFinish>Finalizar Compra</ButtonFinish>
    </ContainerCart>
  );
};
