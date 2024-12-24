// import NextLink from 'next/link'
// import {
//   Link,
//   Container,
//   Heading,
//   Box,
//   SimpleGrid,
//   Button,
//   List,
//   ListItem,
//   ListIcon,
//   Icon,
//   useColorModeValue
// } from '@chakra-ui/react'
// import Paragraph from '../components/paragraph'
// import Section from '../components/section'
// import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
// import Image from 'next/image'
// import { AbsoluteCenter } from '@chakra-ui/react'
//
// const Home = () => (
//     <Container>
//       <Box
//         borderRadius="lg"
//         mb={6}
//         p={3}
//         textAlign="center"
//         bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
//         css={{ backdropFilter: 'blur(10px)' }}
//       >
//         Welcome to my home page!
//       </Box>
//
//       <Box display={{ md: 'flex' }}>
//         <Box flexGrow={1}>
//           <Heading as="h2" variant="page-title">
//             Jakub Sadkiewicz
//           </Heading>
//           <p>AGH CS Student (Programmer | Car Tuner)</p>
//         </Box>
//         <Box
//           flexShrink={0}
//           mt={{ base: 4, md: 0 }}
//           ml={{ md: 6 }}
//           textAlign="center"
//         >
//           <Box
//             borderColor="whiteAlpha.800"
//             borderWidth={2}
//             borderStyle="solid"
//             w="250px"
//             h="250px"
//             display="inline-block"
//             borderRadius="full"
//             overflow="hidden"
//           >
//             <Image
//               src="/images/bio.jpeg"
//               alt="Profile Picture"
//               width="250"
//               height="250"
//
//             />
//           </Box>
//         </Box>
//       </Box>
//
//       <Section delay={0.1}>
//         <Heading as="h3" variant="section-title">
//           Bio
//         </Heading>
//         <Paragraph>
//           I am a student from Poland. I am interested in programming, modifying cars and playing sports.
//         </Paragraph>
//         <Heading as="h3" variant="section-title">
//           Experience
//         </Heading>
//         <Paragraph>
//           I have experience with Python, Java, Go. I am currently learning Django and React. I have also worked with SQL and NoSQL databases.
//           <AbsoluteCenter p="3" axis="horizontal" flex={"row"}>
//             <img
//               src="https://skillicons.dev/icons?i=python,java,go,django,react,mysql,sqlite,mongodb"
//               alt="My Skills"
//               style={{ verticalAlign: 'middle' }}
//             />
//           </AbsoluteCenter>
//         </Paragraph>
//       </Section>
//     </Container>
// )
//
// export default Home

import NextLink from 'next/link'
import { motion } from 'framer-motion'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue, AbsoluteCenter
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import Layout from '../components/layouts/article'

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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
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
          I am a student from Poland. I am interested in programming, modifying cars and playing sports.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Paragraph>
          I have experience with Python, Java, Go. I am currently learning Django and React. I have also worked with SQL and NoSQL databases.
        </Paragraph>
        <AbsoluteCenter p="3" axis="horizontal">
          <img
            src="https://skillicons.dev/icons?i=python,java,go,django,react,mysql,sqlite,mongodb"
            alt="My Skills"
            style={{ verticalAlign: 'middle' }}
          />
        </AbsoluteCenter>
      </Section>
    </Container>
  </Layout>
)

export default Home



