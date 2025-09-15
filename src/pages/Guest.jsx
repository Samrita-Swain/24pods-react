import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCommentDots } from 'react-icons/fa';

const Guest = () => {
  return (
    <section>
        <div className="guest-banner d-flex align-items-center justify-content-center text-center">
      <h1 className="guest-title">Be Our Guest</h1>
    </div>
    <div className="guest-spots-wrapper py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title" style={{textSize:"35px"}}>From Guest Spots to Great Stories</h2>
          <p className="section-subtitle">
            Whether you want to tell your story or learn from others, we’ve got you covered.
          </p>
        </div>

        <Row className="g-4">
          <Col xs={12} md={6}>
            <div className="guest-card purple-card h-100">
              <h5>Your Consultant for Guest Spots</h5>
              <p style={{textAlign:"center"}}>
                We help you find the right podcasts to share your voice, connect with the right audiences,
                and grow your influence. From research to introductions, we handle the legwork so you can
                focus on showing up and shining.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="guest-card light-card h-100">
              <h5>Join Us on Inspire from Reality</h5>
              <p style={{textAlign:"center"}}>
                Our own podcast, hosted by Alaka, is where raw truth meets real stories. No filters.
                No sugar-coating. Just conversations that matter.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="guest-video-section">
      <video
        className="bg-video"
        src="/videos/garima-and-rachecl.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="overlay" />

      <div className="guest-video-content">
        <h1>Your Story. Our Studio. Zero Stress.</h1>
        <button className="join-btn">Join Us</button>
      </div>
    </div>
    <div className="inspire-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="image-wrapper">
              <img
                src="/images/one.png"
                alt="AI in Focus"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="section-title" style={{textSize:"35px"}}>Inspire from Reality</h2>
            <p>
              Alaka, our founder, believes you don’t need to fit in—you’re meant to stand out.
              Every person carries a unique set of traits shaped by the paths they’ve walked.
              That’s reality.
            </p>
            <p><strong className="highlight">That’s the naked truth.</strong> And somewhere out there,
              someone needs to hear your journey to find the courage for their own.
            </p>
            <p className="icon-text">
              <FaCommentDots className="icon" />
              If your story can spark a change, let’s share it.
            </p>
            <Button className="cta-btn mt-3">Checkout Yourself</Button>
          </Col>
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default Guest;
