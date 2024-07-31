import { styledDashboard } from "../../assets/styledComponents/Dashboard/StyledDashboard";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import { useParams } from "react-router-dom";
import Tableros from "./Tableros";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Themes from "../../JS/Themes/themes";
import { themeUser } from "../../JS/Themes/themeUser";

const Dashboard = ({ accountId, tabId, obtenerTema }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const accId = id;
  const [theme, setTheme] = useState("light");
  const { getThemeUser } = themeUser;

  const { SectionContainer } = styledDashboard;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId === "" || userId === null) {
      navigate("/");
    }

    const getUser = async (id) => {
      try {
        const response = await fetch(
          `https://apieasytask.vercel.app/users/${id}`
        );
        const result = await response.json();
        setData(result);
        accountId(accId);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUser(userId);
  }, []);

  useEffect(() => {
    const getTheme = async () => {
      const userId = localStorage.getItem("userId");
      const data = await getThemeUser(userId);
      const themeUser = data.theme === theme ? "light" : "dark";
      setTheme(themeUser);
    };
    getTheme();
  }, []);

  useEffect(() => {
    obtenerTema(theme);
  }, [theme]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <ThemeProvider theme={Themes[theme]}>
      <SectionContainer>
        <HeaderDashboard
          userId={id}
          data={data}
          theme={theme}
          setTheme={setTheme}
        />
        <Tableros data={data} userId={id} tabId={tabId} theme={theme} />
      </SectionContainer>
    </ThemeProvider>
  );
};

export default Dashboard;
