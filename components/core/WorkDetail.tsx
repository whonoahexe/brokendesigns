import React from "react"
import ShowcaseImage from "./ShowcaseImage"

interface WorkDetailProps {
  card: {
    title: string
    description: string
    showImg: string
    showImg2?: string
    showImg3?: string
    showImg4?: string
  }
}

const WorkDetail: React.FC<WorkDetailProps> = ({ card }) => {
  return (
    <>
      <ShowcaseImage src={card.showImg} alt={`${card.title} - Main showcase`} />

      {card.showImg2 && <ShowcaseImage src={card.showImg2} alt={`${card.title} - Secondary showcase`} />}

      {card.showImg3 && <ShowcaseImage src={card.showImg3} alt={`${card.title} - Third showcase`} />}

      {card.showImg4 && <ShowcaseImage src={card.showImg4} alt={`${card.title} - Fourth showcase`} />}

      <div className="flex flex-col mt-6">
        <p className="text-[45px] text-white">
          <span className="font-display tracking-tight">{card.title}</span>
        </p>
        <p className="text-[18px] text-white">{card.description}</p>
      </div>
    </>
  )
}

export default WorkDetail
