import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-slate-600 hover:text-orange-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Späť na hlavnú stránku
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Ochrana súkromia</h1>
          <p className="text-slate-600">Privacy Policy</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Prevádzkovateľ</h2>
            <div className="space-y-2 text-slate-700">
              <p className="font-semibold text-lg">BauConnect s.r.o.</p>
              <p>Karpatské námestie 10A</p>
              <p>831 06 Bratislava - Rača</p>
              <p>Slovenská republika</p>
              <p className="mt-3"><strong>IČO:</strong> 57289301</p>
              <p><strong>E-mail:</strong> <a href="mailto:info@bau-connect.eu" className="text-orange-600 hover:underline">info@bau-connect.eu</a></p>
              <p><strong>Telefón:</strong> <a href="tel:+421902134930" className="text-orange-600 hover:underline">+421 902 134 930</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Aké údaje spracúvame</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Meno, priezvisko, kontaktné údaje (e-mail, telefón)</li>
              <li>Informácie z kontaktných formulárov a pracovných žiadostí</li>
              <li>Údaje o návštevnosti webu (cookies, analytika)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Na aký účel</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Komunikácia s klientmi a záujemcami o prácu</li>
              <li>Plnenie zmluvných povinností</li>
              <li>Marketing a zlepšovanie služieb</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Práva dotknutých osôb</h2>
            <p className="text-slate-700 mb-3">
              Máte právo na:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Prístup k svojim osobným údajom</li>
              <li>Opravu nesprávnych alebo neúplných údajov</li>
              <li>Výmaz údajov (právo "na zabudnutie")</li>
              <li>Obmedzenie spracovania údajov</li>
              <li>Prenos údajov k inému prevádzkovateľovi</li>
              <li>Namietať proti spracovaniu údajov</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Doba uchovávania údajov</h2>
            <p className="text-slate-700">
              Osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelu spracovania alebo po dobu stanovenú právnymi predpismi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies</h2>
            <p className="text-slate-700">
              Naša webová stránka používa cookies na zlepšenie používateľskej skúsenosti a analýzu návštevnosti. Používaním našej stránky súhlasíte s používaním cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Kontakt</h2>
            <p className="text-slate-700">
              V prípade otázok týkajúcich sa ochrany osobných údajov nás kontaktujte na:
            </p>
            <p className="mt-3">
              <a href="mailto:info@bau-connect.eu" className="text-orange-600 hover:underline font-semibold text-lg">
                info@bau-connect.eu
              </a>
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Posledná aktualizácia: December 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
