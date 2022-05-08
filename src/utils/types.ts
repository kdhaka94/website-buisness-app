export interface User {
  id: string;
  isAdmin: boolean;
  isBlocked: boolean;
  isPaymentDone: boolean;
  username: string;
  reportedBy?: (User)[] | null;
  email: string;
  gstNumber: string;
  createdAt: string;
  panNumber: string;
  tradeName: string;
  mobileNumber: string;
}

export interface MechantInfo {
  mid:string;
  mkey:string;
  amount:string;
}