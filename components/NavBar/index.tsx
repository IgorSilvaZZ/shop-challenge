import { useSelector } from "react-redux";
import { selectCart } from "../../store/cartSlice";

import { ContainerNavBar, LogoSection, SectionCart } from "./style";

interface INavBar {
  handleCart: () => void;
}

export const NavBar = ({ handleCart }: INavBar) => {
  const cart = useSelector(selectCart);

  const totalItemsCart =
    cart.length > 0
      ? cart.reduce((prevent, current) => {
          if (!current.quantity) {
            return 0;
          }

          return prevent + current.quantity;
        }, 0)
      : 0;

  return (
    <ContainerNavBar>
      <LogoSection>
        <span>Slim</span>
        <p>Shop</p>
      </LogoSection>

      <SectionCart>
        <img src='cart.png' alt='Cart Icon' onClick={handleCart} />

        <span>{totalItemsCart}</span>
      </SectionCart>
    </ContainerNavBar>
  );
};
