import styled from 'styled-components'
import CountdownClock from '../timer/CountdownClock'
import ScoreCounter from '../timer/ScoreCounter'
import Background from './Background'

const MainPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Background />
      <OuterContainer>
        <ScoreCounter title="Wyverns" />
        <ClocksContainer>
          <CountdownClock startTimeSeconds={900} title={'Round Timer'} />
          <CountdownClock startTimeSeconds={60} title={'Duel Timer'} />
          <CountdownClock
            startTimeSeconds={60}
            title={'Break Timer'}
            editable
          />
        </ClocksContainer>
        <ScoreCounter title="New Order" />
      </OuterContainer>
    </div>
  )
}

const ClocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px;
`

const OuterContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default MainPage
