import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/Body/ProductCard";
import { Container, Typography } from "@mui/material";
import AxHeader from "./components/Header/AxHeader";
import { newtheme } from "./theme";
import Carousel from "./components/Body/Carousel";
import InfoPanels from "./components/Body/InfoPanels";
import InfoCard from "./components/Body/InfoCard";
import TalkToUsBtn from "./components/Body/TalkToUsBtn";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <div>
    <Container disableGutters sx={{bgcolor: "primary.main" }}>
    </Container>
    <Carousel></Carousel>
      
    <Container disableGutters sx={{bgcolor: "secondary.main" }}>
      <InfoPanels></InfoPanels>
      <InfoCard 
      title="esse é o mini titulo"
      subtitle=" aqui vai o textinhooooooo"
      imagePath="/AxImages/regataTemp.jpg" ></InfoCard>
      <TalkToUsBtn></TalkToUsBtn>
    </Container>
    <Footer></Footer>

    </div>
  )
}
