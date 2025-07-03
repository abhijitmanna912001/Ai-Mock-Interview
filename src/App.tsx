import { Route, BrowserRouter as Router, Routes } from "react-router";
import AuthLayout from "./layouts/auth-layout";
import PublicLayout from "./layouts/public-layout";
import Home from "./routes/home";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import ProtectedRoutes from "./layouts/protected-routes";
import MainLayout from "./layouts/main-layout";
import Generate from "./components/generate";
import Dashboard from "./routes/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
