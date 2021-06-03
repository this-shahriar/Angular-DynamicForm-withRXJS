export interface ISignUp {
  username: string;
  email: string;
  addressList: string[];
  phoneList: {
    type: string;
    phoneNumber: number;
  }[];
}
