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
type UsersProps = { items: User[] };

const Users = ({ items }: UsersProps) => (
  <div className="users">
    {!items || items.length === 0 ? (
      <div className="users__no-users">I don't know such person...</div>
    ) : (
      items.map(({ id, name }) => (
        <div key={id} className="user">
          {name}
        </div>
      ))
    )}
  </div>
);

export default Users;
