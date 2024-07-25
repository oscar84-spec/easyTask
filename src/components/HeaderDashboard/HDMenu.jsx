import { CgMenuGridO } from "react-icons/cg";
import { styledHDMenu } from "../../assets/styledComponents/HeaderDashboard/StyledHDMenu";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  FaAtlassian,
  FaConfluence,
  FaJira,
  FaServicestack,
} from "react-icons/fa";
import { PiCirclesThreeFill } from "react-icons/pi";
import { BiTask } from "react-icons/bi";
import AplicacionesMenu from "../AplicaionesMenu/AplicacionesMenu";
import Descubrir from "../AplicaionesMenu/Descubrir";

const HDMenu = () => {
  const { Icon, ContainerMenu, ButtonClose, SpanText, AplicacionesContainer } =
    styledHDMenu;
  const [showMenu, setShowMenu] = useState(false);

  const aplicaciones = [
    { icon: <FaAtlassian />, text: "Atlassian Home" },
    { icon: <BiTask />, text: "EasyTask" },
  ];

  const descubrir = [
    {
      icon: <FaConfluence />,
      appName: "Confluence",
      appDescription: "Colaboración en documentos",
    },
    {
      icon: <FaJira />,
      appName: "Jira Software",
      appDescription: "Seguimiento de proyectos e incidencias",
    },
    {
      icon: <FaServicestack />,
      appName: "Jira Service Management",
      appDescription: "Gestión de servicios de TI de colaboración",
    },
    {
      icon: <PiCirclesThreeFill />,
      appName: "Más productos de Atlassian",
      appDescription: "",
    },
  ];
  return (
    <>
      <Icon onClick={() => setShowMenu(!showMenu)}>
        <CgMenuGridO />
      </Icon>
      {showMenu && (
        <ContainerMenu>
          <ButtonClose onClick={() => setShowMenu(!showMenu)}>
            <IoCloseOutline />
          </ButtonClose>
          <SpanText>Tus Aplicaciones</SpanText>
          <AplicacionesContainer>
            {aplicaciones.map((app, index) => (
              <AplicacionesMenu key={index} app={app} />
            ))}
          </AplicacionesContainer>
          <hr />
          <SpanText>Descubrir</SpanText>
          <AplicacionesContainer>
            {descubrir.map((desc, index) => (
              <Descubrir key={index} desc={desc} />
            ))}
          </AplicacionesContainer>
        </ContainerMenu>
      )}
    </>
  );
};

export default HDMenu;
