export interface ILoginResponse {
  userName: string;
  token: string;
  isAuthSuccessfull: boolean;
  errorMessage: any;
  expireAt: string;
}
