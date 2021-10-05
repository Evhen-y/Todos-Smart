
// filterSettings -> create new interface

import { EOrder } from "@shared/interface";

export interface IUsersState{
    error: null | string;
    loading: boolean;
    users: IUser[];
    user: null |IUser;
    filterSettings: IUserFilterSettings;
}

export interface IUser {
    id?: number;
    name: string; 
    lastName: string;
    email:string;
    createAt: Date;
    isActive: boolean;
    avatar: string | null;
  }

  export interface IUserFilterSettings{
      search: string;
      order: EOrder;
      sortBy: keyof IUser;
      limit: number;
      skip: number;
  }