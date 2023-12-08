"use client";

import React, { useState } from "react";
import { endpoints, getData } from "~/api";
import {
  RouletteTriggerResponse,
  type RouletteTriggerResponse as IRouletteTriggerResponse,
} from "~/interfaces/roulette";
import { RouletteTrigger } from "./RouletteTrigger";
import { RouletteResults } from "./RouletteResults";

const fakeRes: RouletteTriggerResponse = {
  event: {
    summary: "Coffee meeting",
    description: "have fun with your colleague",
    start: "2023-12-11T11:30:00Z",
    end: "2023-12-11T12:00:00Z",
  },
  participants: [
    {
      id: "428d60ad-d6b4-4497-910f-37185b4467a3",
      version: 114,
      email: "rafal.giemza@softgarden.de",
      department: "DEVELOPER",
      locale: "en",
      timeZone: "Europe/Berlin",
      firstName: "Rafal",
      lastName: "Giemza",
      avatarImageUrl: "",
      pauseMe: false,
      company: {
        id: "146ecf32-65b0-491f-ba37-6270deffc34d",
        name: "Softgarden",
      },
      connectedWithCronofy: true,
    },
    {
      id: "fb7e90cc-eec7-4a34-b8d3-3550afc6970b",
      version: 0,
      email: "ruslan.naeltok@softgarden.de",
      department: "DEVELOPER",
      locale: "en",
      timeZone: "Europe/Berlin",
      firstName: "Ruslan",
      lastName: "Naeltok",
      avatarImageUrl:
        "https://localhost:8443/assets/public/media/get/009adb9ac9a14aab82926f1ffa65e638/1446630564682/hp-baxxter--doep-doep-doep-doedoedoepdoepdoep.jpg",
      pauseMe: false,
      connectedWithCronofy: true,
    },
  ],
};

export const Roulette = ({ fake = false }) => {
  const [results, setResults] = useState<RouletteTriggerResponse | null>(
    fake ? fakeRes : null,
  );

  const handleClick = async () => {
    const res = await getData<IRouletteTriggerResponse>(
      endpoints.rouletteTrigger,
      "POST",
    );
    window.location.href = "http://localhost:3000/results";
    setResults(res);
    console.log("🚀 ~ file: Roulette.tsx:67 ~ handleClick ~ res:", res);
  };

  return (
    <div>
      {!fake && <RouletteTrigger rouletteTriggerClicked={handleClick} />}
      {results && <RouletteResults results={results} />}
    </div>
  );
};
