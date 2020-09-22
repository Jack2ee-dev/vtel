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
              clicked={(accomdationId) =>
                clicked(accomdationId)
              }
            />
          )
        )}
      </FullPageSections>
    </Fullpage>
  );
};

export default AccomodationCards;
