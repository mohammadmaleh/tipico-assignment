//developer.github.com/v3/search/
import axios from "axios";
export const searchGithubAPI = axios.get(
  "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc"
);
