import { styledDashboard } from "../../assets/styledComponents/Dashboard/StyledDashboard";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import { useParams } from "react-router-dom";
import Tableros from "./Tableros";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const { id } = useParams();
  const { SectionContainer } = styledDashboard;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const getUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUser(userId);
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <SectionContainer>
      <HeaderDashboard userId={id} data={data} />
      <Tableros data={data} />
    </SectionContainer>
  );
};

export default Dashboard;
