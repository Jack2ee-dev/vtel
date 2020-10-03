import React, { useEffect, useState } from 'react';
import qs from 'query-string';

import { database } from './../firebase';
import AccomodationCards from '../components/home/accomodationCards';

const Home = ({ history, match, location }) => {
  const [accomodations, setAccomodations] = useState([]);

  // const moveToAccomodationDetailPage = (accomodationId) => {
  //   history.push(`/accomodation-detail/${accomodationId}`);
  // };

  const goToOta = (otaURL) => {
    window.open(otaURL);
  };

  const getAccomodations = async () => {
    try {
      await database
        .ref('accomodations')
        .on('value', (snapshot) => {
          setAccomodations(
            changeAccomodationSequenceByFilter(
              snapshot.val()
            )
          );
        });
    } catch (error) {
      console.log(error);
    }
  };

  const changeAccomodationSequenceByFilter = (
    accomodations
  ) => {
    const parsed = qs.parse(location.search);
    const filteredByRegion = parsed.region
      ? accomodations.filter(
          (accomodation) =>
            accomodation.region === parsed.region
        )
      : accomodations;
    const filteredByHotel = parsed.hotel
      ? filteredByRegion.filter(
          (accomodation) =>
            accomodation.name === parsed.hotel
        )
      : filteredByRegion;

    let changedAccomodationSeqence = filteredByHotel;
    for (let i = 0; i < accomodations.length; i++) {
      if (
        changedAccomodationSeqence.filter(
          (accomodation) =>
            accomodation.id === accomodations[i].id
        ).length <= 0
      ) {
        changedAccomodationSeqence.push(accomodations[i]);
      }
    }

    return changedAccomodationSeqence;
  };

  const redirectToIntro = () => {
    if (!localStorage.getItem('HIDE_INTRO')) {
      history.push('/intro');
    }
  };

  useEffect(() => {
    redirectToIntro();
  }, []);

  useEffect(() => {
    getAccomodations();
    // filterAccomodations();
  }, []);

  return (
    <>
      {accomodations.length > 0 ? (
        <AccomodationCards
          accomodationData={accomodations}
          // clicked={(accomodationId) =>
          //   moveToAccomodationDetailPage(accomodationId)
          // }
          clicked={(otaURL) => goToOta(otaURL)}
        />
      ) : null}
    </>
  );
};

export default Home;
