import { Service } from "@/types/service";
import contentCreationToolsIcon from "@/assets/icons/Content-Creation-Tools.svg";
import maintenanceSupportIcon from "@/assets/icons/Maintenance-Support.svg";
import installationDeploymentIcon from "@/assets/icons/Installation-Deployment.svg";
import contentCreationIcon from "@/assets/icons/Content-Creation.svg";
import hardwareSolutionsIcon from "@/assets/icons/Hardware-Solutions.svg";
import consultationPlanningIcon from "@/assets/icons/Consultation-Planning.svg";

const servicesData: Service[] = [
  {
    id: 1,
    icon: contentCreationToolsIcon,
    title: "Content Creation Tools",
    description:
      "Software tools and templates for creating and designing multimedia content, including videos, images, graphics, text, and animations. Content creation tools offer editing, customization, and branding features.",
  },
  {
    id: 2,
    icon: maintenanceSupportIcon,
    title: "Maintenance & Support",
    description:
      "Enjoy peace of mind with our proactive maintenance and round-the-clock support services, ensuring your digital signage remains operational and up-to-date.",
  },
  {
    id: 3,
    icon: installationDeploymentIcon,
    title: "Installation & Deployment",
    description:
      "Leave the technicalities to us. Our expert technicians ensure seamless installation and deployment of your digital signage solutions.",
  },
  {
    id: 4,
    icon: contentCreationIcon,
    title: "Content Creation",
    description:
      "Our team of creative professionals crafts compelling content that resonates with your audience and reinforces your brand message.",
  },
  {
    id: 5,
    icon: hardwareSolutionsIcon,
    title: "Hardware Solutions",
    description:
      "From displays and media players to mounts and accessories, we offer a wide selection of high-quality hardware options to suit any environment.",
  },
  {
    id: 6,
    icon: consultationPlanningIcon,
    title: "Consultation & Planning",
    description:
      "We work closely with you to understand your objectives and develop customized digital signage strategies tailored to your specific needs.",
  },
];

export default servicesData;
