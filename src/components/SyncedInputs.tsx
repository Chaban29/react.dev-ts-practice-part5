import { ChangeEvent, FC, Fragment, useState } from 'react';

type TypeSyncedInputs = string;

export const SyncedInputs: FC = () => {
  const [inputsValue, setInputsValue] = useState<TypeSyncedInputs>('');

  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputsValue(event.target.value);
  };

  return (
    <Fragment>
      <label>
        Second Input{' '}
        <input value={inputsValue} type='text' onChange={handleInputChanged} />
      </label>
      <label>
        First Input:{' '}
        <input value={inputsValue} type='text' onChange={handleInputChanged} />
      </label>
    </Fragment>
  );
};
