/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    // PhoneIcon,
    // PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import useGaTRacker from '../utils/useGaTRacker'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]
// const callsToAction = [
//     { name: 'Watch Demo', href: '#', icon: PlayIcon },
//     { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {

    const gaEventTracker = useGaTRacker('Explore Page');

    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 align-middle align-middle">
                        <Link to="/">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">


                        <Link to="/explore" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Product
                        </Link>
                        <Link to="/featured" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Featured
                        </Link>
                        <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>More</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {resources.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                                                        <ul className="mt-4 space-y-4">
                                                            {recentPosts.map((post) => (
                                                                <li key={post.id} className="text-base truncate">
                                                                    <Link to={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                        {post.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            {' '}
                                                            View all posts <span aria-hidden="true">&rarr;</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        {/* <Link to="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </Link> */}
                        <Link to="" type="button" className=" ml-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                            Keranjang
                        </Link >
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <Link to="/" onClick={() => gaEventTracker('call')} className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </Link>

                                <Link to="/" onClick={() => gaEventTracker('call')} className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </Link>
                                {resources.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div>
                                <Link
                                    Link to="/" onClick={() => gaEventTracker('call')}
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </Link>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <Link to="/" onClick={() => gaEventTracker('call')} className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
