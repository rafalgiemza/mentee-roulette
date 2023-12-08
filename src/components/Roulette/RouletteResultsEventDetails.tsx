import React from "react";
import { Event } from "~/interfaces/roulette";
import { SimpleCard } from "../SimpleCard";
import { RouletteResultsCountdownClock } from "./RouletteResultsCountdownClock";

interface RouletteResultsEventDetailsProps {
  event: Event;
}

export const RouletteResultsEventDetails = (
  props: RouletteResultsEventDetailsProps,
) => {
  const { event } = props;

  const startDate = new Date(event.start).toUTCString();
  const endDate = new Date(event.end).toUTCString();

  return (
    <SimpleCard>
      <div className="text-center">
        <h2>Bellow you can find details of the meeting</h2>
        <h3>Description: {event.description}</h3>
        <h3>Summary: {event.summary}</h3>
        <h3>Start: {startDate}</h3>
        <h3>End: {endDate}</h3>
      </div>
    </SimpleCard>
  );
};
