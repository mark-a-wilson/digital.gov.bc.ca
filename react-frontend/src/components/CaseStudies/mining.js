import React from 'react';
import { MiningContent } from './content';
import Template from './template';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InfoCard from '../Home/infocard';
import '../../css/casetemplates.css';
import bannerImage from '../../images/case-study-mining.jpg';

const caseStudiesFarmingImg = require('../../images/case-study-farming.jpg');
const caseStudiesMSPImg = require('../../images/case-study-msp.jpg');
const jill = require('../../images/jill.png');
const aaron = require('../../images/aaron.png');

const contacts = (
  <div>
    <Grid className="cardAdjustment">
      <Row>
        <Col sm={12} md={6}>
          <InfoCard
            title={'Aaron Unger'}
            description={
              'Product Owner, Mines Digital Services - Aaron.Unger@gov.bc.ca'
            }
            img={aaron}
            height="550px"
          />
        </Col>
        <Col sm={12} md={6}>
          <InfoCard
            title={'Jillian Carruthers'}
            description={
              'Director, Digital Services - Jillian.Carruthers@gov.bc.ca'
            }
            img={jill}
            height="550px"
          />
        </Col>
      </Row>
    </Grid>
  </div>
);
const others = (
  <div>
    <Grid className="cardAdjustment">
      <Row>
        <Col sm={12} md={6}>
          <InfoCard
            routePath={'/case-studies/farming-study'}
            linkText={'Read more'}
            title={'Helping farmers understand their soil'}
            description={
              'The Ministry of Agriculture wanted to understand how farmers monitor and manage their soils. With new environmental regulations around soil management pending, the research aimed to...'
            }
            img={caseStudiesFarmingImg}
            height="650px"
          />
        </Col>
        <Col sm={12} md={6}>
          <InfoCard
            routePath={'/case-studies/medical-study'}
            linkText={'Read more'}
            title={'Transforming the medical services plan'}
            description={
              'In 2016, MSP received 130,000 enrolment and 147,680 Premium Assistance applications. Thirty percent of application forms were returned due to errors. To improve the process, the...'
            }
            img={caseStudiesMSPImg}
            height="650px"
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

const MiningStudy = () => {
  return (
    <div className="pageContainer">
      <Template
        headerTitle={MiningContent.title}
        headerDescription={MiningContent.description}
        context={MiningContent.context}
        approach={MiningContent.approach}
        outcomes={MiningContent.solution}
        resourceLinks={MiningContent.resourceLinks}
        resourceText={MiningContent.resourceText}
        backgroundImage={bannerImage}
        contacts={contacts}
        others={others}
      />
    </div>
  );
};

export default MiningStudy;