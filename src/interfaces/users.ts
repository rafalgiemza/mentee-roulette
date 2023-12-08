import { type Company as ICompany } from "./company";
export interface UserList {
  readonly totalCount: number;
  readonly items: UserResponse[];
}

export interface UserResponse {
  readonly id: string;
  readonly version?: number;
  readonly avatarImageUrl: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly locale: string;
  readonly timeZone: string;
  readonly department: string;
  readonly email: string;
  readonly connectedWithCronofy: boolean;
  readonly pauseMe: boolean;
  readonly company?: ICompany;
}
