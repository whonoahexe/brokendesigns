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
          {/* Title + description at top */}
          <div className="flex flex-col mt-16 mb-10">
            <p className="font-display text-[36px] md:text-[45px] tracking-tight text-white leading-tight">
              {card.title}
            </p>
            <p className="text-[18px] text-white opacity-60 mt-2">{card.description}</p>
          </div>

          {/* Images */}
          {(() => {
            const images = [card.showImg, card.showImg2, card.showImg3, card.showImg4].filter(Boolean)
            const isApp = card.category === "App"

            return (
              <div className={`grid gap-4 ${isApp ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 md:grid-cols-2"}`}>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`w-full bg-black-tertiary rounded-[22px] overflow-hidden ${isApp ? "aspect-[9/19]" : "aspect-video"}`}
                  >
                    <img
                      src={`/${img}`}
                      alt={`${card.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )
          })()}
        </>
      )}
    </div>
  )
}

export default Page
