export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#24202066] text-gray-100 border-b border-transparent" style={{borderImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,239,231,0.4) 37%, rgba(255,239,231,0) 100%) 1'}}>
      <div className="container mx-auto px-10 lg:px-10 xl:px-10 2xl:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor"/>
          </svg>
          <span className="text-xl font-semibold">AuditUp</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#" className="text-gray-100 text-base hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-100 text-base hover:text-white transition-colors flex items-center gap-1">
            Use cases
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-100 text-base hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-gray-100 text-base hover:text-white transition-colors">Resources</a>
          <a href="#" className="text-gray-100 text-base hover:text-white transition-colors">FAQs</a>
        </nav>

        {/* CTA Button */}
        <button className="font-medium text-sm leading-none tracking-normal uppercase text-white bg-[#E62C58] py-5 px-8 transition-all duration-300 w-[155px] h-[42px] flex items-center justify-center rounded-none whitespace-nowrap" style={{boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 8px 8px 0px rgba(0, 0, 0, 0.03), 0px 17px 11px 0px rgba(0, 0, 0, 0.02), 0px 31px 13px 0px rgba(0, 0, 0, 0.01), 0px 48px 14px 0px rgba(0, 0, 0, 0)'}}>
          BOOK FREE DEMO
        </button>
      </div>
    </header>
  );
}