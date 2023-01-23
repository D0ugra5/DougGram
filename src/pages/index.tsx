import {
  Flex,
  Image,
  Box,
  FormControl,
  Input as ChakraInput,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w="100vw"
      bg="dougGramColor.backGroundColor"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <Box boxSize="sm">
          <Image src="backgroundPhone.png" alt="Mobile Phone" />
        </Box>
      </Flex>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
        bg="dougGramColor.backGroundSecondary"
        border="dougGramColor.borderPrimary"
        borderWidth="2px"
      >
        <Flex alignContent="center" justifyContent="center" padding="2rem">
          <Image
            width="12rem"
            height="4rem"
            src="logoBlack.png"
            alt="Letreiro"
          />
        </Flex>
        <Flex padding="2rem">
          <FormControl display="flex" flexDirection="column">
            <ChakraInput
              name="Douglas"
              height="3rem"
              width="19rem"
              mb="1rem"
              placeholder="Telefone, nome de usuário ou email"
              focusBorderColor="dougGramColor.borderSelect"
              borderColor="dougGramColor.borderSelectInput"
            />
            <ChakraInput
              type="password"
              height="3rem"
              width="19rem"
              placeholder="Senha"
              focusBorderColor="dougGramColor.borderSelect"
            />

            <Button
              color="dougGramColor.backGroundSecondary"
              background="dougGramColor.colorBluePrimary"
              mt="2rem"
              width="19rem"
              height="2.5rem"
              variant="solid"
              _hover={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Entrar
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}
