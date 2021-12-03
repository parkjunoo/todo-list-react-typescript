import axios from 'axios';

// axios 인스턴스를 생성합니다.
const instance = axios.create({
  baseURL: 'https://api.hnpwa.com',
  timeout: 1000,
});

/*
    1. 요청 인터셉터
    2개의 콜백 함수를 받습니다.
*/
instance.interceptors.request.use(
  function (config) {
    // 요청 성공 직전 호출됩니다.
    // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
    return config;
  },
  function (error) {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  },
);

/*
    2. 응답 인터셉터
    2개의 콜백 함수를 받습니다.
*/
instance.interceptors.response.use(
  function (response) {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
        .then() 으로 이어집니다.
    */
    return response;
  },

  function (error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
        .catch() 으로 이어집니다.    
    */
    return Promise.reject(error);
  },
);
