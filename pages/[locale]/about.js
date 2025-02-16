/* eslint-disable @next/next/no-img-element */
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import Link from "../../components/Link";
import Layout from "../../components/layout";
import { useTranslation } from "next-i18next";
import { Converter } from "showdown";

const converter = new Converter();

export default function About() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <section id="whoweare" className="lead-text">
        <h1>{t("about.whoweare.title")}</h1>
        <p>{t("about.whoweare.text")}</p>
      </section>
      <section id="historic" className="lead-text align-right">
        <h2>{t("about.historic.title")}</h2>
        <p>{t("about.historic.text")}</p>
      </section>

      <section id="founders">
        <h2>{t("about.founders.title")}</h2>
        <ul className="staff founders">
          <li>
            <img alt="Thierry Jean" src="/img/staff-photos/thierry.png" />
            <p>Thierry Jean</p>
          </li>
          <li>
            <img alt="Filipe Rocha" src="/img/staff-photos/filipe.png" />
            <p>Filipe Rocha</p>
          </li>
          <li>
            <img alt="Peter Krauss" src="/img/staff-photos/peter.png" />
            <p>Peter Krauss</p>
          </li>
        </ul>
      </section>

      <section id="consultants">
        <h2>{t("about.consultants.title")}</h2>
        <ul className="staff consultants">
          <li>
            <img alt="Roberto Olinto" src="/img/staff-photos/roberto.png" />
            <p>Roberto Olinto</p>
            <div className="tooltip">
              Former President of the IBGE & Professor at FGV
            </div>
          </li>
          <li>
            <img alt="Silvana Camboin" src="/img/staff-photos/silvana.png" />
            <p>Silvana Camboin</p>
            <div className="tooltip">Professor at UFPR​</div>
          </li>
          <li>
            <img alt="Luis Ugeda" src="/img/staff-photos/luis.png" />
            <p>Luis Ugeda</p>
            <div className="tooltip">
              PHD in Geography and law, leader of the Geo-law commission at
              OAB-SP and Geocracia CEO
            </div>
          </li>
          <li>
            <img alt="Eduardo Francisco" src="/img/staff-photos/eduardo.png" />
            <p>Eduardo Francisco</p>
            <div className="tooltip">
              Professor at FGV and Counselor at SEADE foundation
            </div>
          </li>
          <li>
            <img alt="Clodoveu Davis" src="/img/staff-photos/clodoveu.png" />
            <p>Clodoveu Davis</p>
            <div className="tooltip">Professor at UFMG</div>
          </li>
          <li>
            <img alt="Karla Borges" src="/img/staff-photos/karla.png" />
            <p>Karla Borges</p>
            <div className="tooltip">
              Corporate Geoprocessing Superintendence PRODABEL
            </div>
          </li>
          <li>
            <img alt="Jérôme Desboeufs" src="/img/staff-photos/jerome.png" />
            <p>Jérôme Desboeufs</p>
            <div className="tooltip">
              <a href="https://adresse.data.gouv.fr">adresse.data.gouv.fr</a>{" "}
              Developer
            </div>
          </li>
          <li>
            <img alt="Rafael Siqueira" src="/img/staff-photos/rafael.png" />
            <p>Rafael Siqueira</p>
            <div className="tooltip">Co-founder at Apontador/Maplink</div>
          </li>
          <li>
            <img alt="Wille Marcel" src="/img/staff-photos/wille.png" />
            <p>Wille Marcel</p>
            <div className="tooltip">Developer, OSMCHA creator</div>
          </li>
        </ul>
      </section>

      <section id="itcrowd">
        <h2>{t("about.itcrowd.title")}</h2>
        <ul className="staff itcrowd">
          <li>
            <img alt="Batista Echevarría" src="/img/staff-photos/batista.png" />
            <p>Batista Echevarría</p>
            <div className="tooltip">SW Development</div>
          </li>
          <li>
            <img alt="Carlos Rebollo" src="/img/staff-photos/carlos.png" />
            <p>Carlos Rebollo</p>
            <div className="tooltip">Servers</div>
          </li>
          <li>
            <img alt="Claiton Neisse" src="/img/staff-photos/cneisse.png" />
            <p>Claiton Neisse</p>
            <div className="tooltip">SW Development</div>
          </li>
          <li>
            <img alt="Junior Manoel" src="/img/staff-photos/junior.png" />
            <p>Junior Manoel</p>
            <div className="tooltip">CRM Brazil</div>
          </li>
          <li>
            <img alt="Luis Felipe" src="/img/staff-photos/luisf.png" />
            <p>Luis Felipe&nbsp;</p>
            <div className="tooltip">GIS</div>
          </li>

          <li>
            <img alt="Gabriel Machado" src="/img/staff-photos/gabriel.png" />
            <p>Gabriel Machado</p>
            <div className="tooltip">Projects</div>
          </li>

          <li>
            <img
              alt="Christian Bonilla"
              src="/img/staff-photos/christian.png"
            />
            <p>Christian Bonilla</p>
            <div className="tooltip">Ambassador Ecuador</div>
          </li>
          <li>
            <img alt="Fredy Rivera" src="/img/staff-photos/fredy.png" />
            <p>Fredy Rivera</p>
            <div className="tooltip">Ambassador Colombia</div>
          </li>
          <li>
            <img alt="Igor Eliezer" src="/img/staff-photos/igor.png" />
            <p>Igor Eliezer</p>
            <div className="tooltip">GIS</div>
          </li>
          <li>
            <img alt="María Alejandra" src="/img/staff-photos/maria.png" />
            <p>María Alejandra</p>
            <div className="tooltip">CRM Venezuela</div>
          </li>
          <li>
            <img alt="Oreana Florez" src="/img/staff-photos/oreana.png" />
            <p>Oreana Florez</p>
            <div className="tooltip">CRM Venezuela</div>
          </li>
        </ul>
      </section>

      <section id="statutesbnr">
        <div className="col">
          <p className="message">{t("about.statutes.message")}</p>
          <Link href="/statutes">
            <a className="btn btn-blue">{t("menu.statute")}</a>
          </Link>
        </div>
      </section>

      <section id="projects" className="flex-container lead-text">
        <h2>{t("projects.title")}</h2>
        <p>{t("projects.text")}</p>

        <ul className="flex-list">
          <li className="card">
            <div className="img">
              <img
                alt="AddressForAll"
                src="/img/Icon/SVG/Icon-Adressforall-White.svg"
              />
              <h3 className="hidden">{t("projects.project01.title")}</h3>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: converter.makeHtml(t("projects.project01.excerpt")),
              }}
            />
            <Link href="/">
              <a className="btn btn-blue">{t("menu.backtohome")}</a>
            </Link>
          </li>
          <li className="card">
            <div className="img">
              <img className="tr-icon" alt="CRP" src="/img/LogoCRP.png" />
              <h3>
                <strong>CRP</strong>
                <br />
                <span>{t("projects.project02.title")}</span>
              </h3>
            </div>
            <p>{t("projects.project02.excerpt")}</p>
            <Link href="https://github.com/OSMBrasil/CRP">
              <a className="btn btn-blue">{t("menu.knowmore")}</a>
            </Link>
          </li>
          <li className="card">
            <div className="img">
              <img alt="Osm Codes" src="/img/OSMCodes.png" />
            </div>

            <p>{t("projects.project03.excerpt")}</p>
            <Link href="https://git.osm.codes/">
              <a className="btn btn-blue">{t("menu.knowmore")}</a>
            </Link>
          </li>
          <li className="card">
            <div className="img">
              <img alt="Digital Guard" src="/img/DigitalGuard.png" />
            </div>

            <p>{t("projects.project04.excerpt")}</p>
            <Link href="https://git.digital-guard.org/">
              <a className="btn btn-blue">{t("menu.knowmore")}</a>
            </Link>
          </li>
          <li className="card">
            <div className="img">
              <img
                className="tr-icon"
                alt="AddressForAll"
                src="/img/Icon/SVG/Icon-Geodigital.svg"
              />
              <h3>{t("projects.project05.title")}</h3>
            </div>

            <p>{t("projects.project05.excerpt")}</p>
            <Link href="/#">
              <a className="btn btn-blue">{t("menu.knowmore")}</a>
            </Link>
          </li>
          <li className="card">
            <div className="img">
              <img
                className="tr-icon"
                alt="AddressForAll"
                src="/img/Icon/SVG/Icon-Primeira-infancia.svg"
              />
              <h3>{t("projects.project06.title")}</h3>
            </div>

            <p>{t("projects.project06.excerpt")}</p>
            <Link href="https://alertaspi.io">
              <a className="btn btn-blue">{t("menu.knowmore")}</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
