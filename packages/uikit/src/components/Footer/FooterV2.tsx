import React from "react";
import Image from "next/image";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
  StyledListItem2,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";
import logo from "../../../../../public/images/logo-cz.svg";
import logo1 from "../../../../../public/images/safu.svg";
import logo2 from "../../../../../public/images/tank.svg";
import logo3 from "../../../../../public/images/bets.svg";
import { useMatchBreakpoints } from "../../hooks";


const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  const { isMobile, isMd } = useMatchBreakpoints();

  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 0px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "13px"]}
          borderBottom={"1px solid #2C313D"}
        >
          <Box display={["none", null, "block"]}>
            <Image src={logo} width={103} height={28} />
            <div
              style={{
                fontWeight: "500",
                fontSize: "16px",
                marginTop: "13px",
                maxWidth: "312px",
                color: "#919AAE",
                marginLeft: "5px",
                lineHeight: '150%',
                marginBottom: '63px'
              }}
            >
              Donec nec justo eget felis facilisis fermentum. Ali quam porttitor mauris...
            </div>
            {/* <div style={{ marginTop: "63px" }}>
              <Image src={logo1} width={103} height={28} />
              <Image src={logo2} width={103} height={28} />
              <Image src={logo3} width={103} height={28} />
            </div> */}
            <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "19px"]} />

          </Box>

          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>

              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem2 key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem2>
              ))}
            </StyledList>
          ))}

        </Flex>


        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >

          <Flex order={[2, null, 1]} alignItems="center">
            <div
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "12px",
                color: "#919AAE",
                marginBottom: '15px',
              }}
            >
              ?? 2022 CEEZEE.IO
            </div>
          </Flex>

        </StyledToolsContainer>
      </Flex>
    </StyledFooter >
  );
};

export default MenuItem;
