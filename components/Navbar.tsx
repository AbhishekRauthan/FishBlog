import { useState } from "react";
import tw, { styled } from "twin.macro";

const NavButton = styled.button(() => [
  tw`h-16 w-16 rounded-full shadow-lg bg-gray-100 outline-none`
]);

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true)
  return (
    <>
      <header tw="fixed z-40 w-full bg-transparent">
        <nav tw="flex justify-end items-center container py-3 px-5 mx-auto">
          <NavButton onClick={()=> setIsClosed(!isClosed)}></NavButton>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
