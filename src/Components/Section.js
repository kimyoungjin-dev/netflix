import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
  border: 1px solid white;
  padding: 8px;
  border-radius: 3px;
`;

const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-column-gap: 35px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fill, 140px);
  margin-bottom: 30px;
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
