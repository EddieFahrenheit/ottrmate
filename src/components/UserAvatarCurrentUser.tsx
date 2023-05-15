import React, { ReactNode } from "react";
import UserAvatar from "./UserAvatar";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function UserAvatarCurrentUser({
  className = "",
  children,
}: Props) {
  const userName = "Eddie Fahrenheit";
  const userAvatar = "https://avatars.githubusercontent.com/u/114819096?v=4";

  return (
    <UserAvatar username={userName} avatar={userAvatar} className={className}>
      {children}
    </UserAvatar>
  );
}
