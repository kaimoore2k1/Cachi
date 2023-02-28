export function someGetter(/* state */) {
  getLoginInfo: (state) => () => {
    return state.loginInfo;
  };
}
