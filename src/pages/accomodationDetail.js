import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { database } from './../firebase';
import BasicInfo from '../components/accomdationDetail/basicInfo';
import Location from '../components/accomdationDetail/location';
import Rooms from '../components/accomdationDetail/rooms';
import ReservationButton from '../components/accomdationDetail/reservationButton';
import RepresentativeVideo from '../components/accomdationDetail/representativeVideo';

const AccomodationDetailWrapper = styled.div`
  margin-bottom: 50px;
`;

const AccomodationDetail = ({ history, match }) => {
  console.log(match);
  const [accomodationData, setAccomodationData] = useState(
    null
  );
  const [
    accomodationDetail,
    setAccomodationDetail,
  ] = useState(null);

  const getAccomodations = async () => {
    try {
      await database
        .ref('accomodations')
        .on('value', (snapshot) => {
          setAccomodationData(
            filterAccomodation(snapshot.val())
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getAccomodationDetail = async () => {
    try {
      await database
        .ref('accomodationDetails')
        .on('value', (snapshot) => {
          setAccomodationDetail(
            filterAccomodationDetail(snapshot.val())
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  const filterAccomodation = (accomodations) => {
    const filteredAccomodation = accomodations.filter(
      (accomodation) =>
        Number(match.params.accomodationId) ===
        accomodation.id
    )[0];

    return filteredAccomodation;
  };

  const filterAccomodationDetail = (
    accomodationDetails
  ) => {
    const filteredAccomodationDetail = accomodationDetails.filter(
      (accomodationDetail) =>
        Number(match.params.accomodationId) ===
        accomodationDetail.accomodationId
    )[0];

    return filteredAccomodationDetail;
  };

  useEffect(() => {
    getAccomodations();
    getAccomodationDetail();
  }, []);

  return (
    <AccomodationDetailWrapper>
      {accomodationData ? (
        <RepresentativeVideo
          id={accomodationData.id}
          representativeVideoId={
            accomodationData.representativeVideoId
          }
        />
      ) : null}
      {accomodationData && accomodationDetail ? (
        <BasicInfo
          id={accomodationData.id}
          name={accomodationData.name}
          rates={accomodationData.rates}
          location={accomodationData.location}
          reviewCount={accomodationData.reviewCount}
          lowestPrice={accomodationData.lowestPrice}
          representativeReview={
            accomodationDetail.representativeReview
          }
          checkInTime={accomodationDetail.checkInTime}
          checkOutTime={accomodationDetail.checkOutTime}
        />
      ) : null}
      {accomodationData ? (
        <Location location={accomodationData.location} />
      ) : null}
      {accomodationDetail ? (
        <Rooms accomodationDetail={accomodationDetail} />
      ) : null}
      {accomodationDetail ? (
        <ReservationButton
          history={history}
          match={match}
          otaURL={accomodationDetail.otaURL}
        />
      ) : null}
    </AccomodationDetailWrapper>
  );
};

export default AccomodationDetail;
