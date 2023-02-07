/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import Logo from '../assets/images/Logo.svg';

export function NavBar() {
  return (
    <nav className="flex flex-col  items-center mt-4 space-y-4 container md:flex-row md:items-center md:justify-between md:container pt-6">
      <img className="w-[300px]" src={Logo} alt="Logo" />
      <div className="flex items-center space-x-6">
        <p className="text-base text-brown font-bold ml-4">菲 Todo List</p>
        <input type="button" className="text-white text-sm bg-primary py-1 px-4 font-light rounded-lg tracking-wider" value="登出" />
      </div>
    </nav>
  );
}
