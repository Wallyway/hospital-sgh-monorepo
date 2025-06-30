import { BrowserRouter as Router } from "react-router-dom";
// contexts
import { AuthProvider } from "@contexts/AuthContext";
// components
import { AppRouter } from "@components/routing/AppRouter";

// styles
import "@styles/main.scss";


function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRouter />
      </Router>
    </AuthProvider>
  );
}

export default App;
