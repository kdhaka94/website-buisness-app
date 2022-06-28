export interface User {
  id: string;
  isAdmin: boolean;
  isBlocked: boolean;
  isPaymentDone: boolean;
  username: string;
  reportedBy?: User[] | null;
  email: string;
  gstNumber: string;
  createdAt: string;
  panNumber: string;
  tradeName: string;
  mobileNumber: string;
}

export interface MechantInfo {
  mid: string;
  mkey: string;
  amount: string;
  otpAuthKey: string;
  otpTemplateId: string;
}

export interface UserCreateInput {
  addressOfBuisness: string;
  designation:       string;
  email:             string;
  gstNumber:         string;
  isAccountVerified: boolean;
  isVerifiedByAdmin: boolean;
  mobileNumber:      string;
  panNumber:         string;
  startYear:         string;
  tradeName:         string;
  typeOfBuisness:    string;
  username:          string;
}
