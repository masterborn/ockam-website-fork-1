import React from 'react';
import styled from "@emotion/styled";
import {darken} from "polished";
import { flexbox, space } from 'styled-system'

import PageSection from "../../PageSection";
import { media } from '../../../../utils/emotion';
import Heading from "../../../Heading";
import AnimateOnScroll from "../../../AnimateOnScroll";
import Badge from "../../../Badge";

const StyledPageSection = styled(PageSection)`
  background-color: ${props => darken(0.02, props.theme.colors.background)};
  padding: 11rem 0;
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.desktop`
    flex-direction: row;
  `}
`;

const ConfigurationItem = styled('div')`
  color:  ${props => props.theme.colors.white};
  margin-bottom: 3.5rem;
  &:before {
    content: "";
    width: .7rem;
    height: .7rem;
    background-color: ${props => props.theme.colors.accent};
    display: inline-block;
    margin-right: 1rem;
  }
`;

const ConfigurationList = styled('div')(flexbox, space);

const ConfigurationsSection = () => {
  return (
    <StyledPageSection>
      <Container>
        <Heading textAlign={{ _: 'center', lg: 'left'}} flex={7} as="h2">
          <AnimateOnScroll slideIn="left">
            Ockam Registry is available in the following configurations
          </AnimateOnScroll>
        </Heading>
        <ConfigurationList mt={{_:3, lg: 0}} flex={5}>
          <AnimateOnScroll slideIn="right">
            <ConfigurationItem>Single-Party / Private Registry</ConfigurationItem>
            <ConfigurationItem>Multi-Party / Private Registry</ConfigurationItem>
            <ConfigurationItem>
              Multi-Party / Public Registry
              <Badge px={2} py={1} ml={2}>Coming soon</Badge>
            </ConfigurationItem>
          </AnimateOnScroll>
        </ConfigurationList>
      </Container>
    </StyledPageSection>
  );
};

ConfigurationsSection.propTypes = {

};

export default ConfigurationsSection;
