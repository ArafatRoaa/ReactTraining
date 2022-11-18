import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Details from './pages/Details';
import Home from './pages/Home';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '"Nunito Sans"',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:cca2" element={<Details />} />
        <Route element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
