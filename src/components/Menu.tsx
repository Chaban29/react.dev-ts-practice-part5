import { ChangeEvent, FC, useState } from 'react';

interface IMenu {
  id: number;
  title: string;
}

const initialItems: IMenu[] = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export const Menu: FC = () => {
  const [items, setItems] = useState<IMenu[]>(initialItems);
  const [selectedId, setSelectedId] = useState<number>(0);

  const selectedItem = items.find((item: IMenu) => item.id === selectedId);

  const handleClick = (itemId: number) => {
    setSelectedId(itemId);
  };

  const handleChange = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, title: event.target.value };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type='text'
              value={item.title}
              onChange={(event) => handleChange(item.id, event)}
            />
            <button type='button' onClick={() => handleClick(item.id)}>
              Choose
            </button>
          </li>
        ))}
        <b>You picked: {selectedItem ? selectedItem.title : ''}</b>
      </ul>
    </div>
  );
};
