import { useState } from 'react'
import styled from 'styled-components'

type ScoreCounterProps = {
  title: string
}

const ScoreCounter = ({ title }: ScoreCounterProps) => {
  const [score, setScore] = useState(0)
  return (
    <OuterContainer>
      {title}
      <ScoreContainer>
        <CrementButtonContainer
          className={'noselect'}
          $invisible={score <= 0}
          onClick={() => setScore((prevScore) => prevScore - 1)}
        >
          ~
        </CrementButtonContainer>

        <Score className={'noselect'}> {score}</Score>
        <CrementButtonContainer
          className={'noselect'}
          onClick={() => setScore((prevScore) => prevScore + 1)}
        >
          +
        </CrementButtonContainer>
      </ScoreContainer>
    </OuterContainer>
  )
}

const Score = styled.div`
  min-width: 60px; ;
`

const CrementButtonContainer = styled.span<{ $invisible?: boolean }>`
  cursor: pointer;
  visibility: ${(p) => (p.$invisible ? 'hidden' : 'visible')};
`

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const OuterContainer = styled.div`
  font-family: 'Manuscript Gothisch';
  margin: 30px 0;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ScoreCounter
