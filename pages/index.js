import { motion } from 'framer-motion'
import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  Highlight,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Image from 'next/image'
import Layout from '../components/layouts/article'

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Welcome to my home page!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jakub Sadkiewicz
          </Heading>
          <p>AGH CS Student (Programmer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="250px"
              h="250px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/bio.jpeg"
                alt="Profile Picture"
                width="250"
                height="250"
              />
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          I am a student from Poland. I am interested in programming, modifying
          cars and playing sports.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Paragraph>
          I have experience with Python, Java, Go. I am currently learning
          Django and React. I have also worked with SQL and NoSQL databases.
        </Paragraph>
        <img
          src="https://skillicons.dev/icons?i=python,java,go,django,react,mysql,sqlite,mongodb"
          alt="My Skills"
        />
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant={"section-title"}>
          <Highlight query="me" styles={{ color: "grassTeal" }}>
            Where to find me
          </Highlight>
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          <GridItem>
            <Link href="https://github.com/kunamax" target={"_blank"}>
            <Button variant={"ghost"} leftIcon={<IoLogoGithub />}>
              @kunamax
            </Button>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="https://www.linkedin.com/in/jakub-sadkiewicz-3a7960289/" target={"_blank"}>
              <Button variant={"ghost"} leftIcon={<IoLogoLinkedin />}>
                Jakub Sadkiewicz
              </Button>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="https://www.instagram.com/nightmare5235/" target={"_blank"}>
              <Button variant={"ghost"} leftIcon={<IoLogoInstagram />}>
                @nightmare5235
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </Section>
    </Container>
  </Layout>
)

export default Home



