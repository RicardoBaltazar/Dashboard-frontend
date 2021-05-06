import styled from './styled.module.scss';
import Card from '../src/components/cards';

function App() {
  return (
    <>
    <div className={styled.app}>

      <div className={styled.card}>
        <Card style={styled.card1}/>
      </div>

      <div className={styled.cards}>
        <Card style={styled.card2}/>
        <Card style={styled.card2}/>
        <Card style={styled.card2}/>
      </div>
      
    </div>
    </>
  );
}

export default App;
