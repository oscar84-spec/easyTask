import { styledDashboard } from "../../assets/styledComponents/Dashboard/StyledDashboard";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import { useParams } from "react-router-dom";
import Tableros from "./Tableros";
import AgregarTablero from "../../components/AgregarTablero/AgregarTablero";

const Dashboard = () => {
  const { id } = useParams();
  const { SectionContainer } = styledDashboard;

  return (
    <SectionContainer>
      <HeaderDashboard userId={id} />
      <Tableros />
    </SectionContainer>
  );
};

export default Dashboard;
