import Home from "./components/HomeNew/Home";

export const metadata = {
  title: "คอร์สสอนวิธีสร้าง Passive Income ออนไลน์ผ่าน PassiveCreator.net",
  description:
    "แห่งเรียนรู้วิธีสร้างรายได้ในช่องทางออนไลน์ต่างๆ รวมถึงการใช้งานโปรแกรมที่เกี่ยวข้อง เพื่อสร้างรายได้แบบ passively ผ่านเว็บไซต์ PassiveCreator.xxx ด้วยวิธีการและการเรียนการสอนที่มีประสิทธิภาพจากผู้มีประสบการณ์จริง ที่จะช่วยให้คุณมีรายได้ผ่านช่องทางออนไลน์อย่างสม่ำเสมอเพื่อนำไปสู่ความมั่นคงทางด้านการงานและการเงินในอนาคต",
  keywords:
    "Passive income , รายได้แบบ Passive ,สร้างรายได้ออนไลน์ ,วิธีสร้าง Passive Income ,การลงทุนออนไลน์,รายได้จากเว็บไซต์,การสร้างรายได้ passively,สร้างรายได้ผ่านอินเทอร์เน็ต  ",
  openGraph: {
    title: "คอร์สสอนวิธีสร้าง Passive Income ออนไลน์ผ่าน PassiveCreator.net ",
    description: "",
    url: "https://www.passivecreator.net",

    siteName: "PassiveCreator",
    images: [
      {
        url: "https://res.cloudinary.com/de6lgysk2/image/upload/v1699429761/yiu1tnlnoevnh1n55kc1.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "th-TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "คอร์สสอนวิธีสร้าง Passive Income ออนไลน์ผ่าน PassiveCreator.net",
    description:
      "แห่งเรียนรู้วิธีสร้างรายได้ในช่องทางออนไลน์ต่างๆ รวมถึงการใช้งานโปรแกรมที่เกี่ยวข้อง เพื่อสร้างรายได้แบบ passively ผ่านเว็บไซต์ PassiveCreator.xxx ด้วยวิธีการและการเรียนการสอนที่มีประสิทธิภาพจากผู้มีประสบการณ์จริง ที่จะช่วยให้คุณมีรายได้ผ่านช่องทางออนไลน์อย่างสม่ำเสมอเพื่อนำไปสู่ความมั่นคงทางด้านการงานและการเงินในอนาคต",
    images: [
      "https://res.cloudinary.com/de6lgysk2/image/upload/v1699429761/yiu1tnlnoevnh1n55kc1.jpg",
    ],
  },
};

export const revalidate = 180;

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log("porcess env =>", process.env.NEXT_PUBLIC_SERVER_URI);

  const pmBanner = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`,
    {}
  );
  const pmCategory = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`,
    {}
  );
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory]);
  const banner = await resBanner.json();
  const category = await resCategory.json();

  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || [],
  };

  return <Home webInfo={webInfo} />;
};

export default Page;
