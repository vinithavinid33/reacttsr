function Footer() {
  return (
    <footer className="bg-blue-950 dark:bg-black w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto font-body text-sm">

        {/* COLUMN 1 */}
        <div className="md:col-span-1">
          <span className="text-xl font-bold text-white mb-4 block font-headline">
            TSR Groups
          </span>

          <p className="text-slate-300 leading-relaxed mb-6">
            A legacy of building excellence in Vellore. We specialize in
            high-quality residential and commercial construction.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-on-tertiary-container transition-colors"
            >
              <span className="material-symbols-outlined text-lg">
                share
              </span>
            </a>

            <a
              href="#"
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-on-tertiary-container transition-colors"
            >
              <span className="material-symbols-outlined text-lg">
                public
              </span>
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="md:col-span-1">
          <h6 className="text-white font-headline font-bold mb-6 text-base">
            Quick Links
          </h6>

          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="md:col-span-1">
          <h6 className="text-white font-headline font-bold mb-6 text-base">
            Services
          </h6>

          <ul className="space-y-4">
            <li>
              <a href="#" className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors">
                Residential
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors">
                Commercial
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors">
                Renovation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-300 hover:text-white hover:underline decoration-amber-500 underline-offset-4 transition-colors">
                Consultancy
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="md:col-span-1">
          <h6 className="text-white font-headline font-bold mb-6 text-base">
            Newsletter
          </h6>

          <p className="text-slate-300 mb-4">
            Stay updated with our latest project developments.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-slate-800 border-none px-4 py-2 w-full text-white rounded-l-sm focus:ring-1 focus:ring-on-tertiary-container outline-none"
            />

            <button className="bg-on-tertiary-container px-4 py-2 rounded-r-sm hover:bg-white hover:text-primary transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
        <p>© 2024 TSR Groups. Building Strong Foundations for Your Future.</p>

        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;