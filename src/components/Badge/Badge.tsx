import React from "react";
type BadgeLabel = "area" | "population";

interface BadgeProps {
  color: string;
  value: number;
  label: BadgeLabel;
}

export const Badge = ({ color, value, label }: BadgeProps) => {
  return (
    <p className={`m-3 p-2 w-25 badge ${color}`}>
      {label}: {value}
    </p>
  );
};
