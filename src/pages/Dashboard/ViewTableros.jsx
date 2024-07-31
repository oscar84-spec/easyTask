import { styledViewTab } from "../../assets/styledComponents/Tableros/StyledViewTab";
import { apiFetch } from "../../JS/Fetch/api";
import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ViewTableros = ({ data, userId, tabId, theme }) => {
  const {
    ContainerViewTab,
    TabItem,
    TabOverlay,
    TabIcon,
    Container,
    ContainerNotTab,
    SpanText,
    NotTabImg,
  } = styledViewTab;
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

  if (!tabs) {
    return <div>No data available</div>;
  }

  return (
    <ContainerViewTab>
      {tabs.length === 0 ? (
        <ContainerNotTab>
          <SpanText>
            Parece que aún no tienes ningún tablero agregado, haz click en el
            icono de arriba para agregar uno
          </SpanText>
          <NotTabImg $theme={theme} />
        </ContainerNotTab>
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
