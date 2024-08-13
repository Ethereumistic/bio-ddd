"use client";
import React from "react";
import { Button } from "./ui/moving-border";

interface MovingBorderDemoProps {
    containerClassName: string;
    as: string;
    className: string;
    children: React.ReactNode; // Add this line
  }

const MovingBorderDemo: React.FC<MovingBorderDemoProps> = ({ children, ...props }) => {
    return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}

export default MovingBorderDemo;