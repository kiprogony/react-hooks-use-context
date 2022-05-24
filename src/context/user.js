import React, { useState } from "react";


const UserContext = React.createContext();

// This is a Provider  Component 
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  //   name: "Duane",
  //   interests: ["coding", "Biking", "Words ending in 'ing'"],
  // };
  
  return(
     <UserContext.Provider value={{ user, setUser }}>
       {children}
     </UserContext.Provider>
  );
}

export { UserContext, UserProvider };