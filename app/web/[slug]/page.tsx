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
      title: "Web Design - brkn.",
      description: "Are you lost?",
    }
  }

  return {
    title: `${card.title} - brkn.`,
    description: card.description,
    keywords: ["web design", "ui/ux", card.category, "brkn", "portfolio"],
  }
}

const Page = ({ params }: PageProps) => {
  const card = Works.find((work) => work.title === slugToTitle(params.slug as string))

  return (
    <div className="container w-full max-w-[98%] md:max-w-[92%] px-6 md:px-12 mx-auto mt-40 md:mt-52">
      {card && (
        <>
          {(() => {
            const images = [card.showImg, card.showImg2, card.showImg3, card.showImg4].filter(Boolean)
            const isApp = card.category === "App"

            return (
              <div className={`${isApp ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col"} mt-16`}>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-full aspect-auto bg-black-tertiary rounded-[22px] ${!isApp && index > 0 ? "mt-16" : ""}`}
                  >
                    <img
                      src={`/${img}`}
                      alt={`${card.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-[22px]"
                    />
                  </div>
                ))}
              </div>
            )
          })()}

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
