import "./App.css";
import SocketProvider from "./providers/sockets/SocketProvider";
import AppRouter from "./router";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </div>
  );
}

export default App;
