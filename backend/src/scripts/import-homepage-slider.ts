import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'
import { DEFAULT_MARKETING_SLIDES } from '../../../data/marketing-slides'

async function main() {
  const payload = await getPayload({ config })

  const current = await payload.findGlobal({
    slug: 'home-page',
    depth: 0,
  })

  const currentAbout = typeof current?.aboutSection === 'object' && current.aboutSection ? current.aboutSection : null
  const aboutSection = {
    title:
      typeof currentAbout?.title === 'string' && currentAbout.title.length > 0
        ? currentAbout.title
        : 'O obchodě Lumera',
    description:
      typeof currentAbout?.description === 'string' && currentAbout.description.length > 0
        ? currentAbout.description
        : 'Lumera je český obchod s italskými koženými kabelkami a doplňky.\nSpolupracujeme s menšími výrobci z Itálie, kteří si zakládají na kvalitě a ručním zpracování. Každý model pečlivě vybíráme tak, aby spojoval eleganci, praktičnost a originalitu. Věříme, že krása je v detailu - stejně jako v každé kabelce, kterou nabízíme.',
    buttonText:
      typeof currentAbout?.buttonText === 'string' && currentAbout.buttonText.length > 0
        ? currentAbout.buttonText
        : 'Zjistit více o obchodě',
    buttonLink:
      typeof currentAbout?.buttonLink === 'string' && currentAbout.buttonLink.length > 0
        ? currentAbout.buttonLink
        : '/o-nas',
  }

  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      aboutSection,
      marketingSlides: DEFAULT_MARKETING_SLIDES,
    },
  })

  console.log(`Imported about section and ${DEFAULT_MARKETING_SLIDES.length} homepage marketing slides to admin.`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Homepage slider import failed:', error)
    process.exit(1)
  })
