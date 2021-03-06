import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: ${darkColors.backgroundAlt};
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 20px;
  text-transform: capitalize;
  font-family: Inter;
  font-weight: 500;
  font-size: 12px;
  font-style: normal;

  &:first-child {
    font-family: Inter;
    color: #fff;
    font-weight: 500;
    text-transform: normal;
  }
`;

export const StyledListItem2 = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-family: Inter;
  font-weight: 500;
  font-size: 12px;
  font-style: normal;

  &:first-child {
    font-family: Inter;
    color: #fff;
    font-weight: 500;
    text-transform: normal;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  /* border-bottom: 1px solid #2C313D; */
`;

export const StyledText = styled.span`
  color: ${darkColors.text};
`;
