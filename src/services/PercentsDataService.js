import http from "../http-common";

class PercentsDataService {
  getAll() {
    return http.get("/percents");
  }

  get(id) {
    return http.get(`/percents/${id}`);
  }

  findByTitle(findme) {
    return http.get(`/percents?book=${findme}`);
  }
}

export default new PercentsDataService();
