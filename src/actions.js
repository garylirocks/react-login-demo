import C from './constants';

const p = (name) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(name.toLowerCase() == 'gary') {
      resolve({
        id: 1,
        username: name,
      });
    } else {
      reject(new Error('wrong name'));
    }
  }, 2000)
});

export const login = (name) => ({
  type: C.LOGIN,
  payload: p(name),
});

export const logout = () => ({
  type: C.LOGOUT,
});
