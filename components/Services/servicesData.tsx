import { Service } from "@/types/service";
import contentCreationToolsImage from "@/assets/images/services_content-creation-tool.svg";
import maintenanceSupportImage from "@/assets/images/services_maintenance-support.svg";
import installationDeploymentImage from "@/assets/images/services_installation-deployment.svg";
import contentCreationImage from "@/assets/images/services_content-creation.svg";
import hardwareSolutionsImage from "@/assets/images/services_hardware-solutions.svg";
import consultationPlanningImage from "@/assets/images/services_consultation-planning.svg";

const servicesData: Service[] = [
  {
    id: 1,
    image: contentCreationToolsImage,
    title: "Content Creation Tools",
    description:
      "Software tools and templates for creating and designing multimedia content, including videos, images, graphics, text, and animations. Content creation tools offer editing, customization, and branding features.",
  },
  {
    id: 2,
    image: maintenanceSupportImage,
    title: "Maintenance & Support",
    description:
      "Enjoy peace of mind with our proactive maintenance and round-the-clock support services, ensuring your digital signage remains operational and up-to-date.",
  },
  {
    id: 3,
    image: installationDeploymentImage,
    title: "Installation & Deployment",
    description:
      "Leave the technicalities to us. Our expert technicians ensure seamless installation and deployment of your digital signage solutions.",
  },
  {
    id: 4,
    image: contentCreationImage,
    title: "Content Creation",
    description:
      "Our team of creative professionals crafts compelling content that resonates with your audience and reinforces your brand message.",
  },
  {
    id: 5,
    image: hardwareSolutionsImage,
    title: "Hardware Solutions",
    description:
      "From displays and media players to mounts and accessories, we offer a wide selection of high-quality hardware options to suit any environment.",
  },
  {
    id: 6,
    image: consultationPlanningImage,
    title: "Consultation & Planning",
    description:
      "We work closely with you to understand your objectives and develop customized digital signage strategies tailored to your specific needs.",
  },
];

export default servicesData;
