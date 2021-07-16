import Tasks from './Tasks'
import styled from 'styled-components';

const Div = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex: 1;

`


function App() {
  return (
    <Div>
      <Tasks />
    </Div>
  );
}

export default App;
