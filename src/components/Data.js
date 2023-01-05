
import AyremBanner from '../images/ayrem/ayremBg.png'
import ayrem from '../images/ayrem/image1.png'
import ayrem1 from '../images/ayrem/image2.png'
import ayrem2 from '../images/ayrem/image3.png'
import ayrem3 from '../images/ayrem/image4.png'
import Ayrem from "../images/ayrem.png"

import EthcoBanner from '../images/ethco/ethcoBg.png'
import ethco1 from '../images/ethco/image1.png'
import ethco2 from '../images/ethco/image2.png'
import ethco3 from '../images/ethco/image3.png'
import ethco from '../images/ethco/image.png'
import ethco4 from '../images/ethco/image4.png'
import Ethco from "../images/Ethco.png"


import TechtankBanner from '../images/techtank/TechtankBg.png'
import techtank from '../images/techtank/image1.png'
import techtank1 from '../images/techtank/image2.png'
import techtank2 from '../images/techtank/image3.png'
import techtank3 from '../images/techtank/image4.png'
import Techtank from "../images/Techtank.png"


import OwnerfiBanner from '../images/ownerfi/OwnerfiBg.png'
import ownerfi from '../images/ownerfi/image1.png'
import ownerfi1 from '../images/ownerfi/image2.png'
import ownerfi2 from '../images/ownerfi/image3.png'
import Ownerfi from "../images/Ownerfi.png"

export const datas = [
    {
        id: '1',
      Ban: `url(${AyremBanner})`,
      appName: "Ayrem",
      appBanner: "Building the webapp, landing page, Admin backend office for purchase and selliing of crypto, Giftcards and dataplans",
      appTitle:`Ayrem provides the safest and 
      trustworthy way for nigerians to
      purchase crypto, Giftcard and 
      dataplans`,
      appLink:`www.ayrem.net`,
      industry: `Cryptocurrency, Fintech`,
      language: `HTML / CSS / Javascript`,
      client:`Ayrem is a fast and seamless digital platform that provides access to exchanging digital assets like bitcoin and gift cards. We are redefining Africa’s digital currency exchange space by making your digital transactions easier. We bring you secure and trusted means in your digital asset exchanges for cash.`,
      role:`Designed the landing pages, the Ayrem web app and the Admin frontend app `,
      images:[ayrem, ayrem1, ayrem2, ayrem3]
    },
    {
        id: '2',
        Ban: `url(${EthcoBanner})`,
        appName: "Ethco",
        appBanner: "Building the landing pages, admin web app for helping Ethnic and Independent convenience store owners",
        appTitle:`Ethco help Ethnic and Independent convenience store owners with low technical skills go online in the easiest way possible`,
        appLink:`https://ethco.uk`,
        industry: `Foodtech, E-commerce`,
        language: `HTML,CSS, JAVASCRIPT, REACT/NEXT JS REDUX/ Ant Design/ Bootstrap and Airtable`,
        client:`Ethco help Ethnic and Independent convenience store owners with low technical skills go online in the easiest way possible. We are leveraging artificial intelligence (AI) to make it extremely easy for our stores to automate processes and shorten the process of creating and publishing products.`,
        role:`Designed the landing pages, worked on airtable api to receive data from forms. Worked on the admin frontend dashboard with react and next js`,
        images:[ethco, ethco1, ethco2, ethco3, ethco4]
      },
      {
        id: '3',
        Ban: `url(${TechtankBanner})`,
        appName: "Techtank",
        appBanner: "Building the website for a custom software development company",
        appTitle:`Techtank is a custom software development company. Creating products and services that make a difference.`,
        appLink:`https://techtanks.tech/`,
        industry: `Software services`,
        language: `REACT / Bootstrap / CSS / Emailjs-com`,
        client:`TechTanks is an IT solutions (Web, mobile app, custom software development, type approval, etc) company in Nigeria. We are a diverse group of digital strategists, technologists, critical thinkers, and thought leaders. We offer a comprehensive set of software development and technical services from requirements discovery to support and promote high quality and continuous improvement.`,
        role:`Designed the landing pages with reactjs and implemented form designs to email integration with emailjs.`,
        images:[techtank, techtank1, techtank2, techtank3]
      },
      {
        id: '4',
        Ban: `url(${OwnerfiBanner})`,
        appName: "Ownerfi",
        appBanner: "Building the website that provides homeowners and landlords a creative way to sell their property",
        appTitle:`Ownerfi is an innovative real estate company that provides homeowners and landlords a creative way to sell their property`,
        appLink:`www.ownerfi.com`,
        industry: `Proptech, Real Estate`,
        language: `REACT / Bootstrap / CSS / Firebase / Google places / Emailjs-com / Context api / Ant Design / ReactQuill`,
        client:`Ownerfi is an innovative real estate company that provides homeowners and landlords a creative way to sell their property and at the same time earn trues passive income without the stress of Property management. Our creative owner financing solution is a groundbreaking product for millions of American landlords and homeowners.`,
        role:`Developed project with reactjs, built a step form and manage data state with context api. Implement ReactQuill for rich text editor and address autocomplete using google place autocomplete.
        Used firebase for database stage and user authentication.`,
        images:[ownerfi, ownerfi1, ownerfi2]
      },
    ]

   export const data = [
      {
          id: '1',
        Ban: Ayrem,
        appName: "Ayrem",
        appBanner: "Building the webapp, landing page, Admin backend office for purchase and selliing of crypto, Giftcards and dataplans",
        appLink:`/project/Ayrem`,
      },
      {
          id: '2',
          Ban: Ethco,
          appName: "Ethco",
          appBanner: "Building the landing pages, admin web app for helping Ethnic and Independent convenience store owners",
          appLink:`/project/Ethco`
        },
        {
          id: '3',
          Ban: Techtank,
          appName: "Techtank",
          appBanner: "Building the website for a custom software development company",
          appLink:`/project/Techtank`
        },
        {
          id: '4',
          Ban: Ownerfi,
          appName: "Ownerfi",
          appBanner: "Building the website  that provides homeowners and landlords a creative way to sell their property",
          appLink:`/project/Ownerfi`
        },
      ]
  

  // export default data