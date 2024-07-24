import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Loading from "./pages/Loading";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import Lottery from "./pages/Lottery";
import TopUsers from "./pages/TopUsers";
import History from "./pages/History";

function App() {
  const FallbackNavigate = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, [to, navigate]);
    return null;
  };

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    if (WebApp.platform !== "weba") {
      WebApp.ready();
      console.log("Running inside Telegram Web App");
    } else {
      window.location.href = "https://telegram.org";
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Loading />} />
        <Route path="/menu" element={<Layout />}>
          <Route index element={<FallbackNavigate to="lottery" />} />
          <Route path="lottery" element={<Lottery />} />
          <Route path="top-users" element={<TopUsers />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
