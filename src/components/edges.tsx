import React, { ReactNode } from "react";
import classNames from "../utils/classNames";

interface IEdgesProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  children?: ReactNode; // Add children prop to accept content inside Edges
}

const Edges: React.FC<IEdgesProps> = ({
  className,
  size = "md",
  children,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        size === "sm"
          ? "max-w-screen-sm"
          : size === "md"
          ? "max-w-screen-md"
          : size === "lg"
          ? "max-w-screen-lg"
          : size === "2xl"
          ? "max-w-screen-2xl"
          : "max-w-screen-lg", // default to "lg" if no match

        "mx-auto", // Ensures the content is centered horizontally
        "w-full", // Full width of the container

        className // Any custom classes passed from parent
      )}
      {...rest}
    >
      {children} {/* Render children */}
    </div>
  );
};

export default Edges;
