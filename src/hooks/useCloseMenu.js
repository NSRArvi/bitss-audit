import { useEffect } from "react";

const useCloseMenu = ({ isShow, onClose, menuRef }) => {
  useEffect(() => {
    if (!isShow) return;

    const handleClick = (e) => {
      const menuEl = menuRef.current;
      if (!menuEl) return;

      const clickedInsideMenu = menuEl.contains(e.target);

      const clickX = e.clientX;
      const rect = menuEl.getBoundingClientRect();
      const isLeftArea = clickX < rect.left;

      if (!clickedInsideMenu && isLeftArea) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isShow, onClose, menuRef]);
};
export default useCloseMenu;
