import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // useState type assertion when you know the properties can not be null after updation
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'Ropo',
      email: 'ropo@example.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
      {/* type assertion does not need a check access the object properties */}
      {/* <div>User name is {user.name}</div>
      <div>User email is {user.email}</div> */}
    </div>
  )
}