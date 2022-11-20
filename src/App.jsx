import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['"Nunito Sans"', "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:cca2" element={<Details />} />
          <Route element={<Home />} />
        </Routes>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
