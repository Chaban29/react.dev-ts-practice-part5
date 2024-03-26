import { FC, useState } from 'react';
import { List } from './List';
import { SearchBar } from './SearchBar';
import { filterItems } from './data';
import { foods } from './foods';

export const FilterList: FC = () => {
  const [query, setQuery] = useState<string>('');
  const results = filterItems(query, foods);
  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <hr />
      <br />
      <List items={results} />
    </>
  );
};
