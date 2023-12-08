
import Home from "./components/HomeNew/Home";


export const metadata = {
  title: 'PassiveCreator สถาบันสอนภาษาอังกฤษชั้นนำ',
  description: '',
  keywords : 'PassiveCreator ,   ',
  openGraph: {
    title: 'PassiveCreator ',
    description: '',
    url: 'https://www.passivecreator.net',
    
    siteName: 'PassiveCreator',
    images: [
      {
        url: 'https://res.cloudinary.com/de6lgysk2/image/upload/v1699429761/yiu1tnlnoevnh1n55kc1.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PassiveCreator สถาบันสอนภาษาอังกฤษชั้นนำ',
    description: 'เราคือสถาบันสอนภาษาอังกฤษชั้นนำโดยครูผู้เชี่ยวชาญกว่า 10 ปี',
    images: ['https://res.cloudinary.com/de6lgysk2/image/upload/v1699429761/yiu1tnlnoevnh1n55kc1.jpg'],
  },
}


export const revalidate = 180

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log('porcess env =>',process.env.NEXT_PUBLIC_SERVER_URI);
  
  const pmBanner = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`, {})
  const pmCategory = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`, {})
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory])
  const banner = await resBanner.json()
  const category = await resCategory.json()


  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || []
  }

  return (
    <Home webInfo={webInfo} />
  );
};

export default Page;
