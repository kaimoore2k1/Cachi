export interface IState {
  loginInfo: ILoginInfo;
}

export interface ILoginInfo {
  userName: string;
  userRole: number;
  avatar: string;
  locate: string;
}

function state(): IState {
  const loginInfo: ILoginInfo = {
    userName: 'Admin',
    userRole: 1,
    avatar: '',
    locate: 'vi-VN',
  };
  return {
    loginInfo: loginInfo,
  };
}

export default state;
