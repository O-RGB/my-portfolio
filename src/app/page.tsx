import type { Metadata } from "next";
import Home from "../components/pages/home";
import NavBar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import PreloadAssets from "@/components/tools/preload";

// กำหนดค่าข้อมูลที่ใช้ซ้ำ ๆ
const PAGE_TITLE = "Phichayoot Boonton";
const PAGE_DESCRIPTION =
  "Portfolio นี้นำเสนอประวัติการทำงานและผลงานสำคัญของผม รวมถึงประสบการณ์และทักษะต่าง ๆ และความสามารถในการทำงาน";
const PAGE_IMAGE = "/images/banner/b-banner.png";
const SITE_URL = "https://www.yourwebsite.com";
const SITE_NAME = "Phichayoot Boonton";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: PAGE_IMAGE,
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

interface HomeAppProps {}

const HomeApp: React.FC<HomeAppProps> = ({}) => {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </>
  );
};

export default HomeApp;
