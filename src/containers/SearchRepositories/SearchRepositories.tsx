import React from "react";
import { connect } from "react-redux";
import { searchGithubAsync } from "../../redux/actions/searchRepositoriesActions";
import { gitHubRepositoriesState, RootState } from "../../types";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";
export interface ISearchRepositoriesProps {
  searchGithubAsync: Function;
  gitHubRepositories: gitHubRepositoriesState;
}

export class SearchRepositories extends React.Component<
  ISearchRepositoriesProps
> {
  state = {
    searchValue: "",
    activePage: 1
  };

  searchGitHub = () => {
    const { searchValue, activePage } = this.state;
    const { searchGithubAsync } = this.props;

    searchGithubAsync(searchValue, activePage);
  };
  onSearchButtonClicked = () => {
    const { searchValue } = this.state;
    if (searchValue.length > 0) this.searchGitHub();
  };
  handleChangePage = (
    e: React.SyntheticEvent<HTMLAnchorElement>,
    data: any
  ) => {
    this.setState({ activePage: data.activePage }, () => {
      this.searchGitHub();
    });
  };
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };
  public render() {
    const { gitHubRepositories } = this.props;
    const { activePage } = this.state;
    return (
      <div data-test="component-search-repositories">
        <SearchForm
          onChangeSearchInput={this.handleInputChange}
          onSearchButtonClicked={this.onSearchButtonClicked}
        />
        <SearchResults
          gitHubRepositories={gitHubRepositories}
          handleChangePage={this.handleChangePage}
          activePage={activePage}
        />
      </div>
    );
  }
}

const mapState2Props = (state: RootState) => {
  return { gitHubRepositories: state.gitHubRepositories };
};

export default connect(
  mapState2Props,
  { searchGithubAsync }
)(SearchRepositories);
