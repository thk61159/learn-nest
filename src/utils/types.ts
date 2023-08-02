export type CreatUserParams = {
  username: string;
  password: string;
}
//create another datatype for accept data from the endpoint 
//cause it may provide data that we don't want to save in DB
export type UserProfileParams = {
  firstname: string;
  lastname: string;
  age: number;
  dob: string;
}

export type CreatPostParams = {
  title:string; 
  description: string;
}