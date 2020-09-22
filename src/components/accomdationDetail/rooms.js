import React, { useState } from 'react';
import {
  CardColumns,
  Card,
  Carousel,
} from 'react-bootstrap';

const Rooms = ({ accomodationDetail }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <CardColumns>
      {accomodationDetail.rooms.map(
        ({ id, type, descriptions, imageUrl }) => (
          <Card key={id}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
            >
              {imageUrl.map((url, idx) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={url}
                    // src="https://pix8.agoda.net/hotelImages/127/1273677/1273677_17071908040054535727.jpg?s=375x210&ar=16x9"
                    alt={`${idx + 1}번 이미지`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body>
              <Card.Title>{type}</Card.Title>
              <Card.Text>
                {`전망: ${descriptions.view}`}
                <br />
                {descriptions.bedType}
                <br />
                {descriptions.roomSize}
                <br />
                {descriptions.shower ? '샤워실' : null}
                <br />
                {descriptions.smoking
                  ? '흡연 가능'
                  : '금연'}
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        )
      )}
    </CardColumns>
  );
};

export default Rooms;
