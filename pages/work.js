import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import rougeLikeGame from '../public/images/game.png'
import miciuPhotoShop from '../public/images/miciu_piciu.png'
import objectsDetector from '../public/images/objects_detector.png'

const Work = () => {
  return (
    <Layout title={"Projects"}>
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
          <Section>
            <WorkGridItem
              id="cpp"
              title="ObjectsDetector"
              thumbnail={objectsDetector}
              link={'https://github.com/kunamax/ObjectsDetector'}
            >
              This is an application created in Python to determine what type 
              of object appears in a photo. The model used is Faster R-CNN.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
