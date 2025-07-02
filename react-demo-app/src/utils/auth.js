// utils/auth.js
export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
  };
  
  export const getUserFromToken = () => {
    try {
      const token = getToken();
      if (!token) return null;
  
      const base64 = token.split('.')[1];
      const decoded = JSON.parse(atob(base64));
      return decoded;
    } catch (err) {
      return null;
    }
  };
  