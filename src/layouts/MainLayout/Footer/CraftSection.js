import React from "react";
import { Box, Container, Typography } from "@mui/material";

const CraftSection = () => {
  return (
    <Box className="footer" sx={{ padding: { xs: "3rem", md: "5rem" } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ maxWidth: "36rem", margin: "0 auto" }}>
          <Typography variant="body2" color="text.white">
            Crafted with <img src="/static/images/icons/heart.svg" alt="Love" />{" "}
            by <strong>A for AI</strong> team
          </Typography>
          <hr />
          <ul className="team-list m-0 p-0">
            <li>
              <a
                href="https://www.linkedin.com/in/aswinmurugesh"
                target="_blank"
              >
                <img src="/static/images/icons/cloud.svg" alt="Cloud" />
                Aswin
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/manojkumar-s-436b19110"
                target="_blank"
              >
                <img src="/static/images/icons/palette.svg" alt="Palette" />
                Manoj
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/elavarasanj/"
                target="_blank"
              >
                <img src="/static/images/icons/net.svg" alt="Net" />
                Prince
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sibi-k/" target="_blank">
                <img src="/static/images/icons/brain.svg" alt="Brain" />
                Sibi
              </a>
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default CraftSection;
