import axios from "axios";
// import { message } from "antd";
// import { PUBLIC_ROUTES } from "../routes/routes-list";

const API = axios.create({
  baseURL: "http://192.168.80.229:8082/",
  timeout: 90000,
});

// const loadingMessageKey = 'postLoadingKey';

API.interceptors.request.use((request) => {
  if(request.method === "post" && window.location.pathname !== '/login') {
    // message.loading({content:'Action in progress..',key: loadingMessageKey})
  }

  return request;
});

const handleLogout = () => {
//   API.post('/logout', {}).finally(() => {
    localStorage.removeItem('roles');
    // userContext?.resetUser().then(r => console.log(r));
    window.location.assign('/login');
//   });
};

API.interceptors.response.use(
  (response) => {
    // message.destroy(loadingMessageKey);
    if (response.config.method === "post") {
    //   message.success("ოპერაცია წარმატებით შესრულდა", 2)
    };

    return response;
  },
  (error) => {
    if (error.response) {

    //   let publicRoutePathesArr = PUBLIC_ROUTES.map((i)=> i.path)

      switch (error.response.status) {
        case 401:
        //   if(!publicRoutePathesArr.includes(window.location.pathname) && window.location.pathname !== '/'){
            // message.error("401 Unauthorized User");
            handleLogout()
        //   }
          break;
        case 403:
        //   message.error("403 Not Allowed");
          break;
        case 404:
        default: {
          // message.error(error.response.data.message || "Error Ocured");
        }
      }
    }
    return Promise.reject(error);
  }
);

export default API;
