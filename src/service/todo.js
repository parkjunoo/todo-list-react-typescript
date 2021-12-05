import Api from './api';

const getCardList = (process) => {
  return Api.get(`/${process}list.json`);
};

export default { getCardList };
