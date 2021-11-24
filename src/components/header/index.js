import { Flex, Heading } from "rebass";

const Header = () => {
  return (
    <Flex
      maxWidth={1300}
      margin="0 auto"
      px={20}
      width={1}
      height={120}
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading fontFamily="Roboto" fonstSize={[2, 3, 4]}>
        TO-DO-APP
      </Heading>
    </Flex>
  );
};

export default Header;
