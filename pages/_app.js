import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'
import { AnimatePresence} from 'framer-motion'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}


const Website = ({ Component, pageProps, router} ) => {
  return (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Layout router={router}>
      <AnimatePresence initial={true} mode={"wait"}>
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  </ChakraProvider>
  )
}

export default Website
