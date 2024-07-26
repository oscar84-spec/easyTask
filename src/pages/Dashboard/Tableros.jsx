import { styledTableros } from "../../assets/styledComponents/Tableros/Tableros";
import TabBienvenida from "./TabBienvenida";
import TableroSidebar from "./TableroSidebar";
import ViewTableros from "./ViewTableros";

const Tableros = () => {
  const { TableroContainer, ContainerSidebar, ContainerTab } = styledTableros;
  return (
    <TableroContainer>
      <ContainerSidebar>
        <TableroSidebar />
      </ContainerSidebar>
      <ContainerTab>
        <TabBienvenida />
        <hr />
        <ViewTableros />
      </ContainerTab>
    </TableroContainer>
  );
};

export default Tableros;
