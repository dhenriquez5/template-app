"use client";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";


export const ThemeProv = ({ children }: any) => {
  return <ThemeProvider  attribute="class">{children}</ThemeProvider>;
};
