import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanyContact = () => {
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
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-orange-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">{t.contact.companyFormTitle}</h1>
          <p className="text-xl text-slate-600">{t.contact.companyFormSubtitle}</p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl text-center shadow-sm">
            <Mail className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <p className="text-sm text-slate-600 mb-1">Email</p>
            <a href={`mailto:${t.contact.email}`} className="text-orange-600 font-semibold hover:underline">
              {t.contact.email}
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
          <CardHeader className="bg-slate-800 text-white">
            <CardTitle className="text-2xl">Kontaktný formulár</CardTitle>
            <CardDescription className="text-slate-300">
              Vyplňte formulár a my sa vám ozveme čo najskôr
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form action={`mailto:${t.contact.email}`} method="POST" encType="text/plain" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.company} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t.contact.formLabels.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all"
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
                  placeholder="Popíšte nám vaše potreby a požiadavky..."
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all resize-none"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full bg-slate-800 hover:bg-slate-900 text-white py-6 text-lg">
                <Building2 className="mr-2 w-5 h-5" />
                {t.contact.formLabels.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompanyContact;
