import { axiosInstance, URL } from "../configs";

class ProjectsService {
  async getProjects() {
    const { data } = await axiosInstance.get(
      `${URL.projects.index}?sortBy=-id`
    );
    return data;
  }
  async getProject(projectId) {
    const { data } = await axiosInstance.get(
      `${URL.projects.index}/${projectId}`
    );
    return data;
  }

  async addProject(body) {
    const { data } = await axiosInstance.post(URL.projects.index, body);
    return data;
  }

  async deleteProject(projectId) {
    const { data } = await axiosInstance.delete(
      `${URL.projects.index}/${projectId}`
    );
    return data;
  }
}

export default new ProjectsService();
