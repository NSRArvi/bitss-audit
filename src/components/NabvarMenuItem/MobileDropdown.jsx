function MobileDropdown({ title, children, openDropdown, setOpenDropdown }) {
  const isOpen = openDropdown === title;
  console.log(openDropdown);

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
    </div>
  );
}

export default MobileDropdown;
