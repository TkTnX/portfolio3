import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import projectsService from "../services/projects.service";
import { useProjectsStore } from "../stores/projectsStore";

export const useProjects = () => {
  const { projects, setProjects } = useProjectsStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      setError(false);
      const fetchProjects = async () => {
        const data = await projectsService.getProjects();
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

  async function getProjects() {
    const data = await projectsService.getProjects();
    setProjects(data);
    return data;
  }

  return {
    projects,
    error,
    loading,
    getProjects,
  };
};
