//developer.github.com/v3/search/
import axios from "axios";
export const searchGithubAPI = (searchValue: string, activePage: number = 1) =>
  axios.get(
    `https://api.github.com/search/repositories?q=${searchValue}+in:name&type=Repositories&sort=stars&order=desc&page=${activePage}&per_page=10`
  );
