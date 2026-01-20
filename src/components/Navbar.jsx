const Navbar = () => {
  return (
    <div className="navbar  shadow-sm px-20 py-4">
      <div className="flex-1">
        <h1 className="text-[16px] md:text-2xl font-bold">
          CS — Ticket System
        </h1>
      </div>
      <div className="flex">
        <ul className="menu menu-horizontal px-2 text-[16px]  hidden md:flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <button className="btn text-xs md:text-[17px] w-28 md:w-36 h-11 bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white border-none">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
