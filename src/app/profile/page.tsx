import React from "react";
import { endpoints, getData } from "~/api";
import { ProfilePage } from "~/components/ProfilePage";
import { type UserResponse as IUserResponse } from "~/interfaces/users";

const page: React.FC = async () => {
  const user = await getData<IUserResponse>(endpoints.usersMe);
  return <ProfilePage user={user} />;
};

export default page;
