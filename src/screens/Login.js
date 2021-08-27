import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import { Image } from "../components";
import { images } from "../utils/images";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const Login = ({ navigation }) => {
  return (
    <Container>
      <Image url={images.logo} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </Container>
  );
};

export default Login;
