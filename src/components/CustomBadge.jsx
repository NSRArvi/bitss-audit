import React from "react";
import { Badge } from "./ui/badge";

const CustomBadge = ({ text }) => {
  return (
    <Badge
      variant="destructive"
      className="text-xs text-gray-800/75 bg-primary/25 dark:text-white dark:bg-primary/40">
      {text}
    </Badge>
  );
};

export default CustomBadge;
