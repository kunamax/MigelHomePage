import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  Highlight,
  useColorModeValue,
  Link,
  Button,
  Center
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Image from 'next/image'
import Layout from '../components/layouts/article'

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'

import { CiFileOn } from 'react-icons/ci'

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
        <Typewriter
          options={{
            strings: ['Welcome to my homepage!', 'Welcome to my dojo!', 'Welcome to my space!'],
            autoStart: true,
            loop: true
          }}
        />
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
                draggable={false}
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
          I am a student from Poland. I am interested in programming, especially
          distributed systems and machine learning.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Paragraph>
          I have experience with Python, Java, Go. I am currently learning
          Django and React. I have also worked with SQL and NoSQL databases.
        </Paragraph>
      </Section>
      <Center>
        <Box>
          <img
            src="https://skillicons.dev/icons?i=python,java,go,react,c,cpp,cs,julia,mongodb,sqlite,git"
            alt="My Skills"
          />
        </Box>
      </Center>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          <Highlight query="♥" styles={{ color: 'grassTeal' }}>
            What do I really ♥.
          </Highlight>
        </Heading>
        <Paragraph>
          Programming, Cycling, Hiking, Chess, Car tuning, Exploring Nature and many more...
        </Paragraph>
      </Section>
      <Section delay={0.2}>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant={'section-title'}>
          Check out my CV 
        </Heading>
        <Center>
          <a href="/images/Jakub_Sadkiewicz_CV.pdf">
            <Button variant={'ghost'} leftIcon={<CiFileOn />}>
              CV
            </Button>
          </a>
        </Center>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant={'section-title'}>
          <Highlight query="me" styles={{ color: 'grassTeal' }}>
            Where to find me
          </Highlight>
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          <GridItem>
            <Link href="https://github.com/kunamax" target={'_blank'}>
              <Button variant={'ghost'} leftIcon={<IoLogoGithub />}>
                @kunamax
              </Button>
            </Link>
          </GridItem>
          <GridItem>
            <Link
              href="https://www.linkedin.com/in/jakub-sadkiewicz-3a7960289/"
              target={'_blank'}
            >
              <Button variant={'ghost'} leftIcon={<IoLogoLinkedin />}>
                Jakub Sadkiewicz
              </Button>
            </Link>
          </GridItem>
          <GridItem>
            <Link
              href="https://www.instagram.com/nightmare5235/"
              target={'_blank'}
            >
              <Button variant={'ghost'} leftIcon={<IoLogoInstagram />}>
                @nightmare5235
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Mentor
        </Heading>
        <Paragraph>
          The site was created based on the Takuya Matsuyama&apos;s website
          <Link href="https://www.craftz.dog/" target={'_blank'}>
            <Button variant={'ghost'} leftIcon={<IoLogoGithub />}>
              craftz.dog
            </Button>
          </Link>
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
