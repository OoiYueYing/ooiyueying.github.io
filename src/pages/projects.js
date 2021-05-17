import React, { useMemo } from "react"
import PageLayout from "../components/layouts/PageLayout"
import { projects } from "../data/projects"
import { FiGithub } from "@react-icons/all-files/fi/FiGithub"
import { Image } from "../components/elements/Images"
export default function Projects() {
  const projectList = Object.values(projects).map(project => {
    console.log(project.cover.srcPath)
    const tagsElement = project.tags.map(tag => {
      return (
        <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-sm font-normal last:mr-0 mr-2 mb-2">
          {tag.name}
        </span>
      )
    })
    const links = project => {
      return (
        <a
          href={project.githubRepo.repo}
          className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs mr-5"
        >
          <FiGithub size={20} />
          Source code
        </a>
      )
    }
    return (
      <div className="transition duration-200 ease-in-out shadow-lg rounded-md bg-white flex flex-col overflow-hidden">
        <div className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-30 bg-cover bg-gray-200 overflow-hidden block cursor-pointer">
          <Image src={project.cover.srcPath} />
        </div>
        <div className="p-6" style={{ flex: 1 }}>
          <div className="mb-3">{project.name}</div>
          <div className="flex flex-row items-center mb-3 justify-between">
            <div className="text-xs text-gray-500">{project.date}</div>
          </div>
          <div className="mb-3 font-light">{project.summary}</div>
          {tagsElement}
          {links(project)}
        </div>
      </div>
    )
  })
  return (
    <PageLayout>
      <h1 className="text-3xl mb-6 uppercase font-extrabold">Projects</h1>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectList}
      </div>
    </PageLayout>
  )
}
