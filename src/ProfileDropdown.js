import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import { useAuthUser, useSignOut } from 'react-auth-kit'
import axios from './axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateAuth } from './Redux/AuthSlice'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const dispatch = useDispatch();
    const auth = useAuthUser();
    const signOut = useSignOut();
    const navigate = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get("_auth");
        console.log(token);
        try {
            await axios.post("http://127.0.0.1:8000/api/signout", null, {
                withCredentials : true,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    Authorization: `Bearer ${token}`,
                    'Accept': "application/json"
                }
            }).then(res => {
                console.log(res.data);
                signOut();
                dispatch(updateAuth());
                navigate('/Signin');
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md duration-300 bg-white px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    <FontAwesomeIcon icon={faUser} />
                    {auth() ? auth().name : null}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-none bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/user"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900 flex justify-between items-center w-full font-[FallingSkyRegular]' : 'text-gray-700',
                                        'px-4 py-2 text-sm flex justify-between items-center w-full font-[FallingSkyRegular]'
                                    )}
                                >
                                    View Account <FontAwesomeIcon icon={faUser} />
                                </Link>
                            )}
                        </Menu.Item>
                        <form method="POST" onSubmit={onSubmit}>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900 flex justify-between items-center w-full font-[FallingSkyRegular]' : 'text-gray-700',
                                            'px-4 py-2 text-sm flex justify-between items-center w-full font-[FallingSkyRegular]'
                                        )}
                                    >
                                        Sign out <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
