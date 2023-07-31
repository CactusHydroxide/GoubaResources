import Layout from "./components/LayoutComponents/Layout"
import { BrowserRouter } from "react-router-dom"
import { MantineProvider } from '@mantine/core'
import goubaTheme from "./theme";

function App() {
  return (
    <>
      <BrowserRouter>
        <MantineProvider theme={goubaTheme} withNormalizeCSS withGlobalStyles>
          <Layout />
        </MantineProvider>
      </BrowserRouter >
    </>
  )
}

export default App