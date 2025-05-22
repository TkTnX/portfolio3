import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useTechnologiesStore } from "../stores/technologiesStore";
import tecnologiesStore from "../services/tecnologies.service";

export const useTechnologies = () => {
  const { technologies, setTechnologies } = useTechnologiesStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      setError(false);
      const fetchTechnologies = async () => {
        const data = await tecnologiesStore.getTechnologies();
        setTechnologies(data);
        return data;
      };
      fetchTechnologies();
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  async function getTechnologies() {
    const data = await tecnologiesStore.getTechnologies();
    setTechnologies(data);
    return data;
  }

  return {
    technologies,
    error,
    loading,
    getTechnologies,
  };
};
