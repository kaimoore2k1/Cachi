import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { IState } from './state';

const actions: ActionTree<IState, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
