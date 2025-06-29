import "./textSection.css"
<<<<<<< HEAD
import { useTranslation } from "react-i18next"

function Textsection() {
  const {t} = useTranslation('translation')
=======
function textsection() {
>>>>>>> 22a3778f54e8b27c5e2e77595e23b1b27f7fd833
  return (
    <section className="textSection">
      <h1 className="textSectionTitle">
      {t("textsection.title")} <span> {t("textsection.letter")}</span>{t("textsection.company") }
      </h1>
      <p className="textSectionparagraph">
      {t('textsection.paragraph')}
      </p>
    </section>
  )
}

export default Textsection

<<<<<<< HEAD
=======
// bg-[#fcf8f5] text-center py-16 px-4
>>>>>>> 22a3778f54e8b27c5e2e77595e23b1b27f7fd833
