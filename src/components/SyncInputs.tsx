import { ChangeEvent, FC, Fragment, useState } from 'react';

interface IUser {
  firstName: string;
  lastName: string;
}

export const SyncInputs: FC = () => {
  const [user, setUser] = useState<IUser>({ firstName: '', lastName: '' });

  const fullName = `${user.firstName} ${user.lastName}`;

  const handleChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <label htmlFor='firstName'>
        FirstName:{' '}
        <input
          id='firstName'
          name='firstName'
          type='text'
          onChange={handleChangeInputs}
        />
      </label>
      <label htmlFor='lastName'>
        LastName:{' '}
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={handleChangeInputs}
        />
      </label>
      <h3>FullName: {fullName}</h3>
    </Fragment>
  );
};
