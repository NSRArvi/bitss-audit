import { useRouter } from "next/navigation";

function MobileDropdown({
  title,
  children,
  openDropdown,
  setOpenDropdown,
  setShowMenu,
}) {
  const isOpen = openDropdown === title;
  console.log(openDropdown);
  const navigate = useRouter();
  const handleContact = () => {
    navigate.push("/contact");
    setShowMenu(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : title)}
        className="w-full text-left font-medium">
        {title}
      </button>

      <div
        className={`ml-4 flex flex-col gap-2 text-sm transition-all duration-300 ${
          isOpen ? "max-h-60 mt-2" : "max-h-0 overflow-hidden"
        }`}>
        {children}
      </div>
      <button
        onClick={handleContact}
        className="w-fit mt-6 flex items-center justify-center gap-2.5 py-2 px-4 rounded-sm bg-primary/80 hover:bg-primary text-white text-sm font-semibold cursor-pointer hover:transition-all duration-300">
        Contact Us
      </button>
    </div>
  );
}

export default MobileDropdown;
