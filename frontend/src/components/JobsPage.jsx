import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { mockJobOffers } from '../mockJobs';
import { ArrowLeft, Building2, Calendar, Users, Euro, Briefcase } from 'lucide-react';

const JobsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Aktuálne pracovné ponuky
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Všetky dostupné pozície v stavebníctve v Nemecku
          </p>
          <div className="mt-6 inline-block bg-orange-100 px-6 py-3 rounded-full">
            <span className="text-orange-800 font-semibold">
              {mockJobOffers.filter(job => job.is_active).length} aktívnych ponúk
            </span>
          </div>
        </div>

        {/* Job Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mockJobOffers.filter(job => job.is_active).map((job) => (
            <Card key={job.id} className="hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-slate-50 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-slate-800 flex items-center mb-2">
                      <Building2 className="w-6 h-6 mr-2 text-orange-600" />
                      {job.lokalita}
                    </CardTitle>
                    <CardDescription className="text-slate-700 font-medium">
                      {job.typ_prace}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Key Info Grid */}
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-500">Počet</p>
                        <p className="text-sm font-semibold text-slate-800">{job.pocet_pracovnikov}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-500">Začiatok</p>
                        <p className="text-sm font-semibold text-slate-800">{job.zaciatok}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Euro className="w-4 h-4 text-orange-600" />
                      <div>
                        <p className="text-xs text-slate-500">Hodinová sazba</p>
                        <p className="text-base font-bold text-orange-600">{job.hodinova_sazba}</p>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Info */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">Požiadavky:</p>
                      <p className="text-sm text-slate-600">{job.poziadavky}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">Vybavenie:</p>
                      <p className="text-sm text-slate-600">{job.vybavenie}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-slate-500">Práca v sobotu:</p>
                        <p className="font-medium text-slate-800">{job.praca_v_sobotu}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Ubytovanie:</p>
                        <p className="font-medium text-slate-800">{job.ubytovanie}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-xs text-slate-500 mb-1">Splatnosť:</p>
                      <p className="text-sm text-slate-700">{job.splatnost}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => navigate('/worker-contact')}
                    className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white py-6 text-base"
                  >
                    <Briefcase className="mr-2 w-5 h-5" />
                    Mám záujem o túto pozíciu
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Jobs Message */}
        {mockJobOffers.filter(job => job.is_active).length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-slate-600">
              Momentálne nemáme žiadne aktívne ponuky.
            </p>
            <p className="text-slate-500 mt-2">
              Vráťte sa neskôr alebo nás kontaktujte priamo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
