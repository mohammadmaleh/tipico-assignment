import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchGithubAsync } from "../../redux/actions";
import { gitHubRepositoriesState, RootState } from "../../types";
export interface ISearchRepositoriesProps {
  searchGithubAsync: Function;
  gitHubRepositories: gitHubRepositoriesState;
}

class SearchRepositories extends React.Component<ISearchRepositoriesProps> {
  componentDidMount() {
    const { searchGithubAsync } = this.props;
    searchGithubAsync();
  }

  public render() {
    console.log(this.props.gitHubRepositories);
    return <div />;
  }
}

const mapState2Props = (state: RootState) => {
  return { gitHubRepositories: state.gitHubRepositories };
};

export default connect(
  mapState2Props,
  { searchGithubAsync }
)(SearchRepositories);
