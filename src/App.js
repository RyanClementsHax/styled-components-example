import styled, { ThemeProvider } from 'styled-components/macro'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, Card } from './elements'

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61'
  }
}

const theme2 = {
  colors: {
    primary: '#524763',
    secondary: '#82D8D8'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <GlobalStyle />
        <main
          css={`
            background: red;
            h2 {
              font-size: 100px;
            }
          `}
        >
          <ThemeProvider theme={theme2}>
            <Card>
              <h2>Hello from card</h2>
              <Card.Button>Hello</Card.Button>
            </Card>
          </ThemeProvider>
          <Button>Hello</Button>
          <Button modifiers="cancel">Cancel</Button>
          <Button modifiers="small">Hello</Button>
          <Button modifiers={["small", "cancel"]}>Cancel</Button>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
