import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import rougeLikeGame from '../public/images/game.png'
import miciuPhotoShop from '../public/images/miciu_piciu.png'

const Work = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h2'} fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="game"
              title="Shadow's Labyrinth"
              thumbnail={rougeLikeGame}
              link={'https://github.com/kunamax/PythonProject'}
            >
              Shadow&apos;s Labyrinth is a rouge-like game that I developed with
              my friend. It is a turn-based game where you have to navigate
              through a maze and defeat enemies.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="cpp"
              title="Miciu(Photo)Shop"
              thumbnail={miciuPhotoShop}
              link={'https://github.com/kunamax/CppProject'}
            >
              Miciu(Photo)Shop is a photo editing software. It is a simple photo
              editing software that allows you to apply filters and
              transformations to images. I used C++, OpenCV and Qt to develop
              this project.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
