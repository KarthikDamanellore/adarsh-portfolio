import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ContactsIcon from "@mui/icons-material/Contacts";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RoomIcon from "@mui/icons-material/Room";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import pgIcon from "../../src/assets/images/pg.png";
import ugIcon from "../../src/assets/images/ug.png";
import collgIcon from "../../src/assets/images/college.png";
import schoolIcon from "../../src/assets/images/school.png";
import htmlIcon from "../../src/assets/images/html.png";
import cssIcon from "../../src/assets/images/css.jpeg";
import javaScriptIcon from "../../src/assets/images/javascript.png";
import bootStrapIcon from "../../src/assets/images/bootsrap.png";
import jQueryIcon from "../../src/assets/images/jquery.png";
import reactJsIcon from "../../src/assets/images/reactjs.png";

export const menuData = [
    {
        title: "My Self",
        icon: <PersonOutlineIcon style={{ color: "#F4745C" }} />,
    },
    {
        title: "Education",
        icon: <SchoolIcon style={{ color: "#26D9DC" }} />,
    },
    {
        title: "Skills",
        icon: <PsychologyIcon style={{ color: "#F4D06C" }} />,
    },
    {
        title: "Download",
        icon: <FileDownloadIcon style={{ color: "#F70000" }} />,
        file: "https://drive.google.com/file/d/1nS-ugMDFB79mKFWtAqspu8R0miYbt0EA/view?usp=sharing",
    },
    {
        title: "Contact",
        icon: <ContactsIcon style={{ color: "#088803" }} />,
    },
];

export const contactUsData = [
    {
        title: "Email",
        icon: <EmailIcon style={{ color: "#F4745C" }} />,
        link: "mailto:damanelloreadarsh@gmail.com",
    },
    {
        title: "Phone",
        icon: <PhoneAndroidIcon style={{ color: "#26D9DC" }} />,
        link: "tel:+91 8555045741",
    },
    {
        title: "WhatsApp",
        icon: <WhatsAppIcon style={{ color: "#25D366" }} />,
        link: "https://wa.me/+91 8555045741",
    },
    {
        title: "LinkedIn",
        icon: <LinkedInIcon style={{ color: "#0077b5" }} />,
        link: "https://www.linkedin.com/in/adarsh-damanellore-6a7aa1244",
    },
    {
        title: "GitHub",
        icon: <GitHubIcon style={{ color: "#333" }} />,
        link: "https://github.com/KarthikDamanellore/adarshportfolio",
    },
    {
        title: "Venktagitri - Tirupati(Dist) - A.P - 524132",
        icon: <RoomIcon style={{ color: "#f2a60c" }} />,
    },
];

export const educationData = [
    {
        icon: pgIcon,
        graduation: "Master of Computer Applications (MCA)",
        aggregate: "88%",
        year: "Dec 2021-Oct 2023",
        instituteName: "Sri Venkateswara College Of Engineering (SVCE)",
    },
    {
        icon: ugIcon,
        graduation: "BSC (Computer Science)",
        aggregate: "84.45%",
        year: "June 2018 - March 2021",
        instituteName: "Vikrama Simhapuri University",
    },
    {
        icon: collgIcon,
        graduation: "Intermediate (MEC)",
        aggregate: "84.90%",
        year: "June 2016 - March 2018",
        instituteName: "AP Residential Junior College Venkatagiri",
    },
    {
        icon: schoolIcon,
        graduation: "SSC",
        aggregate: "66.50%",
        year: "June 2014 - March 2015",
        instituteName: "Adarsha Vidyalaya E.M School",
    },
];

export const skillsData = [
    {
        image: htmlIcon,
        title: "HTML",
        description:
            "Proficient in HTML for creating structured and semantic web content.",
    },
    {
        image: cssIcon,
        title: "CSS",
        description:
            "Skilled in CSS for designing visually appealing and responsive web pages.",
    },
    {
        image: javaScriptIcon,
        title: "Java Script",
        description:
            "Experienced in JavaScript for developing dynamic and interactive web applications",
    },
    {
        image: bootStrapIcon,
        title: "Boot Strap",
        description:
            "Proficient in Bootstrap for building responsive and mobile-first web designs.",
    },
    {
        image: jQueryIcon,
        title: "JQuery",
        description:
            "Experienced in jQuery for simplifying HTML DOM manipulation and event handling.",
    },
    {
        image: reactJsIcon,
        title: "React js",
        description:
            "Proficient in React.js for building modern, component-based web applications.",
    },
];
