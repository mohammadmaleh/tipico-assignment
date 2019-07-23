export interface gitHubRepositoriesState {
  incomplete_results: boolean;
  items:
    | {
        id: number;
        full_name: string;
        owner: { login: string; html_url: string };
        watchers_count: number;
        language: string;
        html_url: string;
      }[]
    | undefined;
  total_count: number;
}
export interface gitHubRepositoriesAction {
  type: string;
  payload?: Object;
}

export interface RootState {
  gitHubRepositories: gitHubRepositoriesState;
}
