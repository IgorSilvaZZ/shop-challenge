import { useSelector, useDispatch } from "react-redux";

import {
  DragDropContext,
  DropResult,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
  DraggableProvided,
} from "react-beautiful-dnd";

import { now } from "moment";

import { selectCart, cartActions } from "../../store/cartSlice";
import {
  BoxQuantities,
  ButtonFinish,
  CardProduct,
  CloseCartIcon,
  ContainerCart,
  ContentCart,
  HeaderCart,
  IconTrash,
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

  const dateNow = now();

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

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }
    console.log(result);
  }

  return (
    <ContainerCart isOpen={isOpen}>
      <HeaderCart>
        <TitleCart>
          <p>Carrinho de compras</p>
        </TitleCart>

        <CloseCartIcon onClick={onClose}>&times;</CloseCartIcon>
      </HeaderCart>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={`droppable-${dateNow}`}>
          {(
            providedDroppable: DroppableProvided,
            snapshot: DroppableStateSnapshot
          ) => (
            <>
              <ContentCart
                {...providedDroppable.droppableProps}
                ref={providedDroppable.innerRef}
              >
                <>
                  {providedDroppable.placeholder}
                  {cart.map((product, index) => (
                    <>
                      <Draggable
                        key={product.title}
                        draggableId={product.title}
                        index={index}
                      >
                        {(providedDraggable: DraggableProvided) => (
                          <CardProduct
                            ref={providedDraggable.innerRef}
                            {...providedDraggable.draggableProps}
                            {...providedDraggable.dragHandleProps}
                          >
                            <ImageCard src={product.image} />

                            <NameProduct>{product.title}</NameProduct>

                            <SectionQuantities>
                              <p>Qtd:</p>

                              <BoxQuantities>
                                <span
                                  onClick={() => removeQuantity(product.id)}
                                >
                                  -
                                </span>
                                <span>{product.quantity}</span>
                                <span onClick={() => addQuantity(product.id)}>
                                  +
                                </span>
                              </BoxQuantities>
                            </SectionQuantities>

                            <PriceProduct>
                              R${product.price.toFixed(0)}
                            </PriceProduct>
                          </CardProduct>
                        )}
                      </Draggable>
                    </>
                  ))}
                </>
              </ContentCart>

              <SectionTotalProducts>
                <p>Total:</p>
                <p>R${total.toFixed(0)}</p>
                {cart.length > 0 && (
                  <IconTrash id='trash-icon' src='trash.png' />
                )}
              </SectionTotalProducts>
            </>
          )}
        </Droppable>
      </DragDropContext>

      <ButtonFinish>Finalizar Compra</ButtonFinish>
    </ContainerCart>
  );
};
