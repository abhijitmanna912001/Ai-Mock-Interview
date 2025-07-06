import { Route, BrowserRouter as Router, Routes } from "react-router";
import Generate from "./components/generate";
import AuthLayout from "./layouts/auth-layout";
import MainLayout from "./layouts/main-layout";
import ProtectedRoutes from "./layouts/protected-routes";
import PublicLayout from "./layouts/public-layout";
import CreateEditPage from "./routes/create-edit-page";
import Dashboard from "./routes/dashboard";
import Home from "./routes/home";
import MockLoadPage from "./routes/mock-load-page";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import MockInterviewPage from "./routes/mock-interview-page";

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
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
