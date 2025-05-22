import { axiosInstance, URL } from "../configs";

class TechnologiesService {
  async getTechnologies() {
    const { data } = await axiosInstance.get(
      `${URL.tecnologies.index}`
    );
    return data;
  }

  async addTechnology(body) {
    const { data } = await axiosInstance.post(URL.tecnologies.index, body);
    return data;
  }

  async deleteTechnology(technologyId) {
    const { data } = await axiosInstance.delete(
      `${URL.tecnologies.index}/${technologyId}`
    );
    return data;
  }
}

export default new TechnologiesService();
