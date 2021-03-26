import { withUser } from '../hooks/';
import { FC } from 'react';

const Protected: FC<{}> = ({}) => {
  const [user] = withUser();
  if (!user) return null;
  return (
    <>
      <main className="container mx-auto">
        <h1 className="text-lg">Protected for: {user.username}</h1>
      </main>
    </>
  );
};

export default Protected;
