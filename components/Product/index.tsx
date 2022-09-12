import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cartSlice";
import { IProduct } from "../../types/IProduct";

import {
  BoxProduct,
  ContentProduct,
  DescriptionSection,
  FooterProduct,
  ImageProduct,
  ImageSection,
  PriceProduct,
  TitleProduct,
  TitleSection,
} from "./style";

interface IProductProps {
  product: IProduct;
}

export const Product = ({ product }: IProductProps) => {
  const dispatch = useDispatch();

  function handleCart(product: IProduct) {
    dispatch(cartActions.addCart(product));
  }

  return (
    <BoxProduct>
      <ContentProduct>
        <ImageSection>
          <ImageProduct src={product.image} />
        </ImageSection>

        <TitleSection>
          <TitleProduct>
            <p>{product.title}</p>
          </TitleProduct>
          <PriceProduct>
            <p>R$ {product.price.toFixed(0)}</p>
          </PriceProduct>
        </TitleSection>

        <DescriptionSection>
          <p>{product.description}</p>
        </DescriptionSection>
      </ContentProduct>

      <FooterProduct>
        <img
          src='shopping-bag.png'
          alt='Bag Icon'
          onClick={() => handleCart(product)}
        />
        <span>COMPRAR</span>
      </FooterProduct>
    </BoxProduct>
  );
};
