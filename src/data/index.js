import {
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Building,
  Store,
  ShoppingBag,
  Warehouse,
  CircleParking,
  Landmark,
  Blinds,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import Pulse from "../components/Contact/Pulse";
import galvalume from "../assets/shutters/galvalume.webp";
import aluminum from "../assets/shutters/aluminum.webp";
import stainless from "../assets/shutters/stainless.webp";
import grilles from "../assets/shutters/grilles.webp";
import poly from "../assets/shutters/polycarbonate.webp";
import manualGalv1 from "../assets/projects/manual-galv-1.webp";
import manualGalv2 from "../assets/projects/manual-galv-2.webp";
import manualGalv3 from "../assets/projects/manual-galv-3.webp";
import manualGalv4 from "../assets/projects/manual-galv-4.webp";
import manualGalv5 from "../assets/projects/manual-galv-5.webp";
import manualGalv6 from "../assets/projects/manual-galv-6.webp";
import manualGalv7 from "../assets/projects/manual-galv-7.webp";
import manualGalv8 from "../assets/projects/manual-galv-8.webp";
import manualGalv9 from "../assets/projects/manual-galv-9.webp";
import manualGalv10 from "../assets/projects/manual-galv-10.webp";
import manualGalv11 from "../assets/projects/manual-galv-11.webp";
import manualGalv12 from "../assets/projects/manual-galv-12.webp";
import manualGalv13 from "../assets/projects/manual-galv-13.webp";
import manualGalv14 from "../assets/projects/manual-galv-14.webp";
import motorGalv1 from "../assets/projects/motor-galv-1.webp";
import motorGalv2 from "../assets/projects/motor-galv-2.webp";
import motorGalv3 from "../assets/projects/motor-galv-3.webp";
import motorGalv4a from "../assets/projects/motor-galv-4a.webp";
import motorGalv4b from "../assets/projects/motor-galv-4b.webp";
import motorGalv4c from "../assets/projects/motor-galv-4c.webp";
import motorGalv5 from "../assets/projects/motor-galv-5.webp";
import motorGalv6 from "../assets/projects/motor-galv-6.webp";
import motorGalv7 from "../assets/projects/motor-galv-7.webp";
import motorGalv8 from "../assets/projects/motor-galv-8.webp";
import motorGrilles1 from "../assets/projects/motor-grilles-1.webp";
import motorGrilles2 from "../assets/projects/motor-grilles-2.webp";
import combination from "../assets/projects/combination.webp";
import manualPoly1 from "../assets/projects/manual-poly-1.webp";
import motorPoly1 from "../assets/projects/motor-poly-1.webp";
import motorPoly2 from "../assets/projects/motor-poly-2.webp";
import one from "../assets/projects/infiniteSlider/1.webp";
import two from "../assets/projects/infiniteSlider/2.webp";
import three from "../assets/projects/infiniteSlider/3.webp";
import four from "../assets/projects/infiniteSlider/4.webp";
import five from "../assets/projects/infiniteSlider/5.webp";
import six from "../assets/projects/infiniteSlider/6.webp";
import seven from "../assets/projects/infiniteSlider/7.webp";
import eight from "../assets/projects/infiniteSlider/8.webp";
import nine from "../assets/projects/infiniteSlider/9.webp";

export const navItems = [
  { label: "About", href: "about", offset: -90 },
  { label: "Services", href: "services", offset: -80 },
  { label: "Projects", href: "projects", offset: -70 },
  { label: "Contact", href: "contact", offset: 0 },
];

export const aboutStats = [
  { data: 2500, symbol: "+", label: "Projects Completed" },
  { data: 97, symbol: "%", label: "Satisfaction Rate" },
  { data: 1000, symbol: "+", label: "Satisfied Clients" },
  { data: 25, symbol: "+", label: "Expert Installers" },
];

export const aboutLegacy = [
  { content: "Always building quality shutters" },
  { content: "Best fabrication service provider" },
  { content: "Use of high-quality imported materials" },
  { content: "Experienced roll-up door specialist" },
];

export const cardContent = [
  {
    heading: "Proven Expertise",
    content: "With over a decade of successful projects.",
  },
  {
    heading: "Quality Assurance",
    content: "Meticulous attention to detail and craftsmanship.",
  },
  {
    heading: "Customer Focus",
    content: "Effective, transparent, and collaborative",
  },
];

export const services = [
  {
    icon: <Blinds size={32} />,
    heading: "Installation",
    description:
      "Get your roll-up door installed within the day by our professional team, ensuring quick and hassle-free setup fit to your schedule.",
  },
  {
    icon: <ShieldCheck size={32} />,
    heading: "1 Year Warranty",
    description:
      "Worry less with our 1-year warranty, covering any defects or issues with your roll-up door post-installation.",
  },
  {
    icon: <Wrench size={32} />,
    heading: "Repair",
    description:
      "Our expert technicians are ready to provide tailored repair services, addressing any issues to keep your roll-up doors functioning smoothly.",
  },
];

export const images = [
  { photo: one },
  { photo: two },
  { photo: three },
  { photo: four },
  { photo: five },
  { photo: six },
  { photo: seven },
  { photo: eight },
  { photo: nine },
];

export const applicationTypes = [
  { content: "Commercial Buildings", icon: <Building /> },
  { content: "Retail Stores", icon: <Store /> },
  { content: "Inside Shopping Malls", icon: <ShoppingBag /> },
  { content: "Warehouse / Storage Room", icon: <Warehouse /> },
  { content: "Parking Garage", icon: <CircleParking /> },
  { content: "Banks, Airports, Hospitals etc. ", icon: <Landmark /> },
];

export const shutterTypes = [
  {
    image: galvalume,
    title: "Galvalume",
    details:
      "The most economical and cost effective shutters, these heavy duty shutters are designed to provide maximum security to your establishments.",
    slat: [
      "75mm C-type Galvalume",
      "Available in Ga.24 | Ga.22 | Ga.20 | Gauge 18 thickness",
    ],
    size: "Maximum of 7 meters width(single panel) & Minimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Galvalume wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to commercial and retail stores, warehouse, loading bays, and factories.",
  },
  {
    image: aluminum,
    title: "Aluminum",
    details:
      "The most economical and cost effective shutters, these heavy duty shutters are designed to provide maximum security to your establishments.",
    slat: ["75mm C-type Anodized Aluminum", "2.0mm thickness"],
    size: "Maximum of 7 meters width(single panel) & Minimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Aluminum wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to commercial and retail stores, clean rooms, and storage rooms.",
  },
  {
    image: stainless,
    title: "Stainless Steel",
    details:
      "These shutter are designed to provide you with maximum security. Stainless steel adds elegance and strength compared to other shutters.",
    slat: [
      "75mm C-type Stainless Steel",
      "Available in Ga.24 | Ga.22 | Ga.20 | Gauge 18 thickness",
    ],
    size: "Maximum of 7 meters width(single panel) & Minimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Stainless steel wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to commercial and retail stores, clean rooms, and storage rooms.",
  },
  {
    image: grilles,
    title: "Aluminum Grilles",
    details:
      "Ideal for establishments which require security and ventilation while maintaining high level of visibility.",
    slat: [
      "Constructed from interlocking aluminum roud tubes and strip connector",
      "Inside these aluminum tube are metal shafting which gives the grilles strength for total security",
      "Available in venetian type design",
    ],
    size: "Maximum of 7 meters width(single panel) & Minimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to stores inside the shopping malls, store fronts, and parking garage.",
  },
  {
    image: poly,
    title: "Polycarbonate",
    details:
      "These shutter are designed to provide security and transparency. It is best for advertising products even when the shops are closed, providing 80% vision inside the store.",
    slat: [
      "2mm thick UV-resistant, polycarbonate slats",
      "200 times stronger than glass of the same thickness",
    ],
    size: "Maximum of 5.80 meters width(single panel) & Minimum of 1 meter width(single panel)",
    optionalAccesories: ["Wicket door for service entry"],
    application:
      "Commonly used but not limited to stores inside the shopping malls, banks, airports, and hospitals.",
  },
];

export const operation = [
  {
    type: "Manual Operation",
    description:
      "Simple and reliable, manually operated roll-up doors are perfect for smaller openings with a maximum length of 3 meters. They require physical effort to open and close, making them ideal for areas where power is unavailable or not required.",
  },
  {
    type: "Motorized Operation",
    description:
      "Convenient and efficient, motorized roll-up doors offer automated control through push button and remote. With a minimum of 4 meters in length, this operation are also equipped with a chain operation for manual use during power outages, providing reliable access and security in all situations.",
  },
];

export const projectImages = [
  {
    id: 1,
    image: motorGalv1,
    title: "4 Sets Galvalume | Motor Operated",
    description: "at Coca-Cola Sta. Rosa Laguna",
  },
  {
    id: 2,
    image: manualGalv1,
    title: "9 Sets Galvalume | Manually Operated",
    description: "at Sindalan, CSFP",
  },
  {
    id: 3,
    image: motorPoly1,
    title: "3 Sets Polycarbonate | Motor Operated",
    description: "at Panipuan, CSFP",
  },
  {
    id: 4,
    image: motorPoly2,
    title: "4 Sets Polycarbonate & 1 Fixed Polycarbonate | Motor Operated",
    description: "at Sto. Tomas, Pampanga",
  },

  {
    id: 5,
    image: manualGalv2,
    title: "9 Projects Galvalume | Manually Operated",
    description: "at O!Save supermarket from various locations",
  },
  {
    id: 6,
    image: manualGalv5,
    title: "14 Panels Galvalume | Manually Operated",
    description: "at Dolores, CSFP",
  },
  {
    id: 7,
    image: motorGalv2,
    title: "Galvalum w/ peeophole | Motor Operated",
    description: "at San Agustin, CSFP",
  },

  {
    id: 8,
    image: manualGalv3,
    title: "21 Sets Galvalume | Manually Operated",
    description: "at La Plaza Mexico, Pampanga",
  },

  {
    id: 9,
    image: manualGalv6,
    title: "7 Panels Galvalume | Manually Operated",
    description: "at San Simon Pampanga",
  },
  {
    id: 10,
    image: motorGrilles2,
    title: "Aluminum Grilles | Motor Operated ",
    description: "at Rich Town Subdivision, CSFP",
  },

  {
    id: 11,
    image: motorGrilles1,
    title: "Aluminum Grilles | Motor Operated ",
    description: "at San Agustin, CSFP",
  },
  {
    id: 12,
    image: combination,
    title: "Galvalume and Grilles Combination w/ peephole ",
    description: "at Dept. of Agriculture Region III Office, SACOP, CSFP",
  },

  {
    id: 13,
    image: motorGalv4a,
    title: "4 Sets of Galvalume Shutter | Motor Operated (Left Side)",
    description: "at City of Balanga, Bataan",
  },
  {
    id: 14,
    image: motorGalv4b,
    title: "3 Sets Galvalume | Motor Operated (Back)",
    description: "at City of Balanga, Bataan",
  },
  {
    id: 15,
    image: motorGalv4c,
    title: "3 Sets Galvalume | Motor Operated (Front)",
    description: "at City of Balanga, Bataan",
  },
  {
    id: 16,
    image: motorGalv3,
    title: "Galvalume Shutter | Motor Operated",
    description: "at Quezon City",
  },
  {
    id: 17,
    image: manualGalv4,
    title: "Galvalume Shutter | Manually Operated",
    description: "at Bataan",
  },
  {
    id: 18,
    image: manualGalv7,
    title: "10 Sets Galvalume | Manually Operated",
    description: "at Bataan",
  },
  {
    id: 19,
    image: manualGalv11,
    title: "4 Sets Galvalume | Manually Operated",
    description: "at San Agusting, CSFP",
  },
  {
    id: 20,
    image: manualPoly1,
    title: "1 Set of Polycarbonate & Galvalume | Manually Operated ",
    description: "at Bacolor, Pampanga",
  },
  {
    id: 21,
    image: manualGalv10,
    title: "2 Sets Galvalume | Manually Operated",
    description: "at San Matias, Pampanga",
  },
  {
    id: 22,
    image: motorGalv8,
    title: "Galvalume Shutter | Motor Operated",
    description: "at San Rafael Mexico, Pampanga",
  },
  {
    id: 23,
    image: manualGalv9,
    title: "Galvalume Shutter | Manually Operated",
    description: "at Chick 'n Juicy San Nicolas, CSFP",
  },
  {
    id: 24,
    image: manualGalv8,
    title: "2 Panels Galvalume | Manually Operated",
    description: "at Chong's Chicken Inasal Sto. Niño, CSFP",
  },
  {
    id: 25,
    image: manualGalv12,
    title: "30 Panels Galvalume | Manually Operated",
    description: "at Mabalacat City, Pampanga",
  },
  {
    id: 26,
    image: manualGalv13,
    title: "2 Panels Galvalume | Manually Operated",
    description: "at Cebuana Lhuillier, Sindalan, CSFP",
  },
  {
    id: 27,
    image: motorGalv5,
    title: "2 Sets Galvalume w/ peephole | Motor Operated",
    description: "at Mabalacat City, Pampanga",
  },
  {
    id: 28,
    image: motorGalv6,
    title: "2 Sets Galvalume w/ peephole | Motor Operated",
    description: "at Mabalacat City, Pampanga",
  },
  {
    id: 29,
    image: motorGalv7,
    title: "7 Sets Galvalume w/ peephole | Motor Operated",
    description: "at Mariblo, Quezon City",
  },
  {
    id: 30,
    image: manualGalv14,
    title: "2 Sets Galvalum | Manually Operated",
    description: "at Magliman, CSFP",
  },
];

export const contacts = [
  {
    ping: <Pulse />,
    icon: <MapPin />,
    info: "542 Fernandino Street San Nicolas, City of San Fernando Pampanga, 2000",
    href: "https://maps.app.goo.gl/wM935raUFxiQTaPC6",
  },
  {
    ping: "",
    icon: <PhoneCall />,
    info: ["(+63) 922 830 4418 | ", "(+63) 915 235 9460"],
    href: "tel:+639228304418",
  },
  {
    ping: "",
    icon: <Mail />,
    info: ["cydelironworks@yahoo.com | ", "cydelrollupdoor@gmail.com"],
    href: "mailto:cydelrollupdoor@gmail.com",
  },
  {
    ping: "",
    icon: <Facebook />,
    info: "Cydel Roll Up Door Services",
    href: "https://www.facebook.com/profile.php?id=61552183514680",
  },
];
