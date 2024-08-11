import { styledHDash } from "../../assets/styledComponents/HeaderDashboard/StyledHDash";
import { styledTabUser } from "../../assets/styledComponents/TabUser/StyledTabUser";
import HDLogo from "../../components/HeaderDashboard/HDLogo";
import HDMenu from "../../components/HeaderDashboard/HDMenu";
import HDNavbar from "../../components/HeaderDashboard/HDNavbar";
import AddList from "./AddList";
import { useState, useEffect } from "react";
import TabUserLists from "./TabUserLists";
import { apiFetch } from "../../JS/Fetch/api";
import { ThemeProvider } from "styled-components";
import Themes from "../../JS/Themes/themes";
import { styledSwitch } from "../../assets/styledComponents/TabUser/StyledSwitchTheme";
import { themeUser } from "../../JS/Themes/themeUser";

const TabUser = ({ idAccount, idTablero, tema }) => {
  const { HeaderContainer, ContainerMenu } = styledHDash;
  const { SectionTabUser, ContainerLists, ContainerListFlex } = styledTabUser;
  const { showList } = apiFetch;
  const { ContainerSwitchTheme, SwitchCircle } = styledSwitch;
  const [listTab, setListTab] = useState([]);
  const [theme, setTheme] = useState(tema);
  const { updateThemeUser } = themeUser;
  const [fondo, setFondo] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Obteniendo las listas de json-server */
  useEffect(() => {
    const listShow = async (idTab) => {
      try {
        const dataList = await showList(idTab);
        setListTab(dataList);
      } catch (error) {
        console.error(error);
      }
    };
    listShow(idTablero);
  }, [listTab]);

  const changeTheme = async () => {
    const accountId = localStorage.getItem("userId");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await updateThemeUser(accountId, newTheme);
  };

  useEffect(() => {
    const obtenerFondo = async () => {
      try {
        const response = await fetch(
          `https://api-easytask.vercel.app/tableros/${idTablero}`
        );
        const data = await response.json();
        setFondo(data.fondo);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    obtenerFondo();
  }, [idTablero]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!fondo) {
    return <div>No se pudo cargar el fondo</div>;
  }

  return (
    <ThemeProvider theme={Themes[theme]}>
      <SectionTabUser>
        <HeaderContainer>
          <ContainerMenu>
            <HDMenu />
            <HDLogo userId={idAccount} />
            <HDNavbar />
          </ContainerMenu>
          <ContainerSwitchTheme onClick={changeTheme}>
            <SwitchCircle $theme={theme} />
          </ContainerSwitchTheme>
        </HeaderContainer>
        <ContainerLists $fondo={fondo}>
          <ContainerListFlex>
            {/* Aqui se renderizan las listas */}
            {listTab.map((list, index) => (
              <TabUserLists key={index} list={list} />
            ))}
            <AddList idTablero={idTablero} />
          </ContainerListFlex>
        </ContainerLists>
      </SectionTabUser>
    </ThemeProvider>
  );
};

export default TabUser;
