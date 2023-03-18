import logo from "./logo.svg";
import "./App.css";
import Layer from "./componetns/Layer";
import { createContext } from "react";
import ContextLayer from "./componetns/ContextLayer";

export const TestContext = createContext("Test context");

function App() {
  const value = {
    val1: "val1",
    val2: "val2",
  };

  return (
    <TestContext.Provider value={value}>
      <Layer level={1}>
        <Layer level={2}>
          <Layer level={3}>
            <ContextLayer level={4} />
          </Layer>
        </Layer>
      </Layer>
    </TestContext.Provider>
  );
}

export default App;
