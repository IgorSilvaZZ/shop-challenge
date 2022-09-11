import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cartSlice";

import { ContainerNavBar, LogoSection, SectionCart } from "./style";

interface INavBar {
  handleCart: () => void;
}

export const NavBar = ({ handleCart }: INavBar) => {
  const cart = useSelector(selectCart);

  return (
    <ContainerNavBar>
      <LogoSection>
        <span>MKS</span>
        <p>Sistemas</p>
      </LogoSection>

      <SectionCart>
        <img src='cart.png' alt='Cart Icon' onClick={handleCart} />

        <span>{cart.length}</span>
      </SectionCart>
    </ContainerNavBar>
  );
};
