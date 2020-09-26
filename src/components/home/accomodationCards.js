import React from 'react';
import Fullpage, {
  FullPageSections,
} from '@ap.cx/react-fullpage';

import AccomodationCard from './accomodationCard/accomodationCard';

const AccomodationCards = ({
  accomodationData,
  clicked,
}) => {
  return (
    <Fullpage>
      <FullPageSections>
        {accomodationData.map(
          ({
            id,
            name,
            representativeVideoId,
            rates,
            reviewCount,
            location,
            lowestPrice,
            otaURL,
          }) => (
            <AccomodationCard
              key={id}
              id={id}
              accomdationId={id}
              name={name}
              representativeVideoId={representativeVideoId}
              rates={rates}
              reviewCount={reviewCount}
              location={location}
              lowestPrice={lowestPrice}
              otaURL={otaURL}
              // clicked={(accomdationId) =>
              //   clicked(accomdationId)
              // }
              clicked={(otaURL) => clicked(otaURL)}
            />
          )
        )}
      </FullPageSections>
    </Fullpage>
  );
};

export default AccomodationCards;
