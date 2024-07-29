import { styledAddLists } from "../../assets/styledComponents/TabUser/StyledAddList";
import { styledAgregarTablero } from "../../assets/styledComponents/AgregarTablero/StyledAgregarTablero";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import Inputs from "../../components/Inputs/Inputs";
import { apiFetch } from "../../JS/Fetch/api";

const AddList = ({ idTablero }) => {
  const { ContainerButtonAddList, ButtonAddList, FormAddList } = styledAddLists;
  const { ContainerButtons, ButtonAgregar, ButtonCancelar } =
    styledAgregarTablero;
  const { addList } = apiFetch;

  const [showAddList, setShowAddList] = useState(false);
  const [nameList, setNameList] = useState("");

  const agregarLista = async (e) => {
    e.preventDefault();
    try {
      await addList(nameList, idTablero);
      if (addList) {
        setShowAddList(!showAddList);
        setNameList("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ContainerButtonAddList>
      <ButtonAddList onClick={() => setShowAddList(!showAddList)}>
        <IoAddOutline />
        Agregar Lista
      </ButtonAddList>
      {showAddList && (
        <FormAddList onSubmit={agregarLista}>
          <Inputs
            textLabel='Nombre de la lista'
            textPlaceholder=''
            tipo='text'
            idForm='list'
            clase=''
            claseLabel=''
            valor={nameList}
            actualizarValor={setNameList}
          />
          <ContainerButtons>
            <ButtonAgregar type='submit'>Agregar</ButtonAgregar>
            <ButtonCancelar
              type='button'
              onClick={() => setShowAddList(!showAddList)}
            >
              Cancelar
            </ButtonCancelar>
          </ContainerButtons>
        </FormAddList>
      )}
    </ContainerButtonAddList>
  );
};

export default AddList;
