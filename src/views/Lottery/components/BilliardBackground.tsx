import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from '@pancakeswap/uikit'

const floatingStarsLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }  
`

const floatingStarsRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }  
`

const floatingTicketLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }  
`

const floatingTicketRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }  
`

const StarsDecorations = styled(Box)`
  position: absolute;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  left: 0;
  right: 0;
  margin-right: auto;
  margin: auto;
  

  & img {
    position: absolute;
    z-index: 3;
  }

  & :nth-child(1) {
     /* animation: ${floatingStarsLeft} 3s ease-in-out infinite; */
    animation-delay: 0.25s;
    left: 3%;
    top: 42%;
    z-index: 4;
  }
  & :nth-child(2) {
    // animation: ${floatingStarsLeft} 3.5s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  & :nth-child(3) {
    // animation: ${floatingStarsRight} 4s ease-in-out infinite;
    animation-delay: 0.75s;
  }
  & :nth-child(4) {
    // animation: ${floatingTicketLeft} 6s ease-in-out infinite;
    animation-delay: 0.2s;
  }
  & :nth-child(5) {
    // animation: ${floatingTicketRight} 6s ease-in-out infinite;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & :nth-child(1) {
      left: 3%;
      top: 42%;
    }
    & :nth-child(2) {
      left: 9%;
      top: 23%;
    }
    & :nth-child(3) {
      right: 2%;
      top: 24%;
    }
    & :nth-child(4) {
      left: 8%;
      top: 67%;
    }
    & :nth-child(5) {
      right: 8%;
      top: 67%;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & :nth-child(1) {
      left: 3%;
      top: 10%;
    }
    & :nth-child(2) {
      left: 7%;
      top: 13%;
    }
    & :nth-child(3) {
      right: 10%;
      top: 12%;
    }
    & :nth-child(4) {
      left: 65%;
      top: 9%;
    }
    & :nth-child(5) {
      right: 37%;
      top: 15%;
    }
    & :nth-child(6) {
      right: 20%;
      top: 7%;
    }
    & :nth-child(7) {
      right: 5%;
      top: 8%;
    }
    & :nth-child(8) {
      right: 71%;
      top: 9%;
    }
    & :nth-child(9) {
      right: 72%;
      top: 16%;
    }
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    & :nth-child(1) {
      left: 3%;
      top: 370px;
    }
    & :nth-child(2) {
      z-index: 4;
      left: 17%;
      top: 563px;
    }
    & :nth-child(3) {
      right: 67%;
      top: 345px;
    }
    & :nth-child(4) {
      left: 64%;
      top: 390px;
    }
    & :nth-child(5) {
      z-index: 10;
      right: 473px;
      top: 586px;
    }
    & :nth-child(6) {
      right: 23%;
      top: 289px;
    }
    & :nth-child(7) {
      right: 5%;
      top: 312px;
    }
    & :nth-child(8) {
      right: 14%;
      top: 527px;
    }
    & :nth-child(9) {
      right: 66%;
      top: 697px;
      z-index: 10;
    }
    & :nth-child(10) {
      right: 69%;
      top: 10%;
    }
  }
`
export default function BilliardBackGround() {
  return (
    <div>
      <StarsDecorations display={['none', 'none', 'block']}>
        <img src="/images/lottery/billiard1.png" width="81px" height="81px" alt="" />
        <img src="/images/lottery/billiard2.png" width="125px" height="125px" alt="" />
        <img src="/images/lottery/billiard3.png" width="70px" height="70px" alt="" />
        <img src="/images/lottery/billiard4.png" width="64px" height="64px" alt="" />
        <img src="/images/lottery/billiard5.png" width="78px" height="78px" alt="" />
        <img src="/images/lottery/billiard6.png" width="37px" height="37px" alt="" />
        <img src="/images/lottery/billiard7.png" width="94px" height="94px" alt="" />
        <img src="/images/lottery/billiard8.png" width="50px" height="50px" alt="" />
        <img src="/images/lottery/billiard9.png" width="50px" height="50px" alt="" />
      </StarsDecorations>
    </div>
  )
}
