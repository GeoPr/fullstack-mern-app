import { useState } from 'react';
import { useContextValue } from '../context/context';
import Swal from 'sweetalert2';

const showErrorAlert = (message: string) => {
  Swal.fire({
    title: message,
    text: '',
    timer: 3000,
    icon: 'error',
  });
};

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { setUserInfo } = useContextValue();

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      Swal.fire({
        title: data.message,
        text: '',
        timer: 3000,
        icon: data.type,
      });
    } catch (e) {
      setError(e.message);
      showErrorAlert(e.message);
    }

    setLoading(false);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      const newUserInfo = {
        token: data.token,
        userId: data.userId,
      };

      localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
      setUserInfo(newUserInfo);

      Swal.fire({
        title: data.message,
        text: '',
        timer: 3000,
        icon: data.type,
      });
    } catch (e) {
      setError(e.message);
      showErrorAlert(e.message);
    }

    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo({ token: null, userId: null });
  };

  return { error, loading, signUp, login, logout };
};
