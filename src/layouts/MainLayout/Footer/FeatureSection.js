import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const FeatureSection = () => {
  return (
    <Box className="py-30 py-lg-50 text-white">
      <Container
        className="py-xxl-50"
        maxWidth="lg"
        sx={{ maxWidth: "1070px !important" }}
      >
        <h2 className="d-flex align-items-center justify-content-center pt-10 pt-lg-0 mb-30">
          <img
            className="me-15"
            src="/static/images/icons/down-arrow.svg"
            alt="Arrow"
          />{" "}
          Features &amp; Highlights
        </h2>
        <Grid container spacing={0}>
          <Grid item md={6}>
            <div className="feature-item py-20 py-md-30 py-xxl-50">
              <div className="feature-item__icon me-15 me-md-20 me-xl-30">
                <img
                  className="img-fluid"
                  src="/static/images/icons/search.svg"
                  alt="Search Modes"
                />
              </div>
              <div className="feature-item__content">
                <h4 className="text-primary mb-5 fw-normal">Search Modes</h4>
                <h5 className="mb-0 fw-light">Exam, Subject, Keyword.</h5>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="feature-item py-20 py-md-30 py-xxl-50">
              <div className="feature-item__icon me-15 me-md-20 me-xl-30">
                <img
                  className="img-fluid"
                  src="/static/images/icons/baloon.svg"
                  alt="Seamless Searching"
                />
              </div>
              <div className="feature-item__content">
                <h4 className="text-primary mb-5 fw-normal">
                  Seamless Searching
                </h4>
                <h5 className="mb-0 fw-light">
                  Syllabus-based keyword mapping.
                </h5>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="feature-item py-20 py-md-30 py-xxl-50">
              <div className="feature-item__icon me-15 me-md-20 me-xl-30">
                <img
                  className="img-fluid"
                  src="/static/images/icons/fire.svg"
                  alt="Real Time Update"
                />
              </div>
              <div className="feature-item__content">
                <h4 className="text-primary mb-5 fw-normal">
                  Real Time Update
                </h4>
                <h5 className="mb-0 fw-light">
                  with new TNPSC <br className="d-none d-xxl-block" />
                  answer key release.
                </h5>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="feature-item py-20 py-md-30 py-xxl-50">
              <div className="feature-item__icon me-15 me-md-20 me-xl-30">
                <img
                  className="img-fluid"
                  src="/static/images/icons/papers.svg"
                  alt="Question Papers"
                />
              </div>
              <div className="feature-item__content">
                <h4 className="text-primary mb-5 fw-normal">Question Papers</h4>
                <h5 className="mb-0 fw-light">
                  Since 2016 &amp; 200+ relevant
                  <br className="d-none d-xxl-block" /> question papers.
                </h5>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="feature-item py-20 py-md-30 py-xxl-50">
              <div className="feature-item__icon me-15 me-md-20 me-xl-30">
                <img
                  className="img-fluid"
                  src="/static/images/icons/paper.svg"
                  alt="Free Sample"
                />
              </div>
              <div className="feature-item__content">
                <h4 className="text-primary mb-5 fw-normal">Free Sample</h4>
                <h5 className="mb-0 fw-light">10 newest questions PDF.</h5>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="feature-item py-20 py-md-30 py-xxl-50">
              <div className="feature-item__icon me-15 me-md-20 me-xl-30">
                <img
                  className="img-fluid"
                  src="/static/images/icons/infinite.svg"
                  alt="Unlimited Samples"
                />
              </div>
              <div className="feature-item__content">
                <h4 className="text-primary mb-5 fw-normal">
                  Unlimited Samples
                </h4>
                <h5 className="mb-0 fw-light">PDFs for all keywords.</h5>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="feature-item py-20 py-md-30 py-xxl-50">
              <div className="feature-item__icon me-15 me-md-20 me-xl-30">
                <img
                  className="img-fluid"
                  src="/static/images/icons/chart.svg"
                  alt="Creative Visualisation"
                />
              </div>
              <div className="feature-item__content">
                <h4 className="text-primary mb-5 fw-normal">
                  Creative Visualisation
                </h4>
                <h5 className="mb-0 fw-light">Year/Subject keyword charts.</h5>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSection;
