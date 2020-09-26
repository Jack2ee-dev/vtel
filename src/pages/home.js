import React, { useEffect, useState } from 'react';

import { database } from './../firebase';
import AccomodationCards from '../components/home/accomodationCards';

const Home = ({ history }) => {
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
          setAccomodations(snapshot.val());
        });
    } catch (error) {
      console.log(error);
    }
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
