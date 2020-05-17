import React from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { ProjectType } from "../../types"

const ProjectIcon = ({ icon, url }) => (
  // <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back"
  <span className="text-back py-1 mt-1 "
  href={url}>
    {url && (
      <a
        className="text-front underline hover:opacity-75 transition-opacity duration-150"
        href={url}
        rel="noreferrer noopener"
        target="_blank"
      >
        {icon === "github" ? (
          <FaGithub className="w-4 h-4" />
        ) : (
          <FaExternalLinkAlt className="w-4 h-4" />
        )}
      </a>
    )}
  </span>
)

ProjectIcon.propTypes = {
  icon: ProjectType.icon,
  url: ProjectType.url
}

export default ProjectIcon
