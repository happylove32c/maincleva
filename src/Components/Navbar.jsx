import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
  } from "@nextui-org/navbar";
  import { Kbd } from "@nextui-org/kbd";
  import { Link } from "@nextui-org/link";
  import { Input } from "@nextui-org/input";
  import { link as linkStyles } from "@nextui-org/theme";
  
  import clsx from "clsx";
  
import { LuSearch } from "react-icons/lu";
import { Image } from "@nextui-org/react";
import { siteConfig } from "../siteConfig";
  
  export const Navbar = () => {
    const searchInput = (
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <LuSearch className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
    );
  
    return (
      <NextUINavbar maxWidth="xl" position="sticky" className="bg-transparent ">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <Link className="flex justify-start items-center gap-4" href="/">
              {/* <Logo /> */}
              <Image alt="img" height={120} src={"/clevaLogo.svg"} width={120} />
            </Link>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end">
          <ul className="hidden lg:flex gap-8 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-[#DBFB8E] data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
  
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <p>Contact</p>
        </NavbarContent>
  
        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg">
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    );
  };
  