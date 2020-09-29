import * as React from "react";
import "./Users.css";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};
type UsersProps = { users: User[] };

const Users = ({ users }: UsersProps) => (
  <div className="users">
    {!users || users.length === 0 ? (
      <div className="users__no-users">I don't know such person...</div>
    ) : (
      users.map(({ id, name }) => (
        <div key={id} className="user">
          {name}
        </div>
      ))
    )}
  </div>
);

export default Users;
