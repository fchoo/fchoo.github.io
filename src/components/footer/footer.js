import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { ProfileType } from "../../types"

const Footer = ({ name }) => (
  <footer className="bg-front mt-4 pt-4 pb-4 ">
    <div className="md:max-w-screen-sm lg:max-w-screen-xl flex flex-wrap mx-auto px-4 items-center justify-between">
      <a className="lg:w-1/3 lg:px-6 xl:px-12 text-back-light font-header text-xs">
        <b>
          &copy; {new Date().getFullYear()} {name}.
        </b>{" "}
        All rights reserved.
      </a>
      {/* <a
        className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start hover:opacity-75 transition-opacity duration-150"
        href="#"
      >
        <FaEnvelope className="inline-block h-6 w-6 lg:hidden" />
        <span className="hidden lg:block">Contact me</span>
      </a> */}
    </div>
  </footer>
)

Footer.propTypes = {
  name: ProfileType.name,
}

export default Footer
