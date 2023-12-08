import React from "react";

interface RouletteResultsCountdownClockProps {
  startDate: string;
}

export const RouletteResultsCountdownClock = (
  props: RouletteResultsCountdownClockProps,
) => {
  const { startDate } = props;

  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 38 }}></span>
        </span>
        sec
      </div>
    </div>
  );
};
