# SL-Glove Website

A modern, responsive React website for SL-Glove - the revolutionary smart learning glove with gesture recognition and haptic feedback technology.

## 🚀 Features

- **Modern React Architecture**: Built with Vite + React for optimal performance
- **Beautiful Animations**: Framer Motion animations with reduced motion support
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode**: System preference detection with manual toggle
- **Accessibility**: WCAG compliant with keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD schema
- **Smooth Scrolling**: Enhanced scrolling experience with Lenis
- **GitHub Pages Ready**: Configured for easy deployment

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Smooth Scrolling**: @studio-freight/lenis
- **Icons**: SVG icons with custom components
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Prerequisites**
   - Node.js 18+ 
   - npm or yarn

2. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sl-glove-website.git
   cd sl-glove-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the project to the `dist` folder
   - Push the built files to the `gh-pages` branch
   - GitHub Pages will automatically deploy from this branch

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch and `/` folder

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your web server

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Nav.jsx         # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── FeatureCard.jsx # Feature display card
│   ├── Stepper.jsx     # Step-by-step process display
│   ├── VideoCard.jsx   # Video demo card
│   ├── TeamCard.jsx    # Team member card
│   ├── FAQItem.jsx     # FAQ accordion item
│   └── ThemeToggle.jsx # Dark/light mode toggle
├── sections/           # Page sections
│   ├── HeroSection.jsx # Hero/landing section
│   ├── ValueSection.jsx # Value proposition
│   ├── FeaturesSection.jsx # Features showcase
│   ├── HowItWorksSection.jsx # Process explanation
│   ├── DemoSection.jsx # Demo videos and interactive content
│   ├── TeamSection.jsx # Team members
│   ├── FAQSection.jsx # Frequently asked questions
│   └── ContactSection.jsx # Contact form and info
├── hooks/              # Custom React hooks
│   ├── useTheme.js     # Theme management
│   ├── useReducedMotion.js # Reduced motion detection
│   └── useScrollSpy.js # Active section tracking
├── data/               # Static data
│   ├── features.js     # Feature definitions
│   ├── team.js         # Team member data
│   └── faq.js          # FAQ content
├── styles/             # Global styles
│   └── globals.css     # Tailwind and custom styles
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark mode colors
  }
}
```

### Content
Update the data files in `src/data/` to modify:
- Feature descriptions
- Team member information
- FAQ content
- Contact information

### Styling
- Global styles: `src/styles/globals.css`
- Component styles: Individual component files
- Tailwind configuration: `tailwind.config.js`

## ♿ Accessibility

This website is built with accessibility in mind:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Reduced motion preferences
- High contrast ratios
- Screen reader friendly

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling
- [React](https://reactjs.org/) for the component architecture

## 📞 Support

For support, email contact@sl-glove.com or join our community Discord.

---

Made with ❤️ for revolutionizing education through technology.
