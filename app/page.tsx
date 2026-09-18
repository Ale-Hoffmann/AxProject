import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { Container, Typography } from "@mui/material";
import AxHeader from "./components/AxHeader";
import { newtheme } from "./theme";
import Carousel from "./components/Carousel";
import InfoPanels from "./components/InfoPanels";


export default function Home() {
  return (
    <Container disableGutters sx={{bgcolor: "primary.main" }}>
      <Carousel></Carousel>
      <InfoPanels></InfoPanels>
    </Container>
  )
}
