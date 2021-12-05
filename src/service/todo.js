import Api from './api';

const getCardList = () => {
  return Api.get('/todolist.json');
};

export default { getCardList };
