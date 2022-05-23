import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { motion } from 'framer-motion';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={'center'}>
      <Flex
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 5, duration: 5 }}
        viewport={{ once: true }}
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} as={motion.p}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 5 }}
        viewport={{ once: true }}>{title}</Text>
      <Text as={motion.p}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} color={'gray.600'} align={'center'}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW={'5xl'}>
    <Box p={4} >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Humanable Centered Design'}
          text={
            'We not only provide with content but the way we serve content to you is our priority to. Let explore our website.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Trusted Source'}
          text={
            'The content of movie we provide is very high quality, from description to photo. We give to you from IMDB.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Fast & Reliable'}
          text={
            'How fast our website ? We give you answer by trying and explore. Start from now!'
          }
        />
      </SimpleGrid>
    </Box>
    </Container>
  );
}