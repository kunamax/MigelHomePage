import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import { motion } from 'framer-motion'

import dog from '../public/images/miciu.jpeg'

const Hobby = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h2'} fontSize={20} mb={4}>
          Hobby
        </Heading>

        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => window.open('https://www.instagram.com/nightmare5235/')}
            >
            <Section>
              <GridItem title="Dog Chica" thumbnail={dog}>
                My playful dog
              </GridItem>
            </Section>
          </motion.button>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Hobby