import { useEffect, useState } from "react";
import { axiosInstance, URL } from "../configs";
import { AxiosError } from "axios";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      setError(false);
      const fetchProjects = async () => {
        const { data } = await axiosInstance.get(URL.projects.index);
        setProjects(data);
        return data;
      };
      fetchProjects();
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    projects,
    error,
    loading,
  };
};
