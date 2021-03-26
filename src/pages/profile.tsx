import { FC, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Profile: FC = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log('User: ', user);
      setUser(user);
    })
    .catch(() => setUser(null));
  }, []);
  return (
    <>
      <main className="container mx-auto">
        <div className="mx-8 mt-2">
	  { user && <h1>Welcome, {user.username}</h1> }
	  <AmplifySignOut />
        </div>
      </main>
    </>
  );
};

export default withAuthenticator(Profile);
