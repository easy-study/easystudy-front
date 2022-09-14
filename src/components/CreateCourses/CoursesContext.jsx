import {createContext} from "react";
import {apiCursos} from "../../services/api";

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {

  const create = async ({ curso, duracao, inicio, fim }) => {
    try {
      const response = await apiCursos.post("/", { curso, duracao, inicio, fim });

    } catch (error) {
      console.log(error);
      alert("Erro ao criar Curso");
    }
  }

  const list = async () => {
    try {
      const response = await apiCursos.get("/");

      return response.data
    } catch (error) {
      console.log(error);
    }
  }

  const update = async ({id, curso, duracao, inicio, fim }) => {
    try {
      const response = await apiCursos.put(`/${id}`, { curso, duracao, inicio, fim });

    } catch (error) {
      console.log(error);
      alert("Erro ao criar Curso");
    }
  }

  const remove = async ({id}) => {
    try {
      const response = await apiCursos.delete(`/${id}`);

    } catch (error) {
      console.log(error);
      alert("Erro ao criar Curso");
    }
  }

  return (
    <CoursesContext.Provider
      value={{
        create,
        list,
        update,
        remove
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
    };
