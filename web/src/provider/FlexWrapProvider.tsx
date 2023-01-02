import React from "react";

interface IFlexWrapProviderProps {
  children: React.ReactNode;
}

const FlexWrapProvider: React.FC<IFlexWrapProviderProps> = ({
  children
}) => (
  <div className="flex h-screen flex-wrap">
    {children}
  </div>
);

export default FlexWrapProvider;
