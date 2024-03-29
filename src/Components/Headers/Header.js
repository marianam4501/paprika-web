import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { logout } from "../../Slices/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import {
  BellIcon,
  MenuIcon,
  XIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Inicio", href: "/Feed", current: false },
  { name: "Agregar Receta", href: "/Add_recipe", current: false },
];

const userNavigation = [
  { name: "Mi perfil", href: "/Profile" },
  { name: "Configuración", href: "/" },
  { name: "Cerrar sesión", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const user  =  useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigationB = useNavigate();
  function logOut(item) {
    if (item.name === "Cerrar sesión") {
      dispatch(logout());
      navigationB("/");

    } else {

      navigationB(item.href); 
    }
  }
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-black">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    {/* Paprika logo */}
                    <div className="flex-shrink-0">
                      
                    <Link to="/Feed">
                      <img
                        className="object-cover relative h-14 w-22"
                        src="https://rb.gy/iq70yv"
                        alt="Logo Paprika"
                      />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-black text-white"
                                : "text-white hover:bg-light-orange hover:text-black",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-black p-1 rounded-full text-white hover:text-dark-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-orange focus:ring-black"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-black rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            
                              <span className="sr-only">View user menu</span>
                              <UserCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <label
                                    href={item.href}
                                    onClick={() => {
                                      logOut(item);
                                    }}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-black"
                                    )}
                                  >
                                    {item.name}
                                  </label>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-light-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true"  />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black text-white"
                          : "text-white hover:bg-dark-orange hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onClick={() => {
                        logOut(item);
                      }}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-dark-orange">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 object-cover relative rounded-full"
                        src={user.profile_picture}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        // href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-dark-orange"
                        onClick={() => {
                          logOut(item);
                        }}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
