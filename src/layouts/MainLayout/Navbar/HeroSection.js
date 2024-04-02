import React from "react";
import { Box, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box className="py-50">
      <Container maxWidth="lg">
        <div className="hero-section text-center">
          <div className="d-flex align-items-center justify-content-between">
            <div className="tnspc-label">TNPSC Exams</div>
            <div className="ai-powered">
              <img
                className="img-fluid"
                src="/static/images/ai-powered.png"
                alt="AI Powered"
              />
            </div>
          </div>

          <h1 id="heroTitle">PYQs at your fingertips!</h1>
          <div className="hero-section__bottom mx-auto mt-15 mt-30">
            <hr />
            <div className="text-primary">
              <span className="d-inline-block bg-black py-5 px-10">
                <strong>தமிழ் &amp; English</strong>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default HeroSection;
