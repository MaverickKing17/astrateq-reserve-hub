import { useTranslation } from 'react-i18next';
import { ShieldCheck, CreditCard, Headphones } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-primary" />
              <h3 className="font-bold text-lg text-navy uppercase tracking-tight">{t('common.footer.brand')}</h3>
            </div>
            <p className="text-sm text-slate leading-relaxed">
              Premium automotive safety systems engineered for reliability and precision. Proudly Canadian.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate">
              {t('common.footer.navigation')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-navy hover:text-accent font-medium">Find Gadgets</a></li>
              <li><a href="#" className="text-navy hover:text-accent font-medium">Safety Reports</a></li>
              <li><a href="#" className="text-navy hover:text-accent font-medium">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate">
              {t('common.footer.resources')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-navy hover:text-accent font-medium">Technical Support</a></li>
              <li><a href="#" className="text-navy hover:text-accent font-medium">Installation Guides</a></li>
              <li><a href="#" className="text-navy hover:text-accent font-medium">System Status</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate">
              {t('common.footer.legal')}
            </h4>
            <ul className="space-y-2 text-sm text-slate">
              <li><a href="#" className="hover:text-accent">{t('common.footer.refundPolicy')}</a></li>
              <li><a href="#" className="hover:text-accent">{t('common.footer.pipeda')}</a></li>
              <li className="flex items-center gap-4 mt-6 text-slate/40">
                <ShieldCheck className="h-5 w-5" />
                <CreditCard className="h-5 w-5" />
                <Headphones className="h-5 w-5" />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate font-medium uppercase tracking-[0.1em]">
          <p>{t('common.footer.disclaimer')}</p>
          <p>© {new Date().getFullYear()} Astrateq Gadgets Inc.</p>
        </div>
      </div>
    </footer>
  );
}
