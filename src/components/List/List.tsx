import { FC } from 'react';
import { IFoods } from './foods';

interface IListProps {
  items: IFoods[];
}

export const List: FC<IListProps> = ({ items }: IListProps) => {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
