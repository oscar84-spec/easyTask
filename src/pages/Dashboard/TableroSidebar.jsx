import { styledHDMenu } from "../../assets/styledComponents/HeaderDashboard/StyledHDMenu";
import AccountMenu from "../../components/AccountMenu/AccountMenu";
import { FaTable } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { GoProjectTemplate } from "react-icons/go";
import { styledSidebar } from "../../assets/styledComponents/Tableros/StyledTabSidebar";

const TableroSidebar = () => {
  const { AplicacionesContainer } = styledHDMenu;
  const { ContainerAd, SpanText, SpanDesc, LinkText } = styledSidebar;

  const sideBar = [
    { icon: <FaTable />, text: "Tableros" },
    { icon: <GoProjectTemplate />, text: "Plantillas" },
    { icon: <FaHome />, text: "Inicio" },
  ];
  return (
    <>
      <AplicacionesContainer>
        {sideBar.map((item, index) => (
          <AccountMenu key={index} item={item} />
        ))}
      </AplicacionesContainer>
      <hr />
      <ContainerAd>
        <SpanText>Prueba EasyTask Premium</SpanText>
        <SpanDesc>
          Consigue tableros ilimitados, todas las vistas que existen,
          automatizaciones sin fin y mucho más
        </SpanDesc>
        <LinkText>Comezar prueba gratis</LinkText>
      </ContainerAd>
    </>
  );
};

export default TableroSidebar;
