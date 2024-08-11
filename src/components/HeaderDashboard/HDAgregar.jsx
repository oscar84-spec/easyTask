import { styledHDAgregar } from "../../assets/styledComponents/HeaderDashboard/StyledHDAgregar";
import { IoAddCircle } from "react-icons/io5";
import { FaTable } from "react-icons/fa";
import { useState } from "react";
import AgregarTablero from "../AgregarTablero/AgregarTablero";

const HDAgregar = ({ data, getStateCurrent }) => {
  const { IconAgregar, ContainerMenu, ButtonAdd, SpanAdd, SpanDescription } =
    styledHDAgregar;

  const [showMenu, setShowMenu] = useState(false);
  const [showAgregar, setShowAgregar] = useState(false);

  const mostar = () => {
    setShowMenu(!showMenu);
    setShowAgregar(!showAgregar);
  };
  return (
    <>
      <IconAgregar onClick={() => setShowMenu(!showMenu)}>
        <IoAddCircle />
      </IconAgregar>
      {showMenu && (
        <ContainerMenu onClick={mostar}>
          <ButtonAdd>
            <SpanAdd>
              <i>
                <FaTable />
              </i>{" "}
              Crear Tablero
            </SpanAdd>
            <SpanDescription>
              Un tablero es un conjunto de tarjetas ordenadas en listas. Úsalo
              para gestionar proyectos, realizar un seguimiento de la
              información u organizar cualquier actividad.
            </SpanDescription>
          </ButtonAdd>
        </ContainerMenu>
      )}
      {showAgregar && (
        <AgregarTablero
          valor={showAgregar}
          actualizarValor={setShowAgregar}
          data={data}
          getStateCurrent={getStateCurrent}
        />
      )}
    </>
  );
};

export default HDAgregar;
