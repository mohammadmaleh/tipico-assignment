import * as React from "react";
import { gitHubRepositoriesState } from "../../types";
import { Pagination, Table } from "semantic-ui-react";
const { HeaderCell, Cell, Body, Row, Header, Footer } = Table;
interface ISearchResultsProps {
  gitHubRepositories: gitHubRepositoriesState;
  handleChangePage: (
    event: React.MouseEvent<HTMLAnchorElement>,
    data: any
  ) => void;
  activePage: number;
}

const SearchResults: React.FunctionComponent<ISearchResultsProps> = props => {
  const { gitHubRepositories, handleChangePage, activePage } = props;
  const totalPages =
    Math.floor(gitHubRepositories.total_count / 10) > 100
      ? 100
      : Math.floor(gitHubRepositories.total_count / 10);
  const renderTableRows = () => {
    if (gitHubRepositories && gitHubRepositories.items)
      return gitHubRepositories.items.map(item => (
        <Row key={item.id}>
          <Cell>{item.name}</Cell>
          <Cell>{item.language}</Cell>
          <Cell>{item.owner.login}</Cell>
          <Cell>{item.watchers_count}</Cell>
        </Row>
      ));
    else return null;
  };

  return (
    <div>
      <Table celled>
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
  );
};

export default SearchResults;
