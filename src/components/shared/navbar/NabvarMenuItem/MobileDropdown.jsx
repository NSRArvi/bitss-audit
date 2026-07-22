import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function MobileDropdown({
  title,
  children,
  openDropdown,
  setOpenDropdown,
  setShowMenu,
  onOpenDialog,
}) {
  const isOpen = openDropdown === title;
  const navigate = useRouter();
  const handleContact = () => {
    navigate.push("/contact");
    setShowMenu(false);
  };

  return (
    <>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : title)}
        className="w-full text-left font-medium"
      >
        {title}
      </button>

      <div
        className={`ml-4 flex flex-col gap-2 text-sm transition-all duration-300 ${
          isOpen ? "max-h-60 mt-2" : "max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button
          onClick={onOpenDialog}
          className="w-full sm:w-40 flex items-center justify-center gap-2.5 py-2 px-4 rounded-sm bg-primary/80 hover:bg-primary text-white text-sm font-semibold cursor-pointer transition-all duration-300"
        >
          Request a Quote
        </Button>
      </div>
    </>
  );
}

export default MobileDropdown;
