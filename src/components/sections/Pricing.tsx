import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PRODUCTS = [
  {
    id: 'guardian-basic',
    sku: 'ASTRA-BASIC',
    price_cents: 32900,
    deposit_cents: 4900,
    name_en: 'Guardian Bundle',
    name_fr: 'Ensemble Gardien',
    features_en: [
      'pricing.features.dashcam',
      'pricing.features.subscription12',
      'pricing.features.cloudStorage',
      'pricing.features.prioritySupport',
      'pricing.features.installationKit'
    ],
    features_fr: [
      'pricing.features.dashcam',
      'pricing.features.subscription12',
      'pricing.features.cloudStorage',
      'pricing.features.prioritySupport',
      'pricing.features.installationKit'
    ]
  },
  {
    id: 'guardian-pro',
    sku: 'ASTRA-PRO',
    price_cents: 42900,
    deposit_cents: 4900,
    name_en: 'Guardian Professional',
    name_fr: 'Gardien Professionnel',
    popular: true,
    features_en: [
      'pricing.features.dashcam',
      'pricing.features.subscriptionLifetime',
      'pricing.features.cloudStorageUnlimited',
      'pricing.features.whiteGlove',
      'pricing.features.emergencyResponse'
    ],
    features_fr: [
      'pricing.features.dashcam',
      'pricing.features.subscriptionLifetime',
      'pricing.features.cloudStorageUnlimited',
      'pricing.features.whiteGlove',
      'pricing.features.emergencyResponse'
    ]
  },
  {
    id: 'guardian-elite',
    sku: 'ASTRA-ELITE',
    price_cents: 52900,
    deposit_cents: 4900,
    name_en: 'Guardian Elite',
    name_fr: 'Gardien Élite',
    features_en: [
      'pricing.features.dashcamUpgraded',
      'pricing.features.subscription18',
      'pricing.features.cloudStorageShareable',
      'pricing.features.driverCoaching',
      'pricing.features.roadsideAssistance'
    ],
    features_fr: [
      'pricing.features.dashcamUpgraded',
      'pricing.features.subscription18',
      'pricing.features.cloudStorageShareable',
      'pricing.features.driverCoaching',
      'pricing.features.roadsideAssistance'
    ]
  }
];

export default function Pricing() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-10 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              {t('pricing.title')}
            </h2>
            <p className="text-slate font-medium">Top picks for professional safety</p>
          </div>
          <span className="text-slate text-sm font-medium">82 spots available today</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className={`relative flex flex-col h-full bg-white border-border overflow-hidden transition-all hover:shadow-xl group ${product.popular ? 'ring-2 ring-accent' : ''}`}>
                {product.popular && (
                  <div className="bg-accent text-white py-2 text-center text-[10px] font-bold uppercase tracking-widest">
                    Most Popular Choice
                  </div>
                )}
                
                <div className="bg-slate/5 aspect-video flex items-center justify-center text-slate/40 text-[10px] font-bold uppercase tracking-widest border-b border-border">
                   Product Visualization
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-slate/5 text-slate border-none text-[10px] uppercase font-bold tracking-wider">
                      {(idx + 1) * 10}% Off Launch
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-1">{currentLang === 'en' ? product.name_en : product.name_fr}</h3>
                  <div className="text-sm text-slate mb-6">Automotive Safety • Premium</div>

                  <div className="text-3xl font-bold text-navy mb-8 border-b border-border pb-6">
                    {Math.round(product.price_cents / 100)} {t('common.currency')}
                  </div>

                  <div className="space-y-3 mb-8">
                    {(currentLang === 'en' ? product.features_en : product.features_fr).map((featureKey) => (
                      <div key={featureKey} className="flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full border border-accent flex items-center justify-center text-accent">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span className="text-[13px] font-medium text-slate uppercase tracking-wider">{t(featureKey)}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-navy hover:opacity-90 text-white font-bold h-12 rounded-md uppercase tracking-widest text-[11px]">
                    <Link to={`/reserve?product=${product.sku}`}>
                      {t('common.reserveSpot')}
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
