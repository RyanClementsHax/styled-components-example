import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, Card } from './elements'

function App() {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <main>
        <Card>
          <h2>Hello from card</h2>
          <Card.Button>Hello</Card.Button>
        </Card>
        <Button>Hello</Button>
        <Button modifiers="cancel">Cancel</Button>
        <Button modifiers="small">Hello</Button>
        <Button modifiers={["small", "cancel"]}>Cancel</Button>
      </main>
    </div>
  );
}

export default App;
