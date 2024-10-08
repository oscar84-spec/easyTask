import { styledTableros } from "../../assets/styledComponents/Tableros/Tableros";
import TabBienvenida from "./TabBienvenida";
import TableroSidebar from "./TableroSidebar";
import ViewTableros from "./ViewTableros";

const Tableros = ({ data, userId, tabId, theme, updated }) => {
  const { TableroContainer, ContainerSidebar, ContainerTab } = styledTableros;
  return (
    <TableroContainer>
      <ContainerSidebar>
        <TableroSidebar />
      </ContainerSidebar>
      <ContainerTab>
        <TabBienvenida data={data} />
        <hr />
        <ViewTableros
          data={data}
          userId={userId}
          tabId={tabId}
          theme={theme}
          updated={updated}
        />
      </ContainerTab>
    </TableroContainer>
  );
};

export default Tableros;
