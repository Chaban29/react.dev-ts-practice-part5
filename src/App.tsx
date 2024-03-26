import { FC, Fragment } from 'react';
import './App.css';
import { FilterList } from './components/List/FilterList';

export const App: FC = () => {
  return (
    <Fragment>
      <FilterList />
    </Fragment>
  );
};
