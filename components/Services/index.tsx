import Image from "next/image";
import servicesBanner from "../../assets/images/services.svg";
import PageHero from "../Common/PageHero";
import imgContentCreationTools from "../../assets/images/content-creation-tool.svg";
import imgMaintenanceSupport from "../../assets/images/maintenance-support.svg";
import imgInstallationDeployment from "../../assets/images/installation-deployment.svg";
import imgContentCreation from "../../assets/images/content-creation.svg";
import imgHardwareSolutions from "../../assets/images/hardware-solutions.svg";
import imgConsultationPlanning from "../../assets/images/consultation-planning.svg";

const promoServices = [
  { image: imgContentCreationTools, title: "Content Creation Tools", description: "Software tools and templates for creating and designing multimedia content, including videos, images, graphics, text, and animations. Content creation tools offer editing, customization, and branding features." },
  { image: imgMaintenanceSupport, title: "Maintenance & Support", description: "Enjoy peace of mind with our proactive maintenance and round-the-clock support services, ensuring your digital signage remains operational and up-to-date." },
  { image: imgInstallationDeployment, title: "Installation & Deployment", description: "Leave the technicalities to us. Our expert technicians ensure seamless installation and deployment of your digital signage solutions." },
  { image: imgContentCreation, title: "Content Creation", description: "Our team of creative professionals crafts compelling content that resonates with your audience and reinforces your brand message." },
  { image: imgHardwareSolutions, title: "Hardware Solutions", description: "From displays and media players to mounts and accessories, we offer a wide selection of high-quality hardware options to suit any environment." },
  { image: imgConsultationPlanning, title: "Consultation & Planning", description: "We work closely with you to understand your objectives and develop customized digital signage strategies tailored to your specific needs." },
];

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="mx-auto px-8">
        <PageHero
          badge="Our Services"
          heading="End-to-End Digital Signage"
          accentText="Solutions"
          description="From concept to installation, SignEdge delivers complete signage services tailored to your brand."
          accent="#F4511E"
          accentMuted="rgba(244,81,30,0.12)"
          right={
            <Image
              src={servicesBanner}
              alt="Services"
              width={320}
              height={216}
            />
          }
        />


        {/* Service rows — separate dark section */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {promoServices.map((s, i) => (
            <div
              key={i}
              style={{ background: "var(--gradient-dark)" }}
              className="group flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl px-10 py-10 md:flex-row"
            >
              <div className="flex w-full items-center justify-center md:w-1/2">
                <Image src={s.image} alt={s.title} className="w-full object-contain" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="mb-2 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-orange-500">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
