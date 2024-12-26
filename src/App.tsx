import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ShowDetailPage from "./pages/ShowDetailPage/ShowDetailPage";
import { ROUTES } from "./shared/constant/routes";

function App() {
  return (
    <div className="p-4 sm:p-16">
      <Routes>
        <Route path={ROUTES.HOME} element={<Dashboard />} />
        <Route path={ROUTES.SHOW_DETAIL(":id")} element={<ShowDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
