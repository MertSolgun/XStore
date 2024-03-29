import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <AppRouter/>
      </AuthProvider>

    </div>
  );
}

export default App;