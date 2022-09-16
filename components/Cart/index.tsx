import { useSelector, useDispatch } from "react-redux";

import {
  DragDropContext,
  DropResult,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
  DraggableProvided,
  BeforeCapture,
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
import { useState } from "react";

interface ICart {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: ICart) => {
  const [trash, setTrash] = useState([]);

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

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }
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
        <Droppable droppableId={`droppable-${now()}`}>
          {(providedDroppable: DroppableProvided) => (
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
            </>
          )}
        </Droppable>

        <Droppable droppableId={`droppable-trash-${now()}`}>
          {(providedDroppable: DroppableProvided) => (
            <>
              <SectionTotalProducts
                ref={providedDroppable.innerRef}
                {...providedDroppable.droppableProps}
              >
                {providedDroppable.placeholder}
                <p>Total:</p>
                <p>R${total.toFixed(0)}</p>
                {/* {cart.length > 0 && (
                  <IconTrash
                    src='trash.png'
                  >
                  <Draggable draggableId='draggable-trash' index={1}>
                    {(providedDraggable: DraggableProvided) => (

                    )}
                  </Draggable>
                )} */}
              </SectionTotalProducts>
            </>
          )}
        </Droppable>
      </DragDropContext>

      <ButtonFinish>Finalizar Compra</ButtonFinish>
    </ContainerCart>
  );
};
