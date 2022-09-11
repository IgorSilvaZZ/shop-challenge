import { useSelector } from "react-redux";
import { selectCart } from "../../store/cartSlice";
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
  const cart = useSelector(selectCart);

  const total =
    cart.length > 0
      ? cart.reduce((prevent, current) => {
          return prevent + current.price;
        }, 0)
      : 0;

  return (
    <ContainerCart isOpen={isOpen}>
      <HeaderCart>
        <TitleCart>
          <p>Carrinho de compras</p>
        </TitleCart>

        <CloseCartIcon onClick={onClose}>&times;</CloseCartIcon>
      </HeaderCart>

      <ContentCart>
        {cart.length > 0 && (
          <>
            {cart.map((product) => (
              <>
                <CardProduct>
                  <ImageCard src='apple-watch.png' />

                  <NameProduct>{product.name}</NameProduct>

                  <SectionQuantities>
                    <p>Qtd:</p>

                    <BoxQuantities>
                      <span>-</span>
                      <span>1</span>
                      <span>+</span>
                    </BoxQuantities>
                  </SectionQuantities>

                  <PriceProduct>R${product.price.toFixed(0)}</PriceProduct>
                </CardProduct>
              </>
            ))}
          </>
        )}
      </ContentCart>

      {/* <ContentCart>
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
      </ContentCart> */}

      <SectionTotalProducts>
        <p>Total:</p>
        <p>R${total.toFixed(0)}</p>
      </SectionTotalProducts>

      <ButtonFinish>Finalizar Compra</ButtonFinish>
    </ContainerCart>
  );
};
