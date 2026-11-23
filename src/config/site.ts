// ============================================================================
//  T2M — Transit M. Meharzi
//  EDIT THIS FILE to change contact details, photos and all texts on the site.
// ============================================================================

// ---------------------------------------------------------------------------
// 1. Contact details & settings (shared by both languages)
// ---------------------------------------------------------------------------
export const site = {
  name: 'T2M',
  fullName: 'Transit M. Meharzi',

  // Phone shown on the page (display) and used in the tel: link (international format)
  phoneDisplay: '+213 (0) 00 00 00 00', // TODO: replace
  phoneLink: '+213000000000', // TODO: replace (no spaces)

  // WhatsApp number in international format, digits only, no "+" (e.g. 213550123456)
  whatsapp: '213000000000', // TODO: replace

  email: 'contact@example.com', // TODO: replace

  // Google Maps embed URL: Google Maps → Share → Embed a map → copy the src="..." value
  mapEmbedUrl:
    'https://www.google.com/maps?q=Port+d%27Alger,+Alger,+Alg%C3%A9rie&output=embed', // TODO: replace
  // Link opened by the "Open in Google Maps" button
  mapLink: 'https://maps.google.com/?q=Port+d%27Alger,+Alger', // TODO: replace

  // Web3Forms access key — get one free at https://web3forms.com (sent to your email)
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO: replace
};

// ---------------------------------------------------------------------------
// 2. Photos
//    Free photos from Unsplash (unsplash.com/license). To use your own photos,
//    put them in /public/images/ and replace a URL with e.g. '/images/port.jpg'.
// ---------------------------------------------------------------------------
export const images = {
  hero: 'https://images.unsplash.com/photo-1590496793907-4d66e2994b4d',
  about: 'https://images.unsplash.com/photo-1678182451047-196f22a4143e',
  band: 'https://images.unsplash.com/photo-1590497008432-598f04441de8',
  customs: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9',
  port: 'https://images.unsplash.com/photo-1670121180530-cfcba4438038',
  transport: 'https://images.unsplash.com/photo-1766785368863-f2188a8c8b32',
  vehicles: 'https://images.unsplash.com/photo-1774929104311-23cbc0d9c1ca',
  advice: 'https://images.unsplash.com/photo-1758876020343-c8c2add9d527',
};
export type ImageKey = keyof typeof images;

/** Sized URL for Unsplash photos; local files are returned unchanged. */
export function img(key: ImageKey, width: number): string {
  const src = images[key];
  return src.includes('images.unsplash.com') ? `${src}?auto=format&fit=crop&w=${width}&q=70` : src;
}
export function srcset(key: ImageKey, widths: number[]): string | undefined {
  return images[key].includes('images.unsplash.com')
    ? widths.map((w) => `${img(key, w)} ${w}w`).join(', ')
    : undefined;
}

// ---------------------------------------------------------------------------
// 3. Languages
// ---------------------------------------------------------------------------
export const languages = {
  fr: { label: 'Français', short: 'FR', dir: 'ltr' },
  ar: { label: 'العربية', short: 'ع', dir: 'rtl' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

// ---------------------------------------------------------------------------
// 4. Texts (translations)
//    Icons available: truck, anchor, car, doc, chat, clock, shield, check,
//    handshake, map, phone, mail
// ---------------------------------------------------------------------------
const fr = {
  meta: {
    title: 'T2M — Transit M. Meharzi | Transitaire & dédouanement en Algérie',
    description:
      'T2M, transitaire agréé en Algérie : dédouanement, manutention portuaire, transport, importation de véhicules et conseil. Demandez votre devis gratuit.',
  },
  nav: {
    services: 'Services',
    about: 'À propos',
    process: 'Méthode',
    contact: 'Contact',
    cta: 'Demander un devis',
    menu: 'Menu',
    skip: 'Aller au contenu',
  },
  address: 'Adresse à compléter, Alger, Algérie', // TODO: replace
  hours: 'Dim – Jeu : 8h00 – 17h00', // TODO: replace
  hero: {
    kicker: 'Transitaire en douane · Alger',
    tagline: 'Accélérateur de procédures',
    subtitle:
      'Dédouanement, logistique portuaire et transport. Nous prenons en charge vos marchandises du quai jusqu’à votre porte.',
    cta: 'Demander un devis',
    secondary: 'Découvrir nos services',
  },
  // Key facts shown under the hero — TODO: check each claim is accurate
  trust: [
    { title: 'Commissionnaire agréé', text: 'Agrément n° 00000' },
    { title: 'Tous les ports', text: 'Alger, Oran, Béjaïa, Annaba…' },
    { title: 'Devis sous 24 h', text: 'Jours ouvrables' },
    { title: 'Français · العربية', text: 'Un interlocuteur dédié' },
  ],
  about: {
    eyebrow: 'À propos',
    title: 'Chaque jour au port a un coût. Nous le réduisons.',
    text: 'Frais de magasinage, surestaries, documents manquants : un dossier mal préparé peut immobiliser une marchandise pendant des semaines. T2M prépare, dépose et suit vos déclarations jusqu’à la mainlevée, avec un seul interlocuteur du début à la fin.',
    imageAlt: 'Vue aérienne d’un port à conteneurs',
    points: [
      'Dossiers vérifiés avant l’arrivée du navire',
      'Connaissance précise de la réglementation algérienne',
      'Suivi en temps réel par téléphone et WhatsApp',
      'Devis clairs et détaillés, sans frais cachés',
    ],
  },
  services: {
    eyebrow: 'Nos services',
    title: 'Du navire à votre entrepôt',
    intro: 'Nous coordonnons chaque intervenant : douane, entreprise portuaire et transporteur.',
    items: [
      {
        image: 'customs',
        title: 'Dédouanement',
        text: 'Déclarations, classement tarifaire, calcul des droits et taxes, suivi jusqu’à la mainlevée.',
      },
      {
        image: 'port',
        title: 'Manutention portuaire',
        text: 'Débarquement, enlèvement des conteneurs et stockage, en lien avec les entreprises portuaires.',
      },
      {
        image: 'transport',
        title: 'Transport',
        text: 'Acheminement du port ou de l’aéroport jusqu’à vos locaux, partout en Algérie.',
      },
      {
        image: 'vehicles',
        title: 'Importation de véhicules',
        text: 'Dossier, dédouanement, conformité et récupération de votre véhicule.',
      },
      {
        image: 'advice',
        title: 'Conseil',
        text: 'Régimes douaniers, documents requis, coûts : nous vous conseillons avant l’expédition.',
      },
    ],
  },
  process: {
    eyebrow: 'Notre méthode',
    title: 'Votre dossier en 4 étapes',
    steps: [
      { title: 'Demande de devis', text: 'Vous nous décrivez votre marchandise par le formulaire, au téléphone ou sur WhatsApp.' },
      { title: 'Constitution du dossier', text: 'Nous vérifions vos documents et préparons la déclaration en douane.' },
      { title: 'Dédouanement', text: 'Nous suivons le dossier auprès de la douane et du port jusqu’à la mainlevée.' },
      { title: 'Livraison', text: 'Vos marchandises sont enlevées et livrées à l’adresse de votre choix.' },
    ],
  },
  band: {
    title: 'Une marchandise bloquée au port ?',
    text: 'Appelez-nous, nous étudions votre dossier aujourd’hui.',
    whatsapp: 'WhatsApp',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Demandez votre devis',
    subtitle: 'Décrivez votre opération, nous vous répondons sous 24 h ouvrables.',
    phone: 'Téléphone',
    whatsapp: 'Écrire sur WhatsApp',
    whatsappMessage: 'Bonjour T2M, je souhaite obtenir un devis.',
    email: 'E-mail',
    address: 'Adresse',
    hours: 'Horaires',
    openMap: 'Ouvrir dans Google Maps',
    mapTitle: 'Localisation de T2M sur Google Maps',
    details: 'Nos coordonnées',
    form: {
      name: 'Nom complet',
      company: 'Société (optionnel)',
      phone: 'Téléphone',
      email: 'E-mail',
      service: 'Service souhaité',
      servicePlaceholder: 'Choisir un service',
      message: 'Votre marchandise',
      messageHint: 'Nature, quantité, pays d’origine, port d’arrivée…',
      submit: 'Envoyer la demande',
      sending: 'Envoi en cours…',
      success: 'Merci ! Votre demande a bien été envoyée. Nous vous recontactons rapidement.',
      error: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.',
      subject: 'Nouvelle demande de devis — site T2M',
    },
  },
  footer: {
    about: 'Transitaire en douane en Algérie. Dédouanement, logistique portuaire, transport et conseil.',
    links: 'Navigation',
    contact: 'Contact',
    rights: 'Tous droits réservés.',
    photos: 'Photos : Unsplash',
  },
};

export type Dict = typeof fr;

const ar: Dict = {
  meta: {
    title: 'T2M — ترانزيت م. محرزي | وكيل عبور وتخليص جمركي في الجزائر',
    description:
      'T2M وكيل عبور معتمد في الجزائر: التخليص الجمركي، المناولة المينائية، النقل، استيراد السيارات والاستشارة. اطلب عرض سعر مجاني.',
  },
  nav: {
    services: 'خدماتنا',
    about: 'من نحن',
    process: 'طريقة عملنا',
    contact: 'اتصل بنا',
    cta: 'اطلب عرض سعر',
    menu: 'القائمة',
    skip: 'الانتقال إلى المحتوى',
  },
  address: 'العنوان (يُستكمل لاحقًا)، الجزائر العاصمة، الجزائر', // TODO: replace
  hours: 'الأحد – الخميس: 8:00 – 17:00', // TODO: replace
  hero: {
    kicker: 'وكيل عبور وتخليص جمركي · الجزائر',
    tagline: 'مُسرِّع الإجراءات',
    subtitle: 'تخليص جمركي، خدمات مينائية ونقل. نتكفّل ببضائعكم من الرصيف حتى باب مقرّكم.',
    cta: 'اطلب عرض سعر',
    secondary: 'اكتشف خدماتنا',
  },
  trust: [
    { title: 'وكيل عبور معتمد', text: 'اعتماد رقم 00000' },
    { title: 'جميع الموانئ', text: 'الجزائر، وهران، بجاية، عنابة…' },
    { title: 'عرض سعر خلال 24 ساعة', text: 'أيام العمل' },
    { title: 'العربية · Français', text: 'محاور مخصّص' },
  ],
  about: {
    eyebrow: 'من نحن',
    title: 'لكل يوم في الميناء ثمن. نحن نقلّصه.',
    text: 'مصاريف التخزين، غرامات التأخير، وثائق ناقصة: ملف غير محضّر جيدًا قد يُبقي البضاعة أسابيع في الميناء. تُعدّ T2M تصريحاتكم وتودعها وتتابعها حتى رفع اليد، مع محاور واحد من البداية إلى النهاية.',
    imageAlt: 'منظر جوي لميناء حاويات',
    points: [
      'ملفات يتم التحقق منها قبل وصول الباخرة',
      'معرفة دقيقة بالتنظيم الجزائري',
      'متابعة مستمرة عبر الهاتف وواتساب',
      'عروض أسعار واضحة ومفصّلة بدون تكاليف خفية',
    ],
  },
  services: {
    eyebrow: 'خدماتنا',
    title: 'من الباخرة إلى مستودعكم',
    intro: 'ننسّق مع كل المتدخلين: الجمارك، المؤسسة المينائية والناقل.',
    items: [
      {
        image: 'customs',
        title: 'التخليص الجمركي',
        text: 'التصريحات، التصنيف التعريفي، حساب الحقوق والرسوم، والمتابعة حتى رفع اليد.',
      },
      {
        image: 'port',
        title: 'المناولة المينائية',
        text: 'التفريغ وسحب الحاويات والتخزين بالتنسيق مع المؤسسات المينائية.',
      },
      {
        image: 'transport',
        title: 'النقل',
        text: 'نقل البضائع من الميناء أو المطار إلى مقرّاتكم في كامل التراب الوطني.',
      },
      {
        image: 'vehicles',
        title: 'استيراد السيارات',
        text: 'الملف، التخليص الجمركي، المطابقة واستلام سيارتكم.',
      },
      {
        image: 'advice',
        title: 'الاستشارة',
        text: 'الأنظمة الجمركية، الوثائق المطلوبة، التكاليف: ننصحكم قبل الشحن.',
      },
    ],
  },
  process: {
    eyebrow: 'طريقة عملنا',
    title: 'ملفكم في 4 مراحل',
    steps: [
      { title: 'طلب عرض سعر', text: 'تصفون لنا بضاعتكم عبر الاستمارة أو الهاتف أو واتساب.' },
      { title: 'تكوين الملف', text: 'نتحقق من وثائقكم ونُعدّ التصريح الجمركي.' },
      { title: 'التخليص الجمركي', text: 'نتابع الملف لدى الجمارك والميناء حتى رفع اليد.' },
      { title: 'التسليم', text: 'تُسحب بضائعكم وتُسلَّم إلى العنوان الذي تختارونه.' },
    ],
  },
  band: {
    title: 'بضاعتكم عالقة في الميناء؟',
    text: 'اتصلوا بنا، ندرس ملفكم اليوم.',
    whatsapp: 'واتساب',
  },
  contact: {
    eyebrow: 'اتصل بنا',
    title: 'اطلبوا عرض السعر',
    subtitle: 'صفوا لنا عمليتكم، نردّ عليكم خلال 24 ساعة من أيام العمل.',
    phone: 'الهاتف',
    whatsapp: 'راسلنا على واتساب',
    whatsappMessage: 'السلام عليكم T2M، أرغب في الحصول على عرض سعر.',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    hours: 'أوقات العمل',
    openMap: 'فتح في خرائط Google',
    mapTitle: 'موقع T2M على خرائط Google',
    details: 'معلومات الاتصال',
    form: {
      name: 'الاسم الكامل',
      company: 'الشركة (اختياري)',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      service: 'الخدمة المطلوبة',
      servicePlaceholder: 'اختر خدمة',
      message: 'بضاعتكم',
      messageHint: 'النوع، الكمية، بلد المنشأ، ميناء الوصول…',
      submit: 'إرسال الطلب',
      sending: 'جارٍ الإرسال…',
      success: 'شكرًا! تم إرسال طلبكم بنجاح. سنتصل بكم قريبًا.',
      error: 'حدث خطأ. يرجى المحاولة مجددًا أو الاتصال بنا هاتفيًا.',
      subject: 'طلب عرض سعر جديد — موقع T2M',
    },
  },
  footer: {
    about: 'وكيل عبور وتخليص جمركي في الجزائر. تخليص جمركي، خدمات مينائية، نقل واستشارة.',
    links: 'روابط',
    contact: 'اتصل بنا',
    rights: 'جميع الحقوق محفوظة.',
    photos: 'الصور: Unsplash',
  },
};

export const translations: Record<Lang, Dict> = { fr, ar };

export function t(lang: Lang): Dict {
  return translations[lang] ?? translations[defaultLang];
}
