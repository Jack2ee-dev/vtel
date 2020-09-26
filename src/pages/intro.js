import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Intro = ({ history }) => {
  const handleIntro = () => {
    localStorage.setItem('HIDE_INTRO', true);
    history.push('/');
  };

  return (
    <Card style={{ width: '100%', height: '100vh' }}>
      <Card.Img
        variant="top"
        src="https://vtel-images.s3.ap-northeast-2.amazonaws.com/intro.jpeg"
      />
      <Card.Body style={{ marginTop: '1rem' }}>
        <Card.Title
          style={{ fontSize: '24px', fontWeight: 800 }}
        >
          vTel 영상으로 보는 숙박 리뷰!
        </Card.Title>
        <Card.Text
          style={{
            fontSize: '20px',
            marginBottom: '3rem',
            lineHeight: 1.25,
          }}
        >
          브이로거가 만든 영상으로
          <br /> 호텔 구석구석을 살펴보세요
        </Card.Text>
        <Button
          style={{
            backgroundColor: '#ff4b5c',
            border: 'none',
          }}
          size="lg"
          block
          onClick={() => handleIntro()}
        >
          시작하기
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Intro;
