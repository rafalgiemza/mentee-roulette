"use client";

import React, { useEffect } from "react";
import { useCurrentUserContext } from "~/providers/CurrentUserProvider";
import { PauseMe } from "~/components/PauseMe";
import { UnregisterMe } from "~/components/UnregisterMe";
import { PauseMeProvider } from "~/providers/PauseMeProvider";
import { UnregisterMeProvider } from "~/providers/UnregisterMeProvider";
import { API_HOST } from "~/api";

const CRONOFY_DATA_CENTER = "de";
const CRONOFY_CLIENT_ID = "RIHglSgE2QwvqHnbyqM8qnsAnZ24W0aK";

export const SettingsForm = async () => {
  const { user } = useCurrentUserContext();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://elements.cronofy.com/js/CronofyElements.v1.56.5.js";
    script.async = true;

    script.onload = () => {
      window.CronofyElements.CalendarSync({
        target_id: "cronofy-calendar-sync",
        data_center: CRONOFY_DATA_CENTER,
        authorization: {
          redirect_uri: `${API_HOST}/cronofy-authorized-callback`,
          client_id: CRONOFY_CLIENT_ID,
          scope: "read_write",
          state: JSON.stringify({ userId: user?.id }),
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="gap-100 flex min-h-screen flex-col items-center">
      <div className="py-10">
        <h1 className="card-title">Settings</h1>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="avatar py-10 pl-10">
          <div className="w-72 rounded-md ">
            <figure>
              <img src={user?.avatarImageUrl} alt="Avatar" />
            </figure>
          </div>
        </div>
        <div className="card-body py-10">
          <p>Company name: {user?.company?.name}</p>
          <p>First name: {user?.firstName} </p>
          <p>Last name: {user?.lastName} </p>
          <p>Department: {user?.department} </p>
          <p>Time zone: {user?.timeZone} </p>
        </div>
      </div>
      <div className="py-10">
        <button className="btn " disabled>
          Edit
        </button>
      </div>
      <div className="element__wrapper">
        <div id="cronofy-calendar-sync"></div>
      </div>
      <PauseMeProvider pauseMe={user?.pauseMe}>
        <PauseMe pauseMe={user?.pauseMe} />
      </PauseMeProvider>
      <UnregisterMeProvider connectedWithCronofy={user?.connectedWithCronofy}>
        <UnregisterMe connectedWithCronofy={user?.connectedWithCronofy} />
      </UnregisterMeProvider>
    </main>
  );
};
