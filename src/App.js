import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, CancelButton } from './elements'

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Button>Hello</Button>
      <CancelButton>Cancel</CancelButton>
      <Button size="small">Hello</Button>
      <CancelButton size="small">Cancel</CancelButton>
    </div>
  );
}

export default App;
