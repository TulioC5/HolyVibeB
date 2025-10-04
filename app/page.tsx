'use client';

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/next';

import { Calendar, MapPin, Clock, Mail, Phone, Instagram, Facebook, ArrowLeft, Music, Users, Sparkles } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  gallery: string[];
}

export default function HolyVibeBlog() {
  const [currentView, setCurrentView] = useState<'home' | 'event-detail' | 'contact'>('home');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Aroldo's Party",
      date: "4 de Octubre, 2025",
      time: "5:00 PM - 2:00 AM",
      location: "Hidden Forest, Cruz Blanca SJ",
      shortDesc: "Una noche inolvidable de música variada y buenas vibras",
      fullDesc: "Prepárate para una fiesta única en Aroldo's Party. Una noche llena de energía positiva, música variada de los mejores DJs locales, y un ambiente inigualable. Ven a celebrar la vida y conectar con personas que comparten tu vibra.",
      image: "/images/aroldos.jpg",  
      // image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop",
      highlights: [
        "DJ´s locales",
        "Barra libre premium de 8-10 PM",
        "Naturaleza",
        "Spot exclusivo"
      ],
      gallery: [
        "https://media.istockphoto.com/id/1417048081/vector/red-coming-soon-stamp.jpg?s=612x612&w=0&k=20&c=h_2iKUDBLVK0w4NRrIAFCeTCyPazBMYD6OnI7VKDDjA="
        // "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
        // "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
        // "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=300&fit=crop"
        
      ]
    },
    {
      id: 2,
      title: "Sunset Sessions - Kidd Lucho vol.1",
      date: "soon",
      time: "6:00 PM - 12:00 AM",
      location: "Soon",
      shortDesc: "Música chill, rap y atardeceres espectaculares",
      fullDesc: "Disfruta de los mejores atardeceres del área mientras escuchas música chill house, techno y rap. Un evento perfecto para relajarte después de una semana intensa y conectar con la comunidad Holy Vibe.",
      image: "/images/luchos.jpg",  
      highlights: [
        "Vista panorámica de 360 grados",
        "Sesión acústica especial",
        "Cócteles artesanales",
        "Ambiente relajado y acogedor"
      ],
      gallery: [
        "https://media.istockphoto.com/id/1417048081/vector/red-coming-soon-stamp.jpg?s=612x612&w=0&k=20&c=h_2iKUDBLVK0w4NRrIAFCeTCyPazBMYD6OnI7VKDDjA="

        // "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
        // "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
        // "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop"
      ]
    },
    // {
    //   id: 3,
    //   title: "Neon Nights",
    //   date: "30 de Noviembre, 2025",
    //   time: "9:00 PM - 3:00 AM",
    //   location: "Warehouse District",
    //   shortDesc: "La fiesta más colorida del año",
    //   fullDesc: "Sumérgete en un mundo de luces neón y música electrónica vibrante. Neon Nights es más que una fiesta, es una experiencia sensorial completa donde el arte, la música y la comunidad se unen para crear momentos mágicos.",
    //   image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=500&fit=crop",
    //   highlights: [
    //     "Instalaciones de arte lumínico",
    //     "3 escenarios con diferentes géneros",
    //     "Pintura fluorescente gratuita",
    //     "Food trucks gourmet"
    //   ],
    //   gallery: [
    //     "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=400&h=300&fit=crop",
    //     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
    //     "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
    //   ]
    // }
  ];

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setCurrentView('event-detail');
  };

  const EventCard = ({ event }: { event: Event }) => (
    <div 
      onClick={() => handleEventClick(event)}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{event.title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{event.shortDesc}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-500" />
            <span>{event.location}</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
          Ver Detalles
        </button>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Holy Vibe
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</a>
            <a href="#eventos" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Eventos</a>
            <a href="#contacto" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contacto</a>
          </nav>
          <button 
            onClick={() => setCurrentView('contact')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Contáctanos
          </button>
        </div>
      </header>
      <section id="home" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Conecta con tu Vibra Interior
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Es una comunidad donde las personas se conectan a través de la música, 
            el arte y las experiencias positivas. Únete a nosotros y descubre una nueva forma de vivir la noche.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Music className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-gray-700">Música Selecta</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Users className="w-5 h-5 text-pink-500" />
              <span className="font-semibold text-gray-700">Comunidad Vibrante</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-700">Experiencias Únicas</span>
            </div>
          </div>
        </div> 
        {/* <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">¿Qué es Holy Vibe?</h3>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Somos una plataforma que organiza eventos enfocados en crear espacios donde la música, 
            el arte y las conexiones humanas genuinas se fusionan. Creemos en el poder transformador 
            de las experiencias compartidas y en cultivar una comunidad basada en la positividad, 
            el respeto y la celebración de la vida.
          </p>
        </div> */}
      </section>

      <section id="eventos" className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Próximos Eventos
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h4 className="text-2xl font-bold">Holy Vibe</h4>
              </div>
              <p className="text-gray-400">Creando experiencias memorables desde 2025</p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-lg">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#eventos" className="hover:text-purple-400 transition-colors">Eventos</a></li>
                <li><a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-lg">Síguenos</h5>
              <div className="flex gap-4">

                <a
  href="https://www.instagram.com/bendecidosxgod?igsh=MThtdmxsMnZtZmxheA=="
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Ir a Instagram"
  className="inline-flex items-center focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
>
  <Instagram className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors" />
</a>
                <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Holy Vibe. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  const EventDetailPage = () => {
    if (!selectedEvent) return null;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <button 
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Volver a Eventos</span>
            </button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <h1 className="absolute bottom-8 left-8 text-5xl font-bold text-white">
                {selectedEvent.title}
              </h1>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Fecha</p>
                    <p className="text-gray-600">{selectedEvent.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Horario</p>
                    <p className="text-gray-600">{selectedEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Ubicación</p>
                    <p className="text-gray-600">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Acerca del Evento</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {selectedEvent.fullDesc}
                </p>

                <h3 className="text-xl font-bold mb-4 text-gray-800">Lo que te espera:</h3>
                <ul className="space-y-3 mb-8">
                  {selectedEvent.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setCurrentView('contact')}
                  className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
                >
                  Reservar Entradas
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Galería</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {selectedEvent.gallery.map((img, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                    <img 
                      src={img} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al Home</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            ¿Tienes preguntas? ¿Quieres ser parte de nuestros eventos? ¡Escríbenos!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@holyvibe.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Teléfono</p>
                    <p className="text-gray-600">+502 3353-8809</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <p className="text-gray-600">@holyvibe.gt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un Mensaje</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {currentView === 'home' && <HomePage />}
      {currentView === 'event-detail' && <EventDetailPage />}
      {currentView === 'contact' && <ContactPage />}
    </>
  );
}