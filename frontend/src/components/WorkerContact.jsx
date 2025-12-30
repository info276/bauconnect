import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Users, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkerContact = () => {
  const { t } = useLanguage();
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
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{t.contact.workerFormTitle}</h1>
          <p className="text-xl text-slate-600">{t.contact.workerFormSubtitle}</p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl text-center shadow-sm">
            <Mail className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600 mb-1">Email</p>
            <a href={`mailto:${t.contact.emailWorkers}`} className="text-orange-600 font-semibold hover:underline">
              {t.contact.emailWorkers}
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm">
            <Phone className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600 mb-1">Telefón</p>
            <a href={`tel:${t.contact.phone}`} className="text-orange-600 font-semibold hover:underline">
              {t.contact.phone}
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl text-center shadow-sm">
            <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600 mb-1">Adresa</p>
            <p className="text-slate-700 font-semibold text-sm">{t.contact.address}</p>
          </div>
        </div>

        {/* Form */}
        <Card className="shadow-xl">
          <CardHeader className="bg-orange-600 text-white">
            <CardTitle className="text-2xl">Kontaktný formulár</CardTitle>
            <CardDescription className="text-orange-100">
              Vyplňte formulár a my sa vám ozveme čo najskôr
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form action={`mailto:${t.contact.emailWorkers}`} method="POST" encType="text/plain" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.position}
                  </label>
                  <input
                    type="text"
                    name="position"
                    placeholder="napr. Murár, Elektrikár..."
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t.contact.formLabels.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Napíšte nám o vašich skúsenostiach a očakávaniach..."
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition-all resize-none"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg">
                <Users className="mr-2 w-5 h-5" />
                {t.contact.formLabels.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkerContact;
