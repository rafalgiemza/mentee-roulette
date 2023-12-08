import React from "react";

export const InfoBadge = ({ text = "Info" }) => (
  <div className="badge badge-info badge-lg gap-2">{text}</div>
);

export const SuccessBadge = ({ text = "Success" }) => (
  <div className="badge badge-success badge-lg gap-2">{text}</div>
);

export const WarningBadge = ({ text = "Warning" }) => (
  <div className="badge badge-warning badge-lg gap-2">{text}</div>
);

export const ErrorBadge = ({ text = "Error" }) => (
  <div className="badge badge-error badge-lg gap-2">{text}</div>
);

export const DefaultBadge = ({ text = "default" }) => (
  <div className="badge">{text}</div>
);
export const NeutralBadge = ({ text = "neutral" }) => (
  <div className="badge badge-neutral">{text}</div>
);
export const PrimaryBadge = ({ text = "primary" }) => (
  <div className="badge badge-primary">{text}</div>
);
export const SecondaryBadge = ({ text = "secondary" }) => (
  <div className="badge badge-secondary">{text}</div>
);
export const AccentBadge = ({ text = "accent" }) => (
  <div className="badge badge-accent">{text}</div>
);
export const GhostBadge = ({ text = "ghost" }) => (
  <div className="badge badge-ghost">{text}</div>
);
