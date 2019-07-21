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

const SearchForm: React.FunctionComponent<ISearchFormProps> = props => {
  const { onChangeSearchInput, onSearchButtonClicked } = props;
  return (
    <div>
      <Input onChange={onChangeSearchInput} />
      <Button onClick={onSearchButtonClicked}>Search</Button>
    </div>
  );
};

export default SearchForm;
