import { ContainerNavBar, LogoSection, SectionCart } from "./style";

interface INavBar {
  handleCart: () => void;
}

export const NavBar = ({ handleCart }: INavBar) => {
  return (
    <ContainerNavBar>
      <LogoSection>
        <span>MKS</span>
        <p>Sistemas</p>
      </LogoSection>

      <SectionCart>
        <img src='cart.png' alt='Cart Icon' onClick={handleCart} />

        <span>0</span>
      </SectionCart>
    </ContainerNavBar>
  );
};
