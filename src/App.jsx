import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn } from "./pages/auth";
import { ProtectedRoutes } from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";
import { useStateContext } from "./context/ContextProvider";

function App() {
  const { token } = useStateContext();

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes token={token} />}>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>
      <Route path="login" element={<PublicRoute token={token} />}>
        <Route path="/login" element={<SignIn />} />
      </Route>

      {/*  <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
  );
}

export default App;
