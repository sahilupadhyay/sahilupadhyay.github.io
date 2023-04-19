import './style.scss'
export default function qualification() {
  return (
    <>
      <section id="qualification" className="qualification">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Professional Experience</h2>
          </div>
          <h5 className="resume-title">Acquia inc. Pune, India</h5>
          <div className="resume-item">
            <p><strong>Senior Software Engineer</strong> | <small>Apr 2022 - Present</small></p>
            <p>Tech stack: Angular(10+), Javscript, Typescript, Nx , Rxjs, HTML5, CSS, AWS, Looker SDK, NgRx, Akita</p>
            <ul>
              <li>
                Developed Personalisation, a migration sandbox, to let customers migrate effortlessly from older application version to the latest one. It
                implements a library to support both legacy and new API response, allowing clients to interchange APIs basis their feature requirements.
              </li>
              <li>
                Further, optimised application build size by 35%, thereby increasing performance by more than 45%
              </li>
            </ul>
          </div>
          <div className="resume-item">
            <p><strong>Software Engineer</strong> | <small>Apr 2021 - Mar 2022</small></p>
            <ul>
              <li>Developing the frontend of WhatsApp assistant dashboard which enables business account holders to leverage the WhatsApp API for
                establishing B2C communication by providing them with a live chat panel
              </li>
              <li>Implemented a mono repo architecture enabling component and service sharing across multiple projects, thereby reducing code duplication by
                ~30% among the four primary projects of Acquia.</li>
            </ul>
          </div>
          <div className="resume-item">
            <p><strong>Associate Software Engineer</strong> | <small>May 2020 - Mar 2021</small></p>
            <ul>
              <li>Developed and deployed application plugin connectors for snowflake, Facebook, S3 and dispatch data, which ingest data in a format uniformly
                understood across Acquia CDP, ensuring faster insights generation.
              </li>
              <li>Implemented data erasure sandbox which helps to generate, fetch and request data deletion services for GDPR support.</li>
            </ul>
          </div>

          <h5 className="resume-title">Gupshup Technology India Pvt Ltd, Mumbai, India</h5>
          <div className="resume-item">
            <p><strong>UI Developer</strong> | <small>Dec 2019 - May 2020</small></p>
            <ul>
              <li>Developing the frontend of WhatsApp assistant dashboard which enables business account holders to leverage the WhatsApp API for
                establishing B2C communication by providing them with a live chat panel
              </li>
              <li>Tech stack: Angular 6</li>
            </ul>
          </div>

          <h5 className="resume-title">Fork Media Pvt Ltd, Mumbai</h5>
          <div className="resume-item">
            <p><strong>Software Engineer</strong> | <small>Aug 2018 - Dec 2019</small></p>
            <ul>
              <li>Pioneered and lead the development of the most grossing B2B technical product VideoGenie which uses smart text summarization to generate
                customizable content-rich videos from web urls or textual data
              </li>
              <li>Tech stack: Angular 6, Nodejs, MongoDB, Redis</li>
            </ul>
          </div>
        </div>
      </section>
      </>
  )
}