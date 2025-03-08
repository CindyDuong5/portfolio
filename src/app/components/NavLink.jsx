import Link from "next/link";

const NavLink = ({ href, title, isActive, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick} // ✅ Close mobile menu on click
      className={`block py-2 pl-3 pr-4 rounded md:p-0 sm:text-xl ${
        isActive ? "text-blue-400 font-semibold" : "text-[#ADB7BE]"
      } hover:text-white transition`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
