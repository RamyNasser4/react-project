import { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux';
import { updateSize } from '../../Redux/SizeSlice';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    const [selected, setSelected] = useState("-Select Size-");
    const dispatch = useDispatch();
    useEffect(() => {
        if (selected != "-Select Size-"){
        dispatch(updateSize(selected));
        }
}, [selected])
return (
    <Menu as="div" className="relative ui-open:bg-red-500 inline-block text-left w-full">
        {({ open }) => (<>
            <div className='w-full text-left pb-4'>
                {open ?
                    <Menu.Button className="inline-flex w-full items-center font-[FallingSkyRegular] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-medium text-[#858585] shadow-sm ring-2 ring-inset ring-blue-600 hover:bg-gray-50">
                        {selected}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button> :
                    <Menu.Button className="inline-flex w-full items-center font-[FallingSkyRegular] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-medium text-[#858585] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {selected}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>}
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
                <Menu.Items className="absolute right-0 z-30 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    style={{
                                        backgroundColor: selected == "28 mm" ? '#2684FF' : "",
                                        color: selected == "28 mm" ? 'white' : ""
                                    }}
                                    onClick={() => setSelected("28 mm")}
                                    className={classNames(
                                        active ? 'bg-gray-100 font-[FallingSkyRegular] text-[1.15rem] text-gray-900 hover:bg-[#DEEBFF]' : 'text-gray-700 font-[FallingSkyRegular] text-[1.15rem] ',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    28 mm
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    style={{
                                        backgroundColor: selected == "36 mm" ? '#2684FF' : "",
                                        color: selected == "36 mm" ? 'white' : ""
                                    }}
                                    onClick={() => setSelected("36 mm")}
                                    className={classNames(
                                        active ? 'bg-gray-100 font-[FallingSkyRegular] text-[1.15rem] hover:bg-[#DEEBFF] text-gray-900' : 'text-gray-700 font-[FallingSkyRegular] text-[1.15rem]',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    36 mm
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    style={{
                                        backgroundColor: selected == "42 mm" ? '#2684FF' : "",
                                        color: selected == "42 mm" ? 'white' : ""
                                    }}
                                    onClick={() => setSelected("42 mm")}
                                    className={classNames(
                                        active ? 'bg-gray-100 font-[FallingSkyRegular] text-[1.15rem] hover:bg-[#DEEBFF] text-gray-900' : 'text-gray-700 font-[FallingSkyRegular] text-[1.15rem]',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    42 mm
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition></>)}

    </Menu>
)
}
