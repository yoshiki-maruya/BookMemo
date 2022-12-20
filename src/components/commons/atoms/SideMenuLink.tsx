import React from "react";

type SideMenuLinkProps = React.ComponentPropsWithRef<"li"> & {
  onClick: (e: React.SyntheticEvent<HTMLElement>) => void;
  children: React.ReactNode;
};

const SideMenuLink = React.forwardRef<HTMLLIElement, SideMenuLinkProps>(
  ({ onClick, children }, ref) => {
    return <li onClick={onClick} ref={ref}>{children}</li>
  }
)

export default SideMenuLink;
