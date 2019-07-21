export interface gitHubRepositoriesState {
  incomplete_results: boolean;
  items: {}[];
  total_count: number;
}
export interface gitHubRepositoriesAction {
  type: string;
  payload: Object;
}

export interface RootState {
  gitHubRepositories: gitHubRepositoriesState;
}
