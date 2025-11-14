import HeroImage from "/assets/foto-porto5.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/Visual_Studio.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/Laravel.png";
import Tools10 from "/assets/tools/PHP.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/collab.png";
import Tools13 from "/assets/tools/Python.png";
import Tools14 from "/assets/tools/CSharp.png";
import Tools15 from "/assets/tools/TensorFlow.png";



export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools3,
    nama: "Visual studio",
    ket: "Code Editor",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools12,
    nama: "Google Collab",
    ket: "Code Editor",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools13,
    nama: "Python",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools10,
    nama: "PHP",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools14,
    nama: "C#",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools2,
    nama: "ReactJS",
    ket: "Framework",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools5,
    nama: "bootstrap",
    ket: "Framework",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools4,
    nama: "tailwind",
    ket: "Framework",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools7,
    nama: "nodejs",
    ket: "Framework",
    dad: "1400",
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "TensorFlow",
    ket: "Framework",
    dad: "1500",
  },
  {
    id: 15,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1600",
  },
];

import Proyek1 from "/assets/proyek/timingpoint.webp";
import Proyek2 from "/assets/proyek/sentimetn.webp";
import Proyek3 from "/assets/proyek/sraping data.webp";
import Proyek4 from "/assets/proyek/wbsite porto.webp";
import Proyek5 from "/assets/proyek/image 6.webp";
import Proyek6 from "/assets/proyek/ProyekDana.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Timing_point",
    desk: "Website ToDoList dengan 4 fitur berbeda di dalam dashbroad menggunakan laravel sebagai backend",
    tools: ["HTML", "CSS", "Javascript", "AOS","Laravel"],
    link:"https://github.com/fuguhverdian/FP-PemWeb",
    logo: "ri-github-fill ri-lg",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Sentiment Analisis",
    desk: "Project akhir untuk melakukan sentiment Analisis suatu hotel, tetapi untuk demo belum diterapkan",
    tools: ["Python", "pandas", "TensorFlow"],
    link:"https://github.com/fuguhverdian/Sentiment-Analysis",
    logo: "ri-github-fill ri-lg",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Scraping web hotel",
    desk: "Project untuk melakukan Scraping data di situs booking.com",
    tools: ["Python", "BeutifulSoup", "Selenium"],
    link:"https://github.com/fuguhverdian/web_scraping-for-booking-only-coments.com",
    logo: "ri-github-fill ri-lg",
    dad: "400",
  },
  
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Portfolio",
    desk: "Website Portofolio diri dengan menggunakan React dan TailwindCSS",
    tools: ["ReactJS", "TailwindCSS", "Bootstrap", "AOS"],
    link:"#",
    logo: "ri-github-fill ri-lg",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Playman - App music player",
    desk: "Music player berbasis android menggunakan bahasa C#",
    tools: ["C#"],
    link:"https://github.com/AldiPutra24/Music-Players",
    logo: "ri-github-fill ri-lg",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "UI/UX DANA",
    desk: "User Interface untuk dana sebagai project di semester lalu",
    tools: ["Figma"],
    link:"https://www.figma.com/proto/RouKjCU8qqmxnNBaE6bx5c/skecth?node-id=1-7&starting-point-node-id=1%3A7&t=XNyE46ktmnzR3hST-1",
    logo: "ri-figma-fill ri-lg",
    dad: "700",
  },
];
