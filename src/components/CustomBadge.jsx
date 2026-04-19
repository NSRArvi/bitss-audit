import React from "react";
import { Badge } from "./ui/badge";

const CustomBadge = ({ text }) => {
  return (
    <Badge
      variant="secondary"
      className="text-xs text-heading bg-linear-to-r from-[#1E88E5] to-[#4FC3F7] bg-clip-text text-transparent">
      {text}
    </Badge>
  );
};

export default CustomBadge;
