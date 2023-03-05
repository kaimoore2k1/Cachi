import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { IState } from './state';

const getters: GetterTree<IState, StateInterface> = {
  getLoginInfo: (state) => () => {
    return state.loginInfo;
  },
};

export default getters;
