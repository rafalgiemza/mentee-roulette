import React from "react";
import {
  AccentBadge,
  DefaultBadge,
  PrimaryBadge,
  SecondaryBadge,
} from "./Badge";

const departments = {
  DEVELOPER: "DEVELOPER",
  HEAD: "HEAD",
  DESIGN: "DESIGN",
};

interface DepartmentBadgeProps {
  department: string;
}

export const DepartmentBadge = ({ department }: DepartmentBadgeProps) => {
  switch (department) {
    case departments.DEVELOPER:
      return <PrimaryBadge text={department} />;
    case departments.DESIGN:
      return <SecondaryBadge text={department} />;
    case departments.HEAD:
      return <AccentBadge text={department} />;
    default:
      return <DefaultBadge />;
  }
};
