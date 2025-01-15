import { UserAPIInterface } from "./User";

export interface PostAPIInterface {
  id: number;
  user_id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user?: UserAPIInterface;
}
