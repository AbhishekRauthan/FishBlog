import { ComponentProps, useState } from "react";
import tw, { styled } from "twin.macro";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/solid";

const NavButton = styled.button(() => [
  tw`h-16 w-16 rounded-full shadow-xl bg-gray-100 outline-none`,
]);

interface IconProps extends ComponentProps<"svg"> {
  isClosed?: boolean;
}

const IconClasses = tw`h-8 w-8 inline-block text-center`;

const CrossIcon = styled(XIcon)<IconProps>`
  ${({ isClosed }) => (isClosed ? tw`hidden` : IconClasses)}
`;

const MenuIcon = styled(MenuAlt3Icon)<IconProps>`
  ${({ isClosed }) => (!isClosed ? tw`hidden` : IconClasses)}
`;

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <>
      <header tw="fixed z-40 w-full bg-transparent">
        <nav tw="flex justify-end items-center container py-3 mx-auto">
          <NavButton onClick={() => setIsClosed(!isClosed)}>
            <CrossIcon isClosed={isClosed} />
            <MenuIcon isClosed={isClosed} />
          </NavButton>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
