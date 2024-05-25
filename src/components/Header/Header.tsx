import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { NavbarItem, Link, Button } from "@nextui-org/react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isIphone = pathname === "/iphone";
  const isMac = pathname === "/mac";
  const isAccessories = pathname === "/accessories";

  return (
    <Navbar maxWidth="xl">
      <NavbarBrand>
        <p className="font-bold text-inherit">iStation</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isHome}>
          <Link color={!isHome ? "foreground" : undefined} href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isIphone}>
          <Link color={!isIphone ? "foreground" : undefined} href="/iphone">
            iPhone
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isMac}>
          <Link color={!isMac ? "foreground" : undefined} href="mac">
            Mac
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isAccessories}>
          <Link
            color={!isAccessories ? "foreground" : undefined}
            href="/accessories"
          >
            Accesorios
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
