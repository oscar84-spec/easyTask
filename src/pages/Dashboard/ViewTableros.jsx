import { styledViewTab } from "../../assets/styledComponents/Tableros/StyledViewTab";
import { apiFetch } from "../../JS/Fetch/api";
import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const ViewTableros = ({ data }) => {
  const { ContainerViewTab, TabItem, TabOverlay, TabIcon } = styledViewTab;
  const { getTableros, deleteTabs } = apiFetch;
  const { id } = data;
  const [tabs, setTabs] = useState([]);

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

  return (
    <ContainerViewTab>
      {tabs.length === 0 ? (
        <span>No hay nada</span>
      ) : (
        tabs.map(({ nombreTab, fondo, id }, index) => (
          <TabItem key={index} $fondo={fondo}>
            <TabOverlay>
              <TabIcon onClick={() => eliminarTab(id)}>
                <IoIosCloseCircle />
              </TabIcon>{" "}
              {nombreTab}
            </TabOverlay>
          </TabItem>
        ))
      )}
    </ContainerViewTab>
  );
};

export default ViewTableros;
