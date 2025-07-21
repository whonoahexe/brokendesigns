import type { Metadata } from "next"
import { slugToTitle } from "@/utils"
import Works from "@/components/WorkData"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = Works.find((work) => work.title === slugToTitle(params.slug as string))

  if (!card) {
    return {
      title: "Graphic Design - brkn.",
      description: "Are you lost?",
    }
  }

  return {
    title: `${card.title} - brkn.`,
    description: card.description,
    keywords: ["graphic design", card.category, "brkn", "portfolio"],
  }
}

const Page = ({ params }: PageProps) => {
  const card = Works.find((work) => work.title === slugToTitle(params.slug as string))

  return (
    <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-40 md:mt-52">
      {card && (
        <>
          <div className="w-full aspect-auto bg-black-tertiary rounded-[22px] mt-16">
            <img src={`/${card.showImg}`} alt="Thumbnail" className="w-full h-full object-cover rounded-[22px]" />
          </div>

          {card.showImg2 && (
            <div className="w-full aspect-auto bg-black-tertiary rounded-[22px] mt-16">
              <img src={`/${card.showImg2}`} alt="Thumbnail" className="w-full h-full object-cover rounded-[22px]" />
            </div>
          )}

          <div className="flex flex-col mt-6">
            <p className="text-[45px] text-white">
              <span className="font-display tracking-tight">{card.title}</span>
            </p>
            <p className="text-[18px] text-white">{card.description}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Page
