import * as React from "react";
import { gitHubRepositoriesState } from "../../types";
import { Pagination, Table, Message } from "semantic-ui-react";
const { HeaderCell, Cell, Body, Row, Header } = Table;
interface ISearchResultsProps {
  gitHubRepositories: gitHubRepositoriesState;
  handleChangePage: (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: any
  ) => void;
  activePage: number;
}
const styles = {
  container: {
    height: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: "30px "
  },
  tableContainer: {
    width: "100%"
  },
  message: {
    width: "100%",
    maxHeight: 100
  }
};
const SearchResults: React.FunctionComponent<ISearchResultsProps> = props => {
  const { gitHubRepositories, handleChangePage, activePage } = props;
  const totalPages =
    Math.floor(gitHubRepositories.total_count / 10) > 100
      ? 100
      : Math.floor(gitHubRepositories.total_count / 10);
  const renderTableRows = () => {
    if (gitHubRepositories && gitHubRepositories.items)
      return gitHubRepositories.items.map(item => (
        <Row key={item.id} data-test="results-table-row">
          <Cell>{item.name}</Cell>
          <Cell>{item.language}</Cell>
          <Cell>{item.owner.login}</Cell>
          <Cell>{item.watchers_count}</Cell>
        </Row>
      ));
    else return null;
  };

  return (
    <div data-test="component-search-results" style={styles.container}>
      {!gitHubRepositories.items && (
        <Message style={styles.message} data-test="welcome-message">
          <Message.Header>Welcome to our github search service!</Message.Header>
          <p>start by writing a repository name to search</p>
        </Message>
      )}
      {gitHubRepositories.items && gitHubRepositories.items.length === 0 && (
        <Message style={styles.message} data-test="no-results-message">
          <Message.Header>Ops!!</Message.Header>
          <p>your search had no results!!</p>
        </Message>
      )}
      {gitHubRepositories.items && gitHubRepositories.items.length > 0 && (
        <div style={styles.tableContainer}>
          <Table celled data-test="results-table">
            <Header>
              <Row>
                <HeaderCell>Repository Name</HeaderCell>
                <HeaderCell>Language</HeaderCell>
                <HeaderCell>Owner</HeaderCell>
                <HeaderCell>star</HeaderCell>
              </Row>
            </Header>
            <Body>{renderTableRows()}</Body>
          </Table>
          <Pagination
            onPageChange={handleChangePage}
            defaultActivePage={activePage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
