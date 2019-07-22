import * as React from "react";
import { Input, Button } from "semantic-ui-react";
interface ISearchFormProps {
  onChangeSearchInput?: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onSearchButtonClicked?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}
const styles = {
  container: {
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  searchInput: {
    margin: 10
  },
  submitButton: {
    margin: 10
  }
};
const SearchForm: React.FunctionComponent<ISearchFormProps> = props => {
  const { onChangeSearchInput, onSearchButtonClicked } = props;
  return (
    <div data-test="component-search-form" style={styles.container}>
      <Input
        onChange={onChangeSearchInput}
        style={styles.searchInput}
        data-test="search-input"
      />
      <Button
        onClick={onSearchButtonClicked}
        style={styles.submitButton}
        data-test="submit-button"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
