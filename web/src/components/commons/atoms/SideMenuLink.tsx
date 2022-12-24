import React from "react";

type SideMenuLinkProps = React.ComponentPropsWithRef<"li"> & {
  className: string | undefined;
  onClick: (e: React.SyntheticEvent<HTMLElement>) => void;
  children: React.ReactNode;
};

const SideMenuLink = React.forwardRef<HTMLLIElement, SideMenuLinkProps>(
  ({ className, onClick, children }, ref) => {
    return <li data-testid="li" onClick={onClick} ref={ref} className={className}>{children}</li>
  }
)

export default SideMenuLink;
