"use client";

import React from "react";
import { RouletteTriggerResponse } from "~/interfaces/roulette";
import { RouletteResultsCard } from "./RouletteResultsCard";
import { RouletteResultsEventDetails } from "./RouletteResultsEventDetails";

interface RouletteResultsProps {
  results: RouletteTriggerResponse;
}

export const RouletteResults = ({ results }: RouletteResultsProps) => {
  return (
    <>
      <div className="flex w-full flex-col py-20 lg:flex-row">
        <RouletteResultsCard user={results.participants[0]} />
        <div className="divider px-5 text-5xl lg:divider-horizontal">☕</div>
        <RouletteResultsCard user={results.participants[1]} />
      </div>
      <RouletteResultsEventDetails event={results.event} />
    </>
  );
};
