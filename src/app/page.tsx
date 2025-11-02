import { BlogList } from '../components/organisms/BlogList';
import { Header } from '../components/organisms/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-white">
        <div className="max-w-4xl px-4 mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
            Experta en Cuidado Natural de la Piel
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            Tu Piel, Tu Mejor Versión
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto mb-4 text-lg text-gray-600 md:text-xl">
            Johanna V. Arias - Asesora Certificada
          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto mb-10 text-base leading-relaxed text-gray-600 md:text-lg">
            Con más de 10 años de experiencia, transformo tu rutina de skincare en un ritual de amor propio.
            Soluciones naturales y personalizadas para cada tipo de piel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
            <button className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
              Agenda tu Sesión Gratuita
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-pink-600 transition-all border-2 border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
              Ver Servicios
            </button>
          </div>

          {/* Stats */}
          <div className="grid max-w-lg grid-cols-1 gap-8 mx-auto sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-pink-600 md:text-4xl">10+</div>
              <div className="font-medium text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold md:text-4xl text-amber-600">500+</div>
              <div className="font-medium text-gray-600">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-pink-600 md:text-4xl">98%</div>
              <div className="font-medium text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Servicios Personalizados
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Transforma tu piel con asesoría experta adaptada a tus necesidades únicas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="p-8 transition-shadow bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-pink-100 rounded-lg">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Consulta Personalizada</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Evaluación completa de tu tipo de piel, análisis profundo de problemas específicos y un plan de acción diseñado exclusivamente para ti.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Duración</div>
                  <div className="font-semibold text-gray-900">60 minutos</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Inversión</div>
                  <div className="text-2xl font-bold text-pink-600">$75</div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-8 transition-shadow bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-amber-100">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Rutinas Diarias</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Guías prácticas y fáciles de seguir para tu rutina matutina y nocturna, con productos recomendados específicamente para tu piel.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Duración</div>
                  <div className="font-semibold text-gray-900">Ilimitado</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Inversión</div>
                  <div className="text-2xl font-bold text-pink-600">$45</div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-8 transition-shadow bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-pink-100 rounded-lg">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Recomendaciones Premium</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Productos naturales certificados, ingredientes de calidad premium y marcas confiables seleccionadas por expertos.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Duración</div>
                  <div className="font-semibold text-gray-900">Experta</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Inversión</div>
                  <div className="text-2xl font-bold text-pink-600">$60</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogList />

      {/* Footer */}
      <footer className="py-12 text-white bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold text-white">
              Johanna V. Arias
            </div>
            <p className="max-w-md mx-auto mb-6 text-gray-400">
              Asesora certificada en cuidado de la piel natural. Transformando rutinas de skincare desde hace más de 10 años.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 transition-colors hover:text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z" />
                </svg>
              </a>
            </div>
            <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
              <p>&copy; 2025 Johanna V. Arias. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
