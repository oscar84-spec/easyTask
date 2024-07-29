import { styledHDash } from "../../assets/styledComponents/HeaderDashboard/StyledHDash";
import { styledTabUser } from "../../assets/styledComponents/TabUser/StyledTabUser";
import HDLogo from "../../components/HeaderDashboard/HDLogo";
import HDMenu from "../../components/HeaderDashboard/HDMenu";
import HDNavbar from "../../components/HeaderDashboard/HDNavbar";
import AddList from "./AddList";
import { useState, useEffect } from "react";
import TabUserLists from "./TabUserLists";
import { apiFetch } from "../../JS/Fetch/api";

const TabUser = ({ idAccount, idTablero }) => {
  const { HeaderContainer, ContainerMenu } = styledHDash;
  const { SectionTabUser, ContainerLists, ContainerListFlex } = styledTabUser;
  const { showList } = apiFetch;
  const [listTab, setListTab] = useState([]);

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

  return (
    <SectionTabUser>
      <HeaderContainer>
        <ContainerMenu>
          <HDMenu />
          <HDLogo userId={idAccount} />
          <HDNavbar />
        </ContainerMenu>
      </HeaderContainer>
      <ContainerLists>
        <ContainerListFlex>
          {/* Aqui se renderizan las listas */}
          {listTab.map((list, index) => (
            <TabUserLists key={index} list={list} />
          ))}
          <AddList idTablero={idTablero} />
        </ContainerListFlex>
      </ContainerLists>
    </SectionTabUser>
  );
};

export default TabUser;
