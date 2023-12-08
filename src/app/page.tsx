"use client"

import React from "react";
import {RouletteTrigger} from "~/components/RouletteTrigger";

const page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <RouletteTrigger />
    </main>
  );
}

export default page;