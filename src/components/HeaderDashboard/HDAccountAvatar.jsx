import { styledHDAccountAvatar } from "../../assets/styledComponents/HeaderDashboard/StyledHDAccountAvatar";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { styledHDMenu } from "../../assets/styledComponents/HeaderDashboard/StyledHDMenu";
import AccountMenu from "../AccountMenu/AccountMenu";
import { IoMdSettings, IoMdHelp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdBackupTable, MdDirections } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import { IoLogOut } from "react-icons/io5";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { useNavigate } from "react-router-dom";

const HDAccountAvatar = ({ data }) => {
  const {
    AccountAvatar,
    ContainerAccountMenu,
    ContainerSpanText,
    SpanText,
    ButtonCloseAccount,
    ContainerAvatar,
    IconAvatar,
    TextContainer,
    SpanName,
    SpanEmail,
    ButtonSesionClose,
  } = styledHDAccountAvatar;
  const navigate = useNavigate();

  const { AplicacionesContainer } = styledHDMenu;

  const [showMenu, setShowMenu] = useState(false);

  const accountList = [
    { icon: "", text: "Cambiar cuentas" },
    { icon: "", text: "Gestionar cuentas" },
  ];

  const accountApp = [
    { icon: <CgProfile />, text: "Perfil y visibilidad" },
    { icon: <MdBackupTable />, text: "Actividad" },
    { icon: <LuCreditCard />, text: "Tarjetas" },
    { icon: <IoMdSettings />, text: "Ajustes" },
  ];

  const accountHelp = [
    { icon: <IoMdHelp />, text: "Ayuda" },
    { icon: <MdDirections />, text: "Accesos directos" },
  ];

  const { nombre, email } = data;
  const avatarLetra = nombre.charAt(0).toUpperCase();

  const sessionClose = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <>
      <AccountAvatar onClick={() => setShowMenu(!showMenu)}>
        {avatarLetra}
      </AccountAvatar>
      {showMenu && (
        <ContainerAccountMenu>
          <ContainerSpanText>
            <SpanText>Cuenta</SpanText>
            <ButtonCloseAccount onClick={() => setShowMenu(!showMenu)}>
              <IoCloseOutline />
            </ButtonCloseAccount>
          </ContainerSpanText>
          <ContainerAvatar>
            <IconAvatar>{avatarLetra}</IconAvatar>
            <TextContainer>
              <SpanName>{nombre}</SpanName>
              <SpanEmail>{email}</SpanEmail>
            </TextContainer>
          </ContainerAvatar>
          <AplicacionesContainer>
            {accountList.map((item, index) => (
              <AccountMenu key={index} item={item} />
            ))}
          </AplicacionesContainer>
          <hr />
          <SpanText>EasyTask</SpanText>
          <AplicacionesContainer>
            {accountApp.map((item, index) => (
              <AccountMenu key={index} item={item} />
            ))}
          </AplicacionesContainer>
          <hr />
          <AplicacionesContainer>
            {accountHelp.map((item, index) => (
              <AccountMenu key={index} item={item} />
            ))}
          </AplicacionesContainer>
          <SwitchTheme />
          <hr />
          <ButtonSesionClose onClick={sessionClose}>
            <IoLogOut /> Cerrar Sesión
          </ButtonSesionClose>
        </ContainerAccountMenu>
      )}
    </>
  );
};

export default HDAccountAvatar;
