import {
  Flex,
  Image,
  Box,
  FormControl,
  Input as ChakraInput,
  Button,
  FormLabel,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
export default function Home() {
  return (
    <Flex
      w="100vw"
      bg="dougGramColor.backGroundColor"
      h="100vh"
      mt="11rem"
      justifyContent="center"
    >
      <Flex>
        <Box boxSize="sm">
          <Image
            height="35rem"
            width="70rem"
            src="backgroundPhone.png"
            alt="Mobile Phone"
          />
        </Box>
      </Flex>
      <Flex flexDirection="column">
        <Flex
          alignContent="center"
          justifyContent="center"
          flexDirection="column"
          bg="dougGramColor.backGroundSecondary"
          border="dougGramColor.borderPrimary"
          borderWidth="2px"
          padding="2rem 3rem 1rem 3rem"
        >
          <Flex
            alignContent="center"
            justifyContent="center"
            mt="1rem"
            mb="2rem"
          >
            <Image
              width="10rem"
              height="3rem"
              src="logoBlack.png"
              alt="Letreiro"
            />
          </Flex>
          <Flex>
            <FormControl
              alignItems="center"
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <ChakraInput
                name="username"
                fontSize="0.7rem"
                height="2rem"
                width="15rem"
                mb="1rem"
                placeholder="Telefone, nome de usuário ou email"
                focusBorderColor="dougGramColor.borderSelect"
                borderColor="dougGramColor.borderSelectInput"
              />
              <ChakraInput
                fontSize="0.7rem"
                type="password"
                height="2rem"
                width="15rem"
                placeholder="Senha"
                focusBorderColor="dougGramColor.borderSelect"
              />

              <Button
                fontSize="0.8rem"
                color="dougGramColor.backGroundSecondary"
                background="dougGramColor.colorBluePrimary"
                mt="1rem"
                width="15rem"
                height="2rem"
                variant="solid"
                _hover={{
                  boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              >
                Entrar
              </Button>

              <Flex
                mt="0.6rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Flex
                  borderWidth="0.04rem"
                  width="6rem"
                  height="0.01rem"
                  position="relative"
                  borderStyle="2px solid"
                  border="dougGramColor.borderPrimary"
                  mr="1rem"
                />
                <FormLabel fontSize="0.8rem" fontWeight="200" mt="1">
                  OU
                </FormLabel>
                <Flex
                  borderWidth="0.04rem"
                  width="6rem"
                  height="0.01rem"
                  position="relative"
                  borderStyle="2px solid"
                  border="dougGramColor.borderPrimary"
                />
              </Flex>
              <Flex mt="0.6rem" justifyContent="center">
                <Icon
                  color="othersColors.facebookColors"
                  mr="0.5rem"
                  as={AiFillFacebook}
                  fontSize="20"
                />{" "}
                <FormLabel
                  color="othersColors.facebookColors"
                  fontSize="0.9rem"
                  fontWeight="400"
                  mt="0.07"
                >
                  Entre com o Facebook
                </FormLabel>
              </Flex>
              <Flex mt="1rem" justifyContent="center">
                <Text fontSize="0.7rem" fontWeight="400" mt="0.07">
                  <Link href="#">Esqueceu a senha?</Link>
                </Text>
              </Flex>
            </FormControl>
          </Flex>
        </Flex>

        <Flex
          alignContent="center"
          justifyContent="center"
          mt="0.5rem"
          bg="dougGramColor.backGroundSecondary"
          border="dougGramColor.borderPrimary"
          borderWidth="2px"
          padding="1rem"
        >
          <Text fontSize="0.9rem" fontWeight="400" mt="0.07">
            Não tem uma conta?{" "}
            <Link color="dougGramColor.colorBlueSecondary" href="#">
              Cadastre-se
            </Link>
          </Text>
        </Flex>

        <Flex alignItems="center" flexDirection="column">
          <Text fontSize="0.8rem" mt="1rem" mb="0.5rem">
            Obtenha o aplicativo
          </Text>
          <Flex>
            <Image
              width="8rem"
              height="40px"
              src="downloadGoogle.png"
              alt="Letreiro"
              mr="1rem"
            />
            <Image
              width="8rem"
              height="40px"
              src="downloadMicrosoft.png"
              alt="Letreiro"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
