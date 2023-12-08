import { atom, useAtom } from 'jotai';

export const authAtom = atom({
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || 'user',
});

export const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);

  const login = (token: string, role: string) => {
    setAuth({ token, role });
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  };

  const logout = () => {
    setAuth({ token: null, role: 'user' });
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return { ...auth, login, logout };
};
