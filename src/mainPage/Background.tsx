import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

const CHECKS_PER_SIDE = 6

const Background = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [checkWidth, setCheckWidth] = useState<number>(0)
  useEffect(() => {
    setCheckWidth(
      Math.floor((ref?.current?.clientWidth || 0) / CHECKS_PER_SIDE )
    )
  }, [ref])

  return (
    <BackgroundContainer id="background">
      <CheckerboardContainer
        ref={ref}
        $color1={'red'}
        $color2={'gray'}
        $checkWidth={checkWidth}
      />
      <CheckerboardContainer
        $color1={'blue'}
        $color2={'black'}
        $checkWidth={checkWidth}
      />
    </BackgroundContainer>
  )
}

const CheckerboardContainer = styled.div<{
  $color1: string
  $color2: string
  $checkWidth: number
}>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$color1};
  background-position: top right;
  background-image: linear-gradient(
      45deg,
      ${(props) => props.$color2} 25%,
      transparent 25%,
      transparent 75%,
      ${(props) => props.$color2} 75%,
      ${(props) => props.$color2}
    ),
    linear-gradient(
      -45deg,
      ${(props) => props.$color2} 25%,
      transparent 25%,
      transparent 75%,
      ${(props) => props.$color2} 75%,
      ${(props) => props.$color2}
    );
  background-size: ${(props) => props.$checkWidth}px ${(props) => props.$checkWidth}px;
  background-repeat: repeat;
`

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
`

export default Background
