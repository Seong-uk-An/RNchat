import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;
const StyledImage = styled.Image`
  background-color: ${({ theme }) => theme.imageBackground};
`;

const Image = ({ url, imageStyle }) => {
  return (
    <Container>
      <StyledImage source={{ uri: url }} style={imageStyle} />
    </Container>
  );
};

Image.propTypes = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
};

export default Image;
