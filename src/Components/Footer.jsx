import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <Container>
        <div className="grid grid-cols-5 gap-3 ">
          <div>
            <h3 className="text-white font-semibold mb-2">
              PH — Assignment System
            </h3>
            <p className="text-sm text-slate-300">
              PH Assignment system is a platform that centralizes, tracks, and
              manages requests or issues, converting them into unique
              "Assignment s" for efficient resolution and communication
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">University</h3>
            <p className="text-sm text-slate-300">About Us</p>
            <p className="text-sm text-slate-300">Our Mission</p>
            <p className="text-sm text-slate-300">Contact Administrator</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <p className="text-sm text-slate-300">Education & Services</p>
            <p className="text-sm text-slate-300">Student Stories</p>
            <p className="text-sm text-slate-300">Download Apps</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Information</h3>
            <p className="text-sm text-slate-300">Privacy Policy</p>
            <p className="text-sm text-slate-300">Terms & Conditions</p>
            <p className="text-sm text-slate-300">Join Us</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Social Links</h3>
            <p className="text-sm text-slate-300">@Ph — Assignment System</p>
            <p className="text-sm text-slate-300">@Ph — Assignment System</p>
            <p className="text-sm text-slate-300">@Ph — Assignment System</p>
            <p className="text-sm text-slate-300">support@ph.com</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-slate-700 text-center">
            © 2025 Ph — Assignment System. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
