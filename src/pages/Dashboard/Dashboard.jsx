import { styledDashboard } from "../../assets/styledComponents/Dashboard/StyledDashboard";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const { SectionContainer } = styledDashboard;
  return (
    <SectionContainer>
      <HeaderDashboard userId={id} />
    </SectionContainer>
  );
};

export default Dashboard;
