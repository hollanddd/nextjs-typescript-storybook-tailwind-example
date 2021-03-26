import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

export const withUser = () => {
  const [user, setUser] = useState(null);
  const [err, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => { setUser(user) })
      .catch(err => {
        setError(err);
        router.push('/profile');
      })
  }, [user, err]);
  return [user, err];
};

