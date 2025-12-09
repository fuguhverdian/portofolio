const Footer = () => {
  return (
    <footer className="
      mt-32 py-6 
      flex flex-col md:flex-row 
      items-center justify-between 
      gap-6 md:gap-0
      bg-[var(--cyber-bg-dark)]
    ">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold neon-text">
        Portofolio
      </h1>

      {/* Navigation */}
      <div className="flex gap-7">
        <a href="#beranda" className="neon-link text-lg">Beranda</a>
        <a href="#tentang" className="neon-link text-lg">Tentang</a>
        <a href="#proyek" className="neon-link text-lg">Proyek</a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <a href="https://github.com/fuguhverdian" target="_blank">
          <i className="ri-github-fill ri-2x neon-icon"></i>
        </a>

        <a href="https://www.instagram.com/fuguh_verdian/" target="_blank">
          <i className="ri-instagram-fill ri-2x neon-icon"></i>
        </a>

        <a href="https://www.linkedin.com/in/fuguh-verdian" target="_blank">
          <i className="ri-linkedin-fill ri-2x neon-icon"></i>
        </a>
      </div>

    </footer>
  )
}

export default Footer