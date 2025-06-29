import "./textSection.css"
import { useTranslation } from "react-i18next"

function Textsection() {
  const {t} = useTranslation('translation')
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

