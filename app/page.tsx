import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/Body/ProductCard";
import { Container, Typography } from "@mui/material";
import AxHeader from "./components/Header/AxHeader";
import { newtheme } from "./theme";
import Carousel from "./components/Body/Carousel";
import InfoPanels from "./components/Body/InfoPanels";


export default function Home() {
  return (
    <div>
    <Container disableGutters sx={{bgcolor: "primary.main" }}>
    </Container>
    <Carousel></Carousel>
      
    <Container disableGutters sx={{bgcolor: "secondary.main" }}><InfoPanels></InfoPanels></Container>
    </div>
  )
}
