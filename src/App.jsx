import DataImage from "./data"
import { listTools } from "./data"
import { listProyek } from "./data"
import { useEffect, useState } from "react";



function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div  className="animate__animated animate__fadeInUp animate__delay-3s" data-aos-once="true">
        <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl neon-box">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md " loading="lazy" />
        <q className="text-[var(--cyber-blue)] neon-glow" >Ingatlah mengapa anda memulai. Tujuan Anda lebih besar dari rasa lelah anda saat ini</q>
        </div>
        <h1 className="neon-text font-bold mb-6 
    inline-block overflow-hidden whitespace-nowrap border-r-2 pr-2
    animate-typing animate-cursor
    md:text-2xl sm:text-4xl lg:text-5xl text-3xl "
      style={{
     "--typing-ch": "28ch",         
      "--typing-steps": 28,
              }}
              
    > Halo, saya Fahrul Fuguh Verdian</h1>
         
        <p className=" text-base/loose mb-6 opacity-70 text-[var(--cyber-blue)] neon-glow">Saya memiliki ketertarikan yang kuat di bidang Data Analysis dan Web Programming, 
        terutama pada pengembangan Machine Learning serta pembuatan Website interaktif. Ketertarikan ini telah saya tekuni selama lebih dari empat tahun,
         mencakup seluruh aspek dari analisis data hingga pengembangan aplikasi berbasis web.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1ZEPMRW_ENY8PprBXZFT1RX2ebRER-oq_/view?usp=drive_link" className="px-6 py-3 rounded-2xl neon-box hover:bg-[var(--cyber-blue)]/20 neon-glow">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className=" px-6 py-3 rounded-2xl neon-box hover:bg-[var(--cyber-blue)]/20 neon-glow">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s " loading="lazy"/>
    </div>
    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 neon-box rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
        <p className="text-base/loose mb-10 text-[var(--cyber-blue)] neon-glow opacity-80">
          👋 Halo! Saya adalah seorang Data Analyst & Web Developer dengan pengalaman lebih dari 4 tahun dalam mengolah data dan membangun aplikasi berbasis web.
          Saya menikmati proses mengubah data menjadi informasi yang bermanfaat dan menerapkannya ke dalam sistem berbasis Machine Learning serta Website interaktif.
          Saat ini, saya fokus pada pengembangan proyek yang menggabungkan analisis data, AI, dan teknologi web modern.
        </p>
        <div className="flex items-center justify-between ">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden " loading="lazy"/>
          <div className="flex items-center gap-6 text-[var(--cyber-accent)]">
            <div>
              <h1 className="text-4xl mb-1 neon-text"> 
                5<span className=" text-[var(--cyber-blue)]">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1 neon-text" > 
                4<span className=" text-[var(--cyber-blue)]">+</span>
              </h1>
              <p className="opacity-70" >tahun pengalaman</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug neon-text mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-[var(--cyber-blue)] neon-glow opacity-70" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"> berikut ini tool dipakai untuk mengejakan proyek</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 rounded-md neon-box hover:bg-[var(--cyber-blue)]/20 transition group "key={tool.id} data-aos="fade-up" data-aos-duration="750" 
          data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image" className="w-14 rounded bg-[var(--cyber-bg-light)] p-1" loading="lazy"/>
            <div>
              <h4 className="font-bold neon-text">{tool.nama}</h4>
              <p className="opacity-60 text-[var(--cyber-blue)]">{tool.ket}</p>
            </div>
          </div>
          ))}


          
        </div>
      </div>
    </div>
    {/* Tentang */}
    {/* proyek */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold neon-text mb-2 " data-aos="fade-up" data-aos-duration="1000" 
      data-aos-once="true" >Proyek</h1>
      <p className="text-base/loose text-center opacity-70 text-[var(--cyber-blue)] neon-glow" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"
      >Berikut ini beberapa proyek yang telah saya buat</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 neon-box rounded-md " data-aos="fade-up" data-aos-duration="1000" 
            data-aos-delay={proyek.dad} data-aos-once="true">
            <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
            <div>
              <h1 className="text-2xl font-bold my-4 neon-text">{proyek.nama}</h1>
              <p className="text-base/loose mb-4 text-[var(--cyber-blue)] opacity-80 neon-glow ">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool,index) => (
                  <p className="py-1 px-3 border  rounded-md neon-box hover:bg-[var(--cyber-blue)]/20" key={index}>{tool}</p>
          
                ))}
              </div>
              <div className="mt-8 text-center ">
                <a href={proyek.link} className="px-4 py-3 block neon-box rounded-lg hover:bg-[var(--cyber-blue)]/20 neon-glow" >lihat Project <i className={proyek.logo}></i></a>
                 
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>


    {/* proyek */}
    {/* Kontak */}
    {/* <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">kontak</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">mari terkonek
      </p>
      <form action="https://formsubmit.co/hero.hunter4th@gmail.com" method="POST" 
      className="bg-blue-400 p-10 sm:w-fit w-full mx-auto rounded-md" 
      autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama lengkap</label>
            <input type="text" name="nama" placeholder="Masukan Nama..." 
            className="border border-blue-700 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2" >
            <label className=" font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukan email..." 
            className="border border-blue-700 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold" >Pesan
            </label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" 
            placeholder="Pesan..." className="border border-blue-700 p-2 rounded-md" required>
            </textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border
            border-blue-800 hover:bg-blue-600" >Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div> */}

    {/* Kontak */}

    </>
    
  )
  
}

export default App
