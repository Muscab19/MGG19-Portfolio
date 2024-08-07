import React from 'react';

function Header() {
  return (
    <div className="flex bg-gray-900 m-0 pl-14 py-4">
      <h2 className="font-bold text-3xl text-white">
        MGG<span className="text-yellow-500">19</span>
      </h2>
      <ul className="flex pl-[40%] pt-1 text-base text-gray-300 font-normal">
        <li className="pr-6"><a href="#home">HOME</a></li>
        <li className="pr-6"><a href="#about">ABOUT</a></li>
        <li className="pr-6"><a href="#skills">SKILLS</a></li>
        <li className="pr-6"><a href="#portfolio">PORTFOLIO</a></li>
        <li className="pr-6"><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  );
}

export default Header;
