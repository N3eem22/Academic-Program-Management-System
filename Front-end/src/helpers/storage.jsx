export const setAuthUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };
  
  export const getAuthUser = () => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    
    }
  };
  
// export const setAuthUser = (data) => {
//   localStorage.setItem("user", JSON.stringify(data));
// };
  
// export const getAuthUser = () => {
//   const user = localStorage.getItem("user");
//   return user ? JSON.parse(user) : null;
// };

export const removeAuthUser = () => {
  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
  }
  if (localStorage.getItem("Token")) {
    localStorage.removeItem("Token");
  }
};
