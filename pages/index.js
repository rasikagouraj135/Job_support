import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/Carousel";
import { CssBaseline, Container, Typography } from "@mui/material";
import TrainingCards from "../components/Training";
import CardGrid from "../components/StatsSection";
import RequestCallback from "../components/Callback";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import JobCarousel from "../components/JobCarousel";
import HeroSection from "../components/Hero";
import AboutUs from "../components/About";

export default function Home() {
  return (
    <div className="h-full">
      <CssBaseline />
      <Head>
        <title>Job Support</title>
      </Head>
      <Navbar />
      <HeroSection id="home" /> {/* Add id for smooth scrolling */}
      <section id="job-support">
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, color: "#90caf9", fontWeight: "bold", mt: 7 }}
        >
          Our Job Support Technologies
        </Typography>
        <section id="job-support">
          <JobCarousel />
        </section>
      </section>
      <section id="about">
        <AboutUs id="about" />
      </section>
      <section >
        <CardGrid />
      </section>
      <section id="trainings">
        <TrainingCards />
      </section>
      <section id="reviews">
        <Carousel />
      </section>
      <section id="contact">
        <RequestCallback />
      </section>
      <Footer id="footer" />
    </div>
  );
}
