import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1">Page Not Found</Heading>
        <Text>
          The page you&apos;re looking for can&apos;t be found.
        </Text>
        <Divider my={4} />

        <Box my={4}>
          <NextLink href={"/"}>
            <Button colorScheme={"teal"}>Go back home</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound