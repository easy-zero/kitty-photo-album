import fetchAPI from "./helper";

const BASE_URL = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com";

const api = {
  contents_list: (nodeId?: string) =>
    fetchAPI(`${BASE_URL}/dev${nodeId ? `/${nodeId}` : ""}`),
};

export default api;
