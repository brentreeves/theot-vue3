import http from "../http-common";

class RatiosDataService {
  getAll() {
    return http.get("/ratios");
  }

  get(id) {
    return http.get(`/ratios/${id}`);
  }

  findByTitle(findme) {
    return http.get(`/ratios?book=${findme}`);
  }
}

export default new RatiosDataService();
