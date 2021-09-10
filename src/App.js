import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button } from './elements'

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Button>Hello</Button>
      <Button modifiers="cancel">Cancel</Button>
      <Button modifiers="small">Hello</Button>
      <Button modifiers={["small", "cancel"]}>Cancel</Button>
    </div>
  );
}

export default App;
