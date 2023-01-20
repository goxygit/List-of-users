import React from "react";
import { User } from "./User";

export const Users = ({
  items,
  value,
  setValue,
  invite,
  onInvite,
  onClickSuccess
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={setValue}
          placeholder="Знайти користувача..."
        />
      </div>
       
        <ul className="users-list">
          {items
            .filter((obj) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return (
                fullName.includes(value.toLowerCase()) ||
                obj.email.toLowerCase().includes(value.toLowerCase())
              );
            })
            .map((obj) => (
              <User
                onInvite={onInvite}
                isInvited={invite.includes(obj.id)}
                key={obj.id}
                {...obj}
              />
            ))}
        </ul>
        {invite.length > 0 ?
        <button onClick={onClickSuccess} className="send-invite-btn">Відправити запрошення</button>
      : ''}
      
    </>
  );
};
