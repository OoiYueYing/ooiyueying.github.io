import React from "react"
import PageLayout from "../components/layouts/PageLayout"
import { StaticImage } from "gatsby-plugin-image"
import { profile } from "../constants/siteMeta"
import { RiComputerFill } from "@react-icons/all-files/ri/RiComputerFill"
import { FiMapPin } from "@react-icons/all-files/fi/FiMapPin"

export default function Home() {
  const avatarElement = (
    <div className="mr-0 mb-6 sm:mr-6 sm:mb-0">
      <StaticImage
        src="../images/headshot(YY).jpg"
        alt="Ooi Yue Ying"
        className="w-96 h-96 rounded-full overflow-hidden"
      />
    </div>
  )

  const userNameElement = (
    <div className="flex flex-row text-center text-3xl">
      <h1 className="mb-1 uppercase font-extrabold">
        {profile.lastName + " " + profile.firstName}
      </h1>
    </div>
  )

  const positionElement = (
    <div className="text-3xl mb-3 font-light text-gray-500 flex flex-row items-center">
      <RiComputerFill className="mr-1 w-8 h-8" />
      {profile.position}
    </div>
  )

  const summaryLinesElement = (
    <div className="text-3xl mb-3 font-light">{profile.summary}</div>
  )

  const locationElement = (
    <div className="text-3xl mb-3 text-gray-500">
      <div className="flex flex-row items-center font-light">
        <FiMapPin className="mr-1 w-8 h-8  " />
        <div>{profile.location.name}</div>
      </div>
    </div>
  )

  const tagsElement = profile.tags.map(tag => {
    return (
      <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-3xl font-normal last:mr-0 mr-2 mb-2">
        {tag.name}
      </span>
    )
  })

  return (
    <PageLayout>
      <div className="flex flex-col items-center sm:flex-row mb-12">
        {avatarElement}
        <div className="flex flex-col justify-center items-center sm:items-start">
          {userNameElement}
          {positionElement}
          {summaryLinesElement}
          {locationElement}
          <div className="mb-6">{tagsElement}</div>
        </div>
      </div>
      <div>
        <p className="font-light text-3xl">
          Hi everyone! I'm Yue Ying. I am working as a full-time software
          engineer. I hope to use this space to document my progress of my
          career journey. The contents on this website is not limited to just
          Software Engineering. Feel free to connect with me over linkedin or email!
        </p>
      </div>
    </PageLayout>
  )
}
