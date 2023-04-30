import Image from "next/image";
import { experiencias, habilidades, proyectos } from "@/profile";
import Link from "next/link";

const { default: Layout } = require("@/components/Layout");

const index = () => (
  <Layout>
    {/**Header card */}

    <header className="row">
      <div className="col-md-12">
        <div className="car car-body">
          <div className="row">
            <div className="col-md-4">
              <Image
                src="/perfil.webp"
                width={200}
                height={200}
                alt="foto de perfil"
              />
            </div>
            <div className="col-md-8 bg-secondary text-light">
              <h1>Rayn Ray</h1>
              <h3>FullStall Developer</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                a voluptatum quidem, vel repellendus rem cupiditate aut repellat
                maiores numquam eos ipsum quibusdam nemo distinctio
                reprehenderit sint incidunt, nihil accusantium!
              </p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Segunda seccion */}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Habilidades</h1>

            {habilidades.map(({ habilidad, porcentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{habilidad}</h5>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={porcentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${porcentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experiencia</h1>

            <ul>
              {experiencias.map(({ titulo, descripcion, desde, hasta }, i) => (
                <li key={i}>
                  <h3>{titulo}</h3>
                  <h5>
                    {desde}-{hasta}
                  </h5>
                  <p>{descripcion}</p>
                </li>
              ))}
            </ul>

            <Link href="/experiences" className="btn btn-light">
              Conoce M&aacute;s
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/**Portafolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>
            {proyectos.map(({ titulo, descripcion, imagen }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  {/**<Image src="/portfolio1.png" className="img-fluid" width={400} height={400} />*/}
                  <div className="overflow">
                    <img
                      src={`/${imagen}`}
                      className="card-img-top"
                      alt="portafolio"
                    />
                  </div>

                  <div className="car-body">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                    <a href="#" className="btn">
                      M&aacute;s
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <Link href="/portfolio" className="btn btn-outline-light">
              M&aacute;s proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default index;
