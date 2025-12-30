import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsOfService = () => {
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
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Podmienky služby</h1>
          <p className="text-slate-600">Terms of Service</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Všeobecné ustanovenia</h2>
            <p className="text-slate-700 leading-relaxed">
              Používaním tejto webovej stránky <strong>bau-connect.eu</strong> (ďalej len "Stránka") súhlasíte s týmito podmienkami služby. Ak nesúhlasíte s týmito podmienkami, prosím, nepoužívajte túto Stránku.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Informačný charakter</h2>
            <p className="text-slate-700 leading-relaxed">
              Všetky informácie na Stránke sú určené na <strong>informačné účely</strong> a môžu sa meniť bez predchádzajúceho upozornenia. BauConnect s.r.o. si vyhradzuje právo kedykoľvek upraviť, doplniť alebo odstrániť akýkoľvek obsah na Stránke.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Obmedzenie zodpovednosti</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Prevádzkovateľ <strong>nezodpovedá za škody</strong> spôsobené:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Nesprávnym použitím informácií zo Stránky</li>
              <li>Technickými problémami alebo nedostupnosťou Stránky</li>
              <li>Činnosťou tretích strán</li>
              <li>Stratou dát alebo zisku v súvislosti s používaním Stránky</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Autorské práva</h2>
            <p className="text-slate-700 leading-relaxed">
              Obsah Stránky vrátane textov, obrázkov, grafiky, loga a iných materiálov je chránený autorskými právami a je majetkom BauConnect s.r.o. alebo jej poskytovateľov obsahu.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              <strong>Kopírovanie, šírenie alebo iné použitie obsahu</strong> Stránky je možné <strong>len so súhlasom prevádzkovateľa</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Používateľské správanie</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pri používaní Stránky sa zaväzujete:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Nepoužívať Stránku na nezákonné účely</li>
              <li>Neposkytovať nepravdivé alebo zavádzajúce informácie</li>
              <li>Nerušiť funkčnosť Stránky</li>
              <li>Neporušovať práva iných používateľov alebo tretích strán</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Odkazy na iné stránky</h2>
            <p className="text-slate-700 leading-relaxed">
              Stránka môže obsahovať odkazy na webové stránky tretích strán. BauConnect s.r.o. nezodpovedá za obsah, dostupnosť ani politiku ochrany súkromia týchto externých stránok.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Zmeny podmienok</h2>
            <p className="text-slate-700 leading-relaxed">
              BauConnect s.r.o. si vyhradzuje právo kedykoľvek zmeniť tieto Podmienky služby. Zmeny nadobúdajú účinnosť okamžite po ich zverejnení na Stránke. Odporúčame pravidelne kontrolovať tieto Podmienky.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Kontakt</h2>
            <div className="space-y-2 text-slate-700">
              <p className="font-semibold">BauConnect s.r.o.</p>
              <p>Karpatské námestie 10A, 831 06 Bratislava - Rača</p>
              <p>IČO: 57289301</p>
              <p className="mt-3">
                <strong>E-mail:</strong> <a href="mailto:info@bau-connect.eu" className="text-orange-600 hover:underline">info@bau-connect.eu</a>
              </p>
              <p>
                <strong>Telefón:</strong> <a href="tel:+421902134930" className="text-orange-600 hover:underline">+421 902 134 930</a>
              </p>
            </div>
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

export default TermsOfService;
