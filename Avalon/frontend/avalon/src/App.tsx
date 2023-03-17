import "./App.css";
import SocketProvider from "./providers/SocketProvider";
import UserProvider from "./providers/UserProvider";
import AppRouter from "./router";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
