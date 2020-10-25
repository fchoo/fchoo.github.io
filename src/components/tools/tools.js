import React from "react"
import { ProfileType } from "../../types"

const Tools = ({ tools }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Platforms
    </h5>
    <ul className="flex-col mt-2">
      {tools.map(tool => (
        <li className="inline-block mb-2 mr-2 md:mr-2" key={tool}>
          <span className="inline-block subpixel-antialiased bg-lead px-2 py-1 font-header font-light text-lg md:text-xl text-lead-text">
            {tool}
          </span>
        </li>
      ))}
    </ul>
  </>
)

Tools.propTypes = {
  tools: ProfileType.tools,
}

export default Tools
