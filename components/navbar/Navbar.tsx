import { navbardata } from "@/data/navbardata";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="absolute w-screen z-20">
      <nav className="flex flex-col justify-center items-center py-20">
        <div className="flex justify-between items-center w-[32rem] md:w-[38rem] lg:w-[45rem] py-2 border-b">
          <Link href="/">
            <h1 className="text-xl font-semibold">LOGO</h1>
          </Link>
          <div className="flex space-x-5">
            <div className="flex justify-center items-center space-x-2">
              <Phone size={16} fill="white" color="white" />
              <p className="text-sm">+91 1234567890</p>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <Mail size={16} color="white" />
              <p className="text-sm">Saffireconsultants0011@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-[32rem] md:w-[38rem] lg:w-[45rem] my-2">
          {navbardata.slice(0, 4).map(({ id, name, route }) => (
            <Link key={id} href={route} className="px-8 py-1 border-r">
              {name}
            </Link>
          ))}
          {navbardata.slice(4).map(({ id, name, route }) => (
            <Link key={id} href={route} className="px-8 py-1">
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
