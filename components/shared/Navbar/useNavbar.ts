import { useEffect, useRef, useState } from 'react';

const useNavbar = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const closeDropdown = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', (e) => closeDropdown(e));

    return () =>
      window.removeEventListener('mousedown', (e) => closeDropdown(e));
  }, [isDropdownOpen]);

  return { isDropdownOpen, setIsDropDownOpen, ref };
};

export default useNavbar;
