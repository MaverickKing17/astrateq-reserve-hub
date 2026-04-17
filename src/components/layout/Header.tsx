import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <header className="professional-header">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded bg-primary" />
        <Link to="/" className="font-bold text-xl tracking-tight text-foreground uppercase">Astrateq</Link>
      </div>

      <nav className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">Find Gadgets</Link>
          <Link to="/reserve" className="text-sm font-medium text-muted-foreground hover:text-foreground">Reservations</Link>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-xs font-bold text-slate"
        >
          <Globe className="h-4 w-4" />
          {i18n.language.toUpperCase()}
        </Button>
        
        <Button asChild variant="default" size="sm" className="bg-navy hover:opacity-90 text-white font-semibold rounded-md h-10 px-6">
          <Link to="/reserve">{t('common.reserve')}</Link>
        </Button>
      </nav>
    </header>
  );
}
