import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/advertising.webp",
    title: "Advertising and Promotions",
    metadata: "Billboards: Display advertisements for products and services.",
    tagColor: { bg: "#EEEDFE", text: "#3C3489", dot: "#7F77DD" },
    extraInfo: [
      { label: "Billboards", value: "Display advertisements for products and services." },
      { label: "Transit Advertising", value: "Ads in buses, trains, and at stations." },
      { label: "Retail Environments", value: "Promote sales and new arrivals." },
    ],
  },
  {
    _id: 2,
    mainImage: "/images/entertainment-sports.webp",
    title: "Entertainment & Sports",
    metadata: "Scoreboards: Display real-time game scores and stats.",
    tagColor: { bg: "#E1F5EE", text: "#085041", dot: "#1D9E75" },
    extraInfo: [
      { label: "Scoreboards", value: "Display real-time game scores and stats." },
      { label: "Event Information", value: "Share schedules and venue maps." },
      { label: "Advertising", value: "Promote sponsors and upcoming events." },
    ],
  },
  {
    _id: 3,
    mainImage: "/images/bfsi.webp",
    title: "BFSI",
    metadata: "Information Displays: Share financial news and updates.",
    tagColor: { bg: "#E6F1FB", text: "#0C447C", dot: "#378ADD" },
    extraInfo: [
      { label: "Information Displays", value: "Share financial news and updates." },
      { label: "Queue Management", value: "Inform customers of wait times." },
      { label: "Marketing Displays", value: "Promote products and services." },
    ],
  },
  {
    _id: 4,
    mainImage: "/images/restaurant.webp",
    title: "Restaurant",
    metadata: "Digital Menu Boards: Display dynamic menus and promotions.",
    tagColor: { bg: "#FAECE7", text: "#4A1B0C", dot: "#D85A30" },
    extraInfo: [
      { label: "Digital Menu Boards", value: "Display dynamic menus and promotions." },
      { label: "Order Status Displays", value: "Inform customers of order progress." },
      { label: "Interactive Kiosks", value: "Allow for self-service ordering." },
    ],
  },
  {
    _id: 5,
    mainImage: "/images/healthcare.webp",
    title: "Health",
    metadata: "Arrival/Departure Boards: Display real-time schedule information.",
    tagColor: { bg: "#FCEBEB", text: "#791F1F", dot: "#E24B4A" },
    extraInfo: [
      { label: "Arrival/Departure Boards", value: "Display real-time schedule information." },
      { label: "Wayfinding", value: "Guide patients through the facility." },
      { label: "Advertising", value: "Showcase health services and facilities." },
    ],
  },
  {
    _id: 6,
    mainImage: "/images/education.webp",
    title: "Education",
    metadata: "Digital Announcements: Share important school news and updates.",
    tagColor: { bg: "#FAEEDA", text: "#633806", dot: "#BA7517" },
    extraInfo: [
      { label: "Digital Announcements", value: "Share important school news and updates." },
      { label: "Interactive Learning Tools", value: "Provide educational content and interactive lessons." },
      { label: "Wayfinding", value: "Help students and visitors navigate the campus." },
    ],
  },
  {
    _id: 7,
    mainImage: "/images/corporate.webp",
    title: "Corporate",
    metadata: "Digital Noticeboards: Display company announcements and updates.",
    tagColor: { bg: "#F1EFE8", text: "#2C2C2A", dot: "#888780" },
    extraInfo: [
      { label: "Digital Noticeboards", value: "Display company announcements and updates." },
      { label: "Meeting Room Displays", value: "Manage room bookings and schedules." },
      { label: "Employee Engagement", value: "Share motivational content and company news." },
    ],
  },
  {
    _id: 8,
    mainImage: "/images/led.webp",
    title: "Retail",
    metadata: "Promotional Displays: Highlight special offers and new products.",
    tagColor: { bg: "#FBEAF0", text: "#4B1528", dot: "#D4537E" },
    extraInfo: [
      { label: "Promotional Displays", value: "Highlight special offers and new products." },
      { label: "Interactive Kiosks", value: "Provide product information and self-service options." },
      { label: "Wayfinding", value: "Help customers navigate the store." },
    ],
  },
  {
    _id: 9,
    mainImage: "/images/hospitality.webp",
    title: "Hospitality",
    metadata: "Digital Concierge: Offer information about hotel amenities and local attractions.",
    tagColor: { bg: "#EAF3DE", text: "#173404", dot: "#639922" },
    extraInfo: [
      { label: "Digital Concierge", value: "Offer information about hotel amenities and local attractions." },
      { label: "Interactive Wayfinding", value: "Guide guests through the property." },
      { label: "Event Displays", value: "Showcase schedules and information for conferences and events." },
    ],
  },
];

export default BlogData;