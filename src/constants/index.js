import { Warehouse } from "lucide-react";
import { Wrench } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";

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

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: <Warehouse size={32} />,
    heading: "Installation",
    description:
      "Get your roll-up door installed within the day by our professional team, ensuring quick and hassle-free setup fit to your schedule.",
  },
  {
    icon: <ShieldCheck size={32} />,
    heading: "1 Year Warranty",
    description:
      "Enjoy peace of mind with our comprehensive 1-year warranty, covering any defects or issues with your roll-up door post-installation.",
  },
  {
    icon: <Wrench size={32} />,
    heading: "Repair",
    description:
      "Our expert technicians are ready to provide tailored repair services, addressing any issues to keep your roll-up doors functioning smoothly.",
  },
];

export const shutterTypes = [
  {
    title: "Galvalume Shutters",
    details:
      "The most economical and cost effective shutters, these heavy duty shutters are designed to provide maximum security to your establishments",
    slat: ["75mm C-type", "Available in Ga.24 | Ga.22 | Ga.18 thickness"],
    size: "Maximum of 7 meters width(single panel)\nMinimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Galvalume wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to commercial and retail stores, warehouse, loading bays, and factories",
  },
  {
    title: "Aluminum Shutters",
    details:
      "The most economical and cost effective shutters, these heavy duty shutters are designed to provide maximum security to your establishments",
    slat: ["75mm C-type", "Available in Ga.24 | Ga.22 | Ga.18 thickness"],
    size: "Maximum of 7 meters width(single panel)\nMinimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Aluminum wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to commercial and retail stores, clean rooms, and sotrage rooms",
  },
  {
    title: "Stainless Steel Shutters",
    details:
      "These shutter are designed to provide you with maximum security. Stainless steel adds elegance and strength compared to other shutters.",
    slat: ["75mm C-type", "Available in Ga.24 | Ga.22 | Ga.18 thickness"],
    size: "Maximum of 7 meters width(single panel)\nMinimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Stainless steel wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to commercial and retail stores, clean rooms, and sotrage rooms",
  },
  {
    title: "Aluminum Grilles Shutters",
    details:
      "Ideal for establishments which require security and ventilation while maintaining high level of visibility.",
    slat: [
      "Constructed from interlocking aluminum roud tubes and strip connector",
      "Inside these aluminum tube are metal shafting which gives the grilles strength for total security",
      "Available in venetian type design",
    ],
    size: "Maximum of 7 meters width(single panel)\nMinimum of 1 meter width(single panel)",
    optionalAccesories: [
      "Perforated curtains or vent holes for ventiliation purposes",
      "Wicket door for service entry",
    ],
    application:
      "Commonly used but not limited to stores inside the shopping malls, store fronts, and parking garage",
  },
  {
    title: "Polycarbonate Shutters",
    details:
      "These shutter are designed to provide security and transparency. It is best for advertising products even when the shops are closed, providing 80% vision inside the store.",
    slat: [
      "2mm thick UV-resistant, polycarbonate slats",
      "200 times stronger than glass of the same thickness",
    ],
    size: "Maximum of 5.80 meters width(single panel)\nMinimum of 1 meter width(single panel)",
    optionalAccesories: ["Wicket door for service entry"],
    application:
      "Commonly used but not limited to stores inside the shopping malls, banks, airports, and hospitals.",
  },
];
