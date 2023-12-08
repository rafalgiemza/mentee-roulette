"use client";

import React from "react";
import { SettingsForm } from "~/components/SettingsForm";
import { CurrentUserProvider } from "~/providers/CurrentUserProvider";

const page: React.FC = () => {
  return (
    <CurrentUserProvider>
      <SettingsForm />
    </CurrentUserProvider>
  );
};

export default page;
