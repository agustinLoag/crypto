import { useState, createContext, useContext } from "react";

export const TodoContext = createContext();

const { Provider } = TodoContext;

export const FinalTodo = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("");

  const handlePage = (page) => {
    if (page) {
      setCurrentPage(page);
    }
  };
  const getTodoValues = () => console.log("Hola desde el Context");

  const valuesProvider = {
    getTodoValues,
    currentPage,
    handlePage,
  };

  return <Provider value={valuesProvider}>{children}</Provider>;
};
