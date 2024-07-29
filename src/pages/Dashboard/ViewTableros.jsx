import { styledViewTab } from "../../assets/styledComponents/Tableros/StyledViewTab";
import { apiFetch } from "../../JS/Fetch/api";
import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ViewTableros = ({ data, userId, tabId }) => {
  const { ContainerViewTab, TabItem, TabOverlay, TabIcon, Container } =
    styledViewTab;
  const { getTableros, deleteTabs } = apiFetch;
  const { id } = data;
  const [tabs, setTabs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const showTab = async (userid) => {
      try {
        const dataTabs = await getTableros(userid);
        setTabs(dataTabs);
      } catch (error) {
        console.error(error);
      }
    };
    showTab(id);
  }, [tabs]);

  const eliminarTab = async (tabId) => {
    await deleteTabs(tabId);
    const updateTab = tabs.filter((tab) => tab.id !== tabId);
    setTabs(updateTab);
  };

  const redirigirTab = (idUser, nameTab, id) => {
    navigate(`/dashboard/${idUser}/tableros/${nameTab}`);
    tabId(id);
  };

  return (
    <ContainerViewTab>
      {tabs.length === 0 ? (
        <span>No hay nada</span>
      ) : (
        tabs.map(({ nombreTab, fondo, id }, index) => (
          <Container key={index}>
            <TabIcon onClick={() => eliminarTab(id)}>
              <IoIosCloseCircle />
            </TabIcon>
            <TabItem
              $fondo={fondo}
              onClick={() => redirigirTab(userId, nombreTab, id)}
            >
              <TabOverlay>{nombreTab}</TabOverlay>
            </TabItem>
          </Container>
        ))
      )}
    </ContainerViewTab>
  );
};

export default ViewTableros;
