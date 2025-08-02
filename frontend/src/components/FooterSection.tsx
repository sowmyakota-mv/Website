function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Data Artisans Consultancy</p>
          <p className="mb-2">London, United Kingdom</p>

          <div className="space-y-3 mt-4">
            <p>
              📞{" "}
              <a href="tel:+441234567890" className="hover:underline">
                +44 123 456 7890
              </a>
            </p>
            <p>
              📧{" "}
              <a href="mailto:info@dataartisans.com" className="hover:underline">
                info@dataartisans.com
              </a>
            </p>
            <p>
              💬{" "}
              <a
                href="https://wa.me/441234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
          <p>📍 London Office</p>
          <p className="text-gray-400">123 Baker Street, London, UK</p>
          <p className="mt-3">📍 Manchester Office</p>
          <p className="text-gray-400">45 Oxford Road, Manchester, UK</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Data Artisans Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
