import { ThemeProvider } from "styled-components"
import type { AppProps } from 'next/app'
import { useState } from "react"
import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig"
import Layout from "../src/components/Layout/layout"

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
