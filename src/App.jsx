import "./App.css";
import RouterConfig from "./Router/RouterConfig";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <RouterConfig />
    </AuthContextProvider>
  );
}

export default App;
