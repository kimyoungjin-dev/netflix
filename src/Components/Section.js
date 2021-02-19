import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Title = styled.span`
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 140px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fill, 100px);
  width: 100%;
  margin-top: 10px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
