import HORAS from '../assets/HORAS.png';
import LOGO from '../assets/LOGO.png';
import SEGURIDAD from '../assets/SEGURIDAD.png';
import CITAS from '../assets/CITAS.png';
import { SideBar } from './SideBar/SideBar';
import MultiStepModal from './MultiStepModal';
import BANNER from '../assets/banner.jpg';

export const HomePage = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-1 ml-20 overflow-auto">
          <div className="bg-white">
            <main>
              <section className="relative mb-10 flex flex-col">
                <div
                  className="w-full h-[75vh] bg-cover bg-center bg-gradient-to-t from-black/70 to-black/70"
                  style={{
                    backgroundImage: `url(${BANNER})` // Añade url() para que funcione correctamente
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-4xl font-bold">
                      Bienvenido a CLINCLINK
                    </h2>
                    <p className="mt-4">
                      Ofrecemos servicios clínicos seguros y confiables para
                      satisfacer tus necesidades de salud.
                    </p>
                    <br />
                    <MultiStepModal />
                  </div>
                </div>
              </section>

              {/* Servicios */}
              <h2
                className="text-5xl mb-12 text-[#5b7ce9] font-bold text-center"
                id="servicios"
              >
                SERVICIOS
              </h2>
              <section className="flex flex-wrap justify-center mb-10">
                {[
                  {
                    src: 'https://magnetosur.com/wp-content/uploads/2021/11/Que-diferencias-existen-entre-la-medicina-general-y-la-medicina-interna.jpg',
                    title: 'CONSULTAS MÉDICAS GENERALES',
                    desc: 'Evaluación y tratamiento de afecciones comunes por médicos de atención primaria.'
                  },
                  {
                    src: 'https://www.polizamedica.es/images/noticias/ramas-de-la-medicina-preventiva.jpg',
                    title: 'MEDICINA PREVENTIVA',
                    desc: 'Servicios enfocados en la prevención de enfermedades a través de chequeos regulares y educación en salud.'
                  },
                  {
                    src: 'https://medlineplus.gov/images/LaboratoryTests_share.jpg',
                    title: 'EXÁMENES DE LABORATORIO',
                    desc: 'Pruebas diagnósticas para evaluar la salud, incluyendo análisis de sangre y muestras biológicas.'
                  }
                ].map((service, index) => (
                  <div key={index} className="flex-1 text-center p-5 max-w-xs">
                    <img
                      className="mx-auto mb-5 rounded-xl"
                      src={service.src}
                      alt={service.title}
                    />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </section>

              {/* Otra sección de Servicios */}
              <section className="flex flex-wrap justify-center mb-10">
                {[
                  {
                    src: 'https://principal.url.edu.gt/wp-content/uploads/2023/08/radio1_thumbns.jpg',
                    title: 'RADIOLOGÍA Y ESTUDIOS DE IMAGEN',
                    desc: 'Uso de tecnologías como rayos X, tomografías y ultrasonidos para diagnóstico de condiciones internas.'
                  },
                  {
                    src: 'https://www.paho.org/sites/default/files/styles/max_1300x1300/public/card/2021-04/vaccination-efficacy-650-400.jpg?itok=DBUAd_L5',
                    title: 'VACUNACIÓN',
                    desc: 'Aplicación de vacunas para prevenir enfermedades infecciosas, siguiendo los calendarios de inmunización.'
                  },
                  {
                    src: 'https://www.altamed.org/sites/default/files/2023-09/hospital.jpg',
                    title: 'ATENCIÓN DE URGENCIAS',
                    desc: 'Servicios médicos inmediatos para tratar lesiones y enfermedades agudas que requieren atención rápida.'
                  }
                ].map((service, index) => (
                  <div key={index} className="flex-1 text-center p-5 max-w-xs">
                    <img
                      className="mx-auto mb-5 rounded-xl"
                      src={service.src}
                      alt={service.title}
                    />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </section>

              {/* Sobre Nosotros */}
              <div className="py-20 bg-[#FCFBF9]">
                <div className="max-w-5xl mx-auto flex">
                  <div className="w-1/2 text-left pr-10">
                    <h2
                      className="text-4xl font-bold mb-5 text-[#5b7ce9]"
                      id="nosotros"
                    >
                      SOBRE NOSOTROS
                    </h2>
                    <p className="text-xl">
                      En nuestra clínica, nos dedicamos a proporcionar atención
                      médica de alta calidad, enfocándonos en la salud integral
                      de nuestros pacientes. Contamos con un equipo de
                      profesionales altamente capacitados en diversas
                      especialidades médicas.
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <img className="max-w-sm" src={LOGO} alt="Logo" />
                  </div>
                </div>
              </div>

              {/* Seguridad */}
              <div className="py-20 bg-[#FCFBF9]">
                <div className="max-w-5xl mx-auto flex">
                  <div className="w-1/2 text-left pr-10">
                    <h2
                      className="text-4xl font-bold mb-5 text-[#5b7ce9]"
                      id="seguridad"
                    >
                      SEGURIDAD
                    </h2>
                    <p className="text-xl">
                      En nuestra clínica, la seguridad y el bienestar de
                      nuestros pacientes son nuestra máxima prioridad. Contamos
                      con rigurosos protocolos de higiene y control de
                      infecciones.
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <img className="max-w-sm" src={SEGURIDAD} alt="Seguridad" />
                  </div>
                </div>
              </div>

              {/* Citas Online */}
              <div className="py-20 bg-[#5b7ce9] text-white">
                <div className="max-w-5xl mx-auto flex">
                  <div className="w-1/2">
                    <h2 className="text-4xl font-bold mb-5">
                      AGENDA TUS CITAS EN LÍNEA
                    </h2>
                    <p className="text-xl">
                      En nuestra clínica, facilitamos tu acceso a la atención
                      médica mediante nuestro sistema de citas en línea.
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <img className="max-w-sm" src={CITAS} alt="Citas" />
                  </div>
                </div>
              </div>

              {/* Disponibilidad */}
              <div className="py-20 bg-white">
                <div className="max-w-5xl mx-auto flex">
                  <div className="w-1/2">
                    <h2 className="text-4xl font-bold mb-5 text-[#5b7ce9]">
                      DISPONIBILIDAD 24/7
                    </h2>
                    <p className="text-xl">
                      Puedes acceder a nuestro sistema de citas en línea las 24
                      horas del día, los 7 días de la semana.
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <img className="max-w-sm" src={HORAS} alt="Horas" />
                  </div>
                </div>
              </div>
            </main>
            <footer className="py-5 bg-[#5b7ce9] text-center text-white">
              <p>
                &copy; {new Date().getFullYear()} ClincLink. Todos los derechos
                reservados.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
