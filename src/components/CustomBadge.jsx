import React from "react";
import { Badge } from "./ui/badge";

const CustomBadge = ({ text, className }) => {
  return (
    <>
      <Badge
        className={`text-xs text-gray-800/75 bg-primary/25 dark:text-white dark:bg-primary/40 
    whitespace-normal wrap-break-word text-center sm:whitespace-nowrap ${className}`}>
        {text}
      </Badge>
    </>
  );
};

export default CustomBadge;
