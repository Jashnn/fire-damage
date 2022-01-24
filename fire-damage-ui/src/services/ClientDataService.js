import http from "../http-common";


const find = (id) => {
  return http.get("http://localhost:8081/claimdata/" + id);
};

const create = (data) => {
  return http.post("http://localhost:8081/claimdata", data);
};

const update = (data) => {
  return http.put("http://localhost:8081/claimdata", data);
};

const getTotal = (id) => {
  return http.get("http://localhost:8081/claimdata/total/" + id);
};


const TutorialService = {
  find,
  create,
  update,
  getTotal
};

export default TutorialService;