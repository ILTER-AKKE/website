export const faqs = [
  {
    id: 1,
    question: 'How does SL-Glove recognize gestures?',
    answer: 'SL-Glove uses advanced computer vision algorithms and machine learning to analyze hand movements captured by integrated sensors. The system is trained on thousands of gesture patterns and continuously improves accuracy through user interaction.',
    category: 'technology',
    tags: ['gesture-recognition', 'technology', 'how-it-works']
  },
  {
    id: 2,
    question: 'What devices are compatible with SL-Glove?',
    answer: 'SL-Glove is compatible with Windows, macOS, iOS, and Android devices. It connects via Bluetooth 5.0 or USB-C for seamless integration with your existing setup. Minimum system requirements include Bluetooth 4.0+ or USB 3.0+.',
    category: 'compatibility',
    tags: ['devices', 'compatibility', 'system-requirements']
  },
  {
    id: 3,
    question: 'How long does the battery last?',
    answer: 'SL-Glove provides up to 8 hours of continuous use on a single charge. The device includes fast-charging capabilities, reaching 80% charge in just 30 minutes. Battery life may vary based on usage intensity and gesture complexity.',
    category: 'hardware',
    tags: ['battery', 'hardware', 'charging']
  },
  {
    id: 4,
    question: 'Is SL-Glove suitable for all ages?',
    answer: 'Yes! SL-Glove is designed for learners of all ages, from children as young as 6 to adult learners. The system includes adjustable sensitivity settings and age-appropriate content libraries to ensure optimal learning experiences for different user groups.',
    category: 'usage',
    tags: ['age-appropriate', 'accessibility', 'content']
  },
  {
    id: 5,
    question: 'What learning subjects are supported?',
    answer: 'SL-Glove supports a wide range of subjects including mathematics, science, language learning, history, geography, and art. The platform includes pre-built lesson libraries and allows educators to create custom content tailored to their curriculum needs.',
    category: 'content',
    tags: ['subjects', 'content', 'curriculum']
  },
  {
    id: 6,
    question: 'How accurate is the gesture recognition?',
    answer: 'SL-Glove achieves 95%+ accuracy in gesture recognition under normal usage conditions. The system uses advanced AI algorithms that adapt to individual users, improving accuracy over time as it learns each person\'s unique hand movements and patterns.',
    category: 'technology',
    tags: ['accuracy', 'technology', 'ai']
  },
  {
    id: 7,
    question: 'Can multiple users use the same glove?',
    answer: 'Yes, SL-Glove supports multiple user profiles. Each user can have their own personalized settings, learning progress, and gesture calibrations. The system automatically switches between users based on hand size and movement patterns.',
    category: 'usage',
    tags: ['multi-user', 'profiles', 'personalization']
  },
  {
    id: 8,
    question: 'What kind of haptic feedback does it provide?',
    answer: 'SL-Glove features precise haptic feedback through advanced vibration motors and pressure sensors. Users receive tactile responses for correct gestures, gentle corrections for mistakes, and directional guidance for complex movements.',
    category: 'hardware',
    tags: ['haptic-feedback', 'hardware', 'sensors']
  },
  {
    id: 9,
    question: 'Is there technical support available?',
    answer: 'Yes, we provide comprehensive technical support through multiple channels including email, live chat, and video calls. Our support team is available Monday-Friday 9 AM-6 PM EST, with extended hours during peak usage periods.',
    category: 'support',
    tags: ['support', 'help', 'contact']
  },
  {
    id: 10,
    question: 'What is the warranty and return policy?',
    answer: 'SL-Glove comes with a 2-year manufacturer warranty covering hardware defects and malfunctions. We offer a 30-day money-back guarantee if you\'re not satisfied with your purchase. Returns are free and easy through our online portal.',
    category: 'purchase',
    tags: ['warranty', 'returns', 'guarantee']
  },
  {
    id: 11,
    question: 'How do I set up SL-Glove for the first time?',
    answer: 'Setting up SL-Glove is simple! Download our companion app, connect the glove via Bluetooth or USB, and follow the on-screen calibration process. The entire setup takes less than 5 minutes and includes helpful tutorials.',
    category: 'setup',
    tags: ['setup', 'installation', 'getting-started']
  },
  {
    id: 12,
    question: 'Can I use SL-Glove offline?',
    answer: 'Yes, SL-Glove works offline for basic gesture recognition and learning activities. However, some advanced features like progress sync, cloud analytics, and content updates require an internet connection.',
    category: 'usage',
    tags: ['offline', 'connectivity', 'features']
  },
  {
    id: 13,
    question: 'What languages are supported?',
    answer: 'SL-Glove currently supports English, Spanish, French, German, and Mandarin Chinese. We\'re continuously adding more languages based on user demand and educational needs.',
    category: 'content',
    tags: ['languages', 'localization', 'content']
  },
  {
    id: 14,
    question: 'How much does SL-Glove cost?',
    answer: 'SL-Glove is available in multiple configurations starting at $299 for the basic model. Educational institutions and bulk purchases receive special pricing. Contact our sales team for detailed pricing information.',
    category: 'purchase',
    tags: ['pricing', 'cost', 'purchase']
  },
  {
    id: 15,
    question: 'Is SL-Glove safe for children?',
    answer: 'Absolutely! SL-Glove is designed with safety in mind, using non-toxic materials and low-power electronics. It\'s been tested for safety and complies with all relevant child safety standards and regulations.',
    category: 'safety',
    tags: ['safety', 'children', 'materials']
  }
]

export const faqCategories = [
  {
    name: 'Technology',
    description: 'Questions about how SL-Glove works',
    icon: '🔧',
    faqs: [1, 6, 8]
  },
  {
    name: 'Setup & Usage',
    description: 'Getting started and daily use',
    icon: '🚀',
    faqs: [2, 4, 7, 11, 12]
  },
  {
    name: 'Content & Learning',
    description: 'Educational content and subjects',
    icon: '📚',
    faqs: [5, 13]
  },
  {
    name: 'Hardware',
    description: 'Physical device and specifications',
    icon: '⚙️',
    faqs: [3, 15]
  },
  {
    name: 'Purchase & Support',
    description: 'Buying, warranty, and getting help',
    icon: '💬',
    faqs: [9, 10, 14]
  }
]
