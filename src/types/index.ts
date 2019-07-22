export interface gitHubRepositoriesState {
  incomplete_results: boolean;
  items:
    | {
        id: number;
        name: string;
        owner: { login: string };
        watchers_count: number;
        language: string;
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
