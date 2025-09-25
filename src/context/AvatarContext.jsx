import { createContext, useState, useEffect } from "react";

// 1️⃣ Create context
export const AvatarContext = createContext({
  avatar: "",
  username: "",
});

// 2️⃣ Create provider component
export function AvatarProvider({ children }) {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("mohit-semwal"); // GitHub username

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setAvatar(data.avatar_url);
      })
      .catch(err => console.error(err));
  }, [username]);

  return (
    <AvatarContext.Provider value={{ avatar, username }}>
      {children}
    </AvatarContext.Provider>
  );
}

// 3️⃣ Optional custom hook for easier consumption
export function useAvatar() {
  return React.useContext(AvatarContext);
}
