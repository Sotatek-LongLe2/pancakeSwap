import React, { useContext } from "react";
import Image from "next/image";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";
import downArrow from "../../../../../public/images/down-arrow.svg";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  hasItems,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: unknown = href
    ? {
      as: linkComponent,
      href,
    }
    : {
      as: "div",
    };
  return (
    <>
      <StyledMenuItemContainer $isActive={isActive} $variant={'subMenu'}>
        <StyledMenuItem
          {...itemLinkProps}
          $isActive={isActive}
          $variant={variant}
          $statusColor={statusColor}
          {...props}
        >
          {children}
          {hasItems && <Image src={downArrow} />}
        </StyledMenuItem>
      </StyledMenuItemContainer>
    </>
  );
};

export default MenuItem;
