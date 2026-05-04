import { Product } from "@/types/product";
import accessoriesIcon from "@/assets/icons/Accessories.svg";
import accessoriesFillIcon from "@/assets/icons/Accessories-Fill.svg";
import mountingHardwareIcon from "@/assets/icons/Mounting-Hardware.svg";
import mountingHardwareFillIcon from "@/assets/icons/Mounting Hardware-fill.svg";
import interactiveTouchscreensIcon from "@/assets/icons/Interactive-Touchscreens.svg";
import interactiveTouchscreensFillIcon from "@/assets/icons/Interactive-Touchscreens-fill.svg";
import contentManagementSoftwareIcon from "@/assets/icons/Content-Management-Software.svg";
import contentManagementSoftwareFillIcon from "@/assets/icons/Content-Management-Software-fill.svg";
import mediaPlayersIcon from "@/assets/icons/Media-Players.svg";
import mediaPlayersFillIcon from "@/assets/icons/Media-Players-fill.svg";
import digitalSignageDisplaysIcon from "@/assets/icons/Digital-Signage-Displays.svg";
import digitalSignageDisplaysFillIcon from "@/assets/icons/Digital-Signage-Displays-fill.svg";

const productsData: Product[] = [
  {
    id: 1,
    icon: accessoriesIcon,
    fillIcon: accessoriesFillIcon,
    title: "Accessories",
    description:
      "Additional accessories such as digital signage enclosures, cables, connectors, power supplies, and mounting brackets to support the deployment and operation of digital signage displays.",
  },
  {
    id: 2,
    icon: mountingHardwareIcon,
    fillIcon: mountingHardwareFillIcon,
    title: "Mounting Hardware",
    description:
      "Secure mounting solutions for installing displays in various locations, including wall mounts, ceiling mounts, floor stands, and freestanding kiosks. Mounting hardware ensures proper installation and stability.",
  },
  {
    id: 3,
    icon: interactiveTouchscreensIcon,
    fillIcon: interactiveTouchscreensFillIcon,
    title: "Interactive Touchscreens",
    description:
      "Touch-enabled displays that allow users to interact with content through gestures, touch, and multi-touch capabilities. Interactive touchscreens are ideal for wayfinding, directories, and interactive presentations.",
  },
  {
    id: 4,
    icon: contentManagementSoftwareIcon,
    fillIcon: contentManagementSoftwareFillIcon,
    title: "Content Management Software (CMS)",
    description:
      "Robust software platforms for creating, scheduling, and managing content for digital signage displays. CMS solutions offer intuitive interfaces, content templates, scheduling tools, and real-time updates.",
  },
  {
    id: 5,
    icon: mediaPlayersIcon,
    fillIcon: mediaPlayersFillIcon,
    title: "Media Players",
    description:
      "Dedicated media players or digital signage players to playback content on displays. These players support different content formats and offer remote management capabilities.",
  },
  {
    id: 6,
    icon: digitalSignageDisplaysIcon,
    fillIcon: digitalSignageDisplaysFillIcon,
    title: "Digital Signage Displays",
    description:
      "High-quality commercial-grade displays available in various sizes and configurations, including indoor, outdoor, single-screen, and videowall displays.",
  },
];

export default productsData;
