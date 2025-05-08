import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PayBill</h3>
            <p className="text-gray-400">
              The easiest way to pay your utility bills in Bangladesh.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/bills" className="text-gray-400 hover:text-white">
                  Bills
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Billers</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white">Electricity</li>
              <li className="text-gray-400 hover:text-white"> Water</li>
              <li className="text-gray-400 hover:text-white">Gas</li>
              <li className="text-gray-400 hover:text-white">Telecom</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Business Avenue</p>
              <p>Dhaka 1212, Bangladesh</p>
              <p className="mt-2">Email: info@paybill.com</p>
              <p>Phone: +880 1234 567890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 PayBill. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
