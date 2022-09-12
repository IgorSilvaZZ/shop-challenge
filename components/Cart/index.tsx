import { useSelector, useDispatch } from "react-redux";
import { selectCart, cartActions } from "../../store/cartSlice";
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
  const dispatch = useDispatch();

  const cart = useSelector(selectCart);

  const total =
    cart.length > 0
      ? cart.reduce((prevent, current) => {
          return prevent + current.price;
        }, 0)
      : 0;

  function addQuantity(id: number) {
    dispatch(
      cartActions.addQuantityProduct({
        id,
      })
    );
  }

  function removeQuantity(id: number) {
    dispatch(
      cartActions.removeQuantityProduct({
        id,
      })
    );
  }

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
                <CardProduct key={product.id}>
                  <ImageCard src={product.image} />

                  <NameProduct>{product.name}</NameProduct>

                  <SectionQuantities>
                    <p>Qtd:</p>

                    <BoxQuantities>
                      <span onClick={() => removeQuantity(product.id)}>-</span>
                      <span>{product.quantity}</span>
                      <span onClick={() => addQuantity(product.id)}>+</span>
                    </BoxQuantities>
                  </SectionQuantities>

                  <PriceProduct>R${product.price.toFixed(0)}</PriceProduct>
                </CardProduct>
              </>
            ))}
          </>
        )}
      </ContentCart>

      <SectionTotalProducts>
        <p>Total:</p>
        <p>R${total.toFixed(0)}</p>
      </SectionTotalProducts>

      <ButtonFinish>Finalizar Compra</ButtonFinish>
    </ContainerCart>
  );
};
