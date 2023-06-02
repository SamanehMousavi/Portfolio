import { createContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const projects = [
    {
      id: 1,
      name: "Luigi",
      imageSrc: "/assets/Luigi-project.png",
      description: "It's a remake inspired by Nyancat and Luigi games ...",
      projectURL: "https://gleaming-gaufre-71edb3.netlify.app/",
    },
    {
      id: 2,
      name: "My Blog ",
      imageSrc: "/assets/Myblog.jpg",
      description: "It is under construction...",
    },
  ];

  return (
    <AppContext.Provider value={{ projects }}>{children}</AppContext.Provider>
  );
};

//projects[0].name
