import React from "react";
import { connect } from "react-redux";
import { searchGithubAsync } from "../../redux/actions";
import { gitHubRepositoriesState, RootState } from "../../types";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";
import { Message } from "semantic-ui-react";
const { Header } = Message;
export interface ISearchRepositoriesProps {
  searchGithubAsync: Function;
  gitHubRepositories: gitHubRepositoriesState;
}

class SearchRepositories extends React.Component<ISearchRepositoriesProps> {
  state = {
    searchValue: "",
    activePage: 1
  };
  componentDidMount() {
    const { searchGithubAsync } = this.props;
  }
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
    const { activePage, searchValue } = this.state;
    return (
      <div>
        <SearchForm
          onChangeSearchInput={this.handleInputChange}
          onSearchButtonClicked={this.onSearchButtonClicked}
        />

        {!gitHubRepositories.items && (
          <Message>
            <Header>Welcome to our github search service!</Header>
            <p>start by writing a repository name to search</p>
          </Message>
        )}
        {gitHubRepositories.items && gitHubRepositories.items.length === 0 && (
          <Message>
            <Header>Ops!!</Header>
            <p>your search had no results!!</p>
          </Message>
        )}
        {gitHubRepositories.items && gitHubRepositories.items.length > 0 && (
          <SearchResults
            gitHubRepositories={gitHubRepositories}
            handleChangePage={this.handleChangePage}
            activePage={activePage}
          />
        )}
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
