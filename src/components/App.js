import React, { useContext } from "react";
import { UserProvider } from "../context/user";
import { ThemeContext } from "../context/theme";
import Header from "./Header";
import Profile from "./Profile";


function App() {
  const { theme } = useContext(ThemeContext);
  // const [theme, setTheme] = useState("dark");
  // const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
        {/* Wrapping components that will need the access to data in the provider */}
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
