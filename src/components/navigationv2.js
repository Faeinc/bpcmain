/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ReceiptTaxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  PresentationChartBarIcon,
  BriefcaseIcon,
  OfficeBuildingIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { GatsbyImage } from 'gatsby-plugin-image'

const solutions = [
  {
    name: 'Business Law',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/practice-areas/business-law',
    icon: BriefcaseIcon,
  },
  {
    name: 'Commercial Real Estate',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/practice-areas/commercial-real-estate',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'Mergers & Acquisitions',
    description: "Connect with third-party tools that you're already using.",
    href: '/practice-areas/mergers-and-acquisitions',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Residential Real Estate',
    description: "Connect with third-party tools that you're already using.",
    href: '/practice-areas/residential-real-estate',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Tax, Wills & Estates Planning',
    description: "Connect with third-party tools that you're already using.",
    href: '/practice-areas/tax',
    icon: ReceiptTaxIcon,
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function returnParentMenus(menuItem){
  return menuItem.isChild === false;
}
function returnChildMenus(menuItem){
  return menuItem.isChild;
}
function returnPracticeAreas(menuItem){
  const parent = menuItem.parentId;
  if (parent.menupositionid===3){
    return menuItem;
  }
}
const Navigation = () => {

   const getData = graphql`
   query MenuItemsQuery {
  allContentfulMenuItems(sort: {order: ASC, fields: menupositionid}) {
    nodes {
      name
      hasChildren
      href
      isChild
      parentId {
        name
        menupositionid
      }
      menupositionid
    }
  }
  allContentfulBranding {
    edges {
      node {
        logoRed {
         gatsbyImageData(resizingBehavior: SCALE, height: 40, placeholder: TRACED_SVG)
          description
        }
      }
    }
  }
}

`

      const db = useStaticQuery(getData);
      const menuItems = db.allContentfulMenuItems.nodes;
      const parentNodes = menuItems.filter(returnParentMenus);
      const childNodes = menuItems.filter(returnChildMenus);
      const practiceAreaNodes = childNodes.filter(returnPracticeAreas)
      const logoImage = db.allContentfulBranding.edges[0].node.logoRed.gatsbyImageData

  return (
    <header>

      <Popover className="relative bg-white">
        <div
          className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-auto">
            <a href="/">
              <span className="sr-only">Beganyi Professional Corporation</span>
              <GatsbyImage className="h-8 w-auto sm:h-10" alt={db.allContentfulBranding.edges[0].node.description} image={logoImage}></GatsbyImage>

            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">

            <Popover.Button
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
            <a href="/about-us" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About Us
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>

                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>Practice Areas</span>
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
                    <Popover.Panel
                      className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div
                                className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>


            <a href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </a>
            <a href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact Us
            </a>
          </Popover.Group>
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
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">

                    {parentNodes.map((menuItem) => (

                      <a
                        key={menuItem.menupositionid}
                        href={menuItem.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >

                        <div
                          className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                          <BriefcaseIcon className="h-6 w-6" aria-hidden="true"/>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{menuItem.name}</div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {practiceAreaNodes.map((menuItem) => (
                    <a key={menuItem.menupositionid} href={menuItem.href} className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {menuItem.name}
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

    </header>
  )

}
export default Navigation
