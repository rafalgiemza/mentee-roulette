import React from "react";

interface AvatarProps {
  avatarId: string;
}

const API_DOMAIN = "https://api.multiavatar.com";
const API_KEY = "do2zgPpfc07Cv5";

export const Avatar = async ({ avatarId = "Binx Bond" }: AvatarProps) => {
  const res = await fetch(`${API_DOMAIN}/${avatarId}?apikey=${API_KEY}`);

  const svg = await res.text();
  return <div dangerouslySetInnerHTML={{ __html: svg }}></div>;
};
