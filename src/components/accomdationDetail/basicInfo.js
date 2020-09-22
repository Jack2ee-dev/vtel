import React from 'react';
import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const BasicInfoWrapper = styled.div`
  height: 50%;
`;

const AccomodationNameWrapper = styled.div`
  height: 10%;
  width: 100%;
  font-weight: 800;
  padding: 0 0.5rem;
`;

const AccomodationInfoWrapper = styled(
  AccomodationNameWrapper
)`
  margin-top: 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const OverallInfo = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const CheckInOutTime = styled.div`
  font-weight: 600;
  font-size: 12px;
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

const Reviewer = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const Review = styled.div`
  font-style: italic;
  font-weight: 400;
`;

const BasicInfo = ({
  name,
  rates,
  reviewCount,
  representativeReview,
  checkInTime,
  checkOutTime,
}) => {
  return (
    <BasicInfoWrapper>
      <AccomodationNameWrapper>
        {name}
      </AccomodationNameWrapper>
      <AccomodationInfoWrapper>
        <RatingLocationPriceWrapper>
          <OverallInfo>
            <div>
              <div>
                <CheckInOutTime>
                  체크인: {checkInTime}
                </CheckInOutTime>
                <CheckInOutTime>
                  체크아웃: {checkOutTime}
                </CheckInOutTime>
              </div>
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
            <Jumbotron
              style={{
                width: '100%',
                padding: '1rem',
                marginBottom: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div>
                <Review>
                  "{representativeReview.review}"
                </Review>
                <Reviewer>
                  - {representativeReview.postedBy}
                </Reviewer>
              </div>
            </Jumbotron>
          </OverallInfo>
        </RatingLocationPriceWrapper>
      </AccomodationInfoWrapper>
    </BasicInfoWrapper>
  );
};

export default BasicInfo;
