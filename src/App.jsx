import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { AvatarProvider } from "./context/AvatarContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
     <AvatarProvider>
       <ThemeBtn  />
      <Card  />
     </AvatarProvider>
    </ThemeProvider>
  );
}

export default App;
