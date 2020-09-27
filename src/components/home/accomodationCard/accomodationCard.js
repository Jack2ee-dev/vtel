import React from 'react';
import { FullpageSection } from '@ap.cx/react-fullpage';
import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

import Iframe from '../../shared/iframe';

const AccomodationNameWrapper = styled.div`
  height: 10%;
  width: 100%;
  color: #fff;
  font-weight: 800;
  padding: 1rem;
`;

const AccomodationInfoWrapper = styled(
  AccomodationNameWrapper
)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: space-around;
`;

const RatingLocationPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ReviewCountWrapper = styled.div`
  margin-left: 5px;
  font-size: 12px;
  font-weight: 600;
`;

const LowestPriceWrapper = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #ff4b5c;
`;

const AccomodationCard = ({
  id,
  name,
  representativeVideoId,
  rates,
  reviewCount,
  location,
  lowestPrice,
  otaURL,
  region,
  clicked,
}) => {
  return (
    <FullpageSection
      style={{
        backgroundColor: 'black',
      }}
    >
      <AccomodationNameWrapper>
        <div>
          {name}({region})
        </div>
      </AccomodationNameWrapper>
      <Iframe
        id={id}
        videoId={representativeVideoId}
        height="60%"
      />
      <Card
        style={{ backgroundColor: 'black', height: '30%' }}
      >
        <AccomodationInfoWrapper>
          <RatingLocationPriceWrapper>
            <div>
              <div>
                <RatingWrapper>
                  <StarRatings
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    rating={rates / 2}
                    starRatedColor="ffc93c"
                    numberOfStars={5}
                    name="rating"
                    starDimension={'15px'}
                    starSpacing={'2px'}
                  />
                  <ReviewCountWrapper>
                    {`(${reviewCount})`}
                  </ReviewCountWrapper>
                </RatingWrapper>
              </div>
              <div>{location.address}</div>
            </div>
            <LowestPriceWrapper>
              ₩ {lowestPrice}
            </LowestPriceWrapper>
          </RatingLocationPriceWrapper>
          <Button
            style={{
              backgroundColor: '#ff4b5c',
              border: 'none',
            }}
            block
            onClick={() => clicked(otaURL)}
          >
            숙소 예약하기
          </Button>
        </AccomodationInfoWrapper>
      </Card>
    </FullpageSection>
  );
};

export default AccomodationCard;
