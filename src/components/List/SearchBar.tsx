import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';

interface ISearchBarProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const SearchBar: FC<ISearchBarProps> = ({
  query,
  setQuery,
}: ISearchBarProps) => {
  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <label htmlFor='search'>
      Search:{' '}
      <input
        id='search'
        name='search'
        type='text'
        value={query}
        onChange={(event) => handleQueryChange(event)}
      />
    </label>
  );
};
