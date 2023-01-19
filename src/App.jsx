import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import { SignIn } from "./pages/auth";

import { useStateContext } from "./context/ContextProvider";

function App() {
  const { token } = useStateContext();

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route
        path="/dashboard"
        element={<Navigate to="/dashboard/home" replace />}
      />

      <Route path="/login" element={<SignIn />} />

      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
