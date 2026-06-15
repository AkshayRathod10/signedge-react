import { Product } from "@/types/product";
import accessoriesImage from "@/assets/images/Accessories-01.svg";
import mountingHardwareImage from "@/assets/images/product_mounting-hardware.svg";
import interactiveTouchscreensImage from "@/assets/images/product_interactive-touchscreen.svg";
import contentManagementSoftwareImage from "@/assets/images/product_cms.svg";
import mediaPlayersImage from "@/assets/images/product_media-player.svg";
import digitalSignageDisplaysImage from "@/assets/images/product_led.svg";

const productsData: Product[] = [
  {
    id: 1,
    image: mountingHardwareImage,
    title: "Mounting Hardware",
    description:
    "Secure mounting solutions for installing displays in various locations, including wall mounts, ceiling mounts, floor stands, and freestanding kiosks. Mounting hardware ensures proper installation and stability.",
  },
  {
    id: 2,
    image: interactiveTouchscreensImage,
    title: "Interactive Touchscreens",
    description:
      "Touch-enabled displays that allow users to interact with content through gestures, touch, and multi-touch capabilities. Interactive touchscreens are ideal for wayfinding, directories, and interactive presentations.",
  },
  {
    id: 3,
    image: contentManagementSoftwareImage,
    title: "Content Management Software (CMS)",
    description:
      "Robust software platforms for creating, scheduling, and managing content for digital signage displays. CMS solutions offer intuitive interfaces, content templates, scheduling tools, and real-time updates.",
  },
  {
    id: 4,
    image: mediaPlayersImage,
    title: "Media Players",
    description:
      "Dedicated media players or digital signage players to playback content on displays. These players support different content formats and offer remote management capabilities.",
  },
  {
    id: 5,
    image: digitalSignageDisplaysImage,
    title: "Digital Signage Displays",
    description:
    "High-quality commercial-grade displays available in various sizes and configurations, including indoor, outdoor, single-screen, and videowall displays.",
  },
  {
    id: 6,
    image: accessoriesImage,
    title: "Accessories",
    description:
      "Additional accessories such as digital signage enclosures, cables, connectors, power supplies, and mounting brackets to support the deployment and operation of digital signage displays.",
  },
];

export default productsData;
