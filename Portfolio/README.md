# Muhammad Faizan Satti - Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional design with gradient backgrounds
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Navigation**: Sticky header with active section highlighting
- **Contact Form**: Functional contact form with validation
- **Social Links**: Quick access to GitHub, LinkedIn, and email

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Responsive Design** - Mobile-first approach

## 📋 Sections

1. **Hero Section** - Introduction with call-to-action
2. **Skills** - Grouped skills with icons and hover effects
3. **Projects** - Featured projects with tech stack and links
4. **Experience** - Work experience timeline
5. **Education** - Academic background and certifications
6. **Contact** - Contact form and social links
7. **Footer** - Copyright and additional links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with theme toggle
│   ├── Hero.jsx           # Hero section with introduction
│   ├── Skills.jsx         # Skills section with categories
│   ├── Projects.jsx       # Projects showcase
│   ├── Experience.jsx     # Work experience timeline
│   ├── Education.jsx      # Education and certifications
│   ├── Contact.jsx        # Contact form and info
│   └── Footer.jsx         # Footer with social links
├── App.jsx                # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `theme.extend.colors` section.

### Content
Update the content in each component file to match your information:
- Personal details in `Hero.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Experience in `Experience.jsx`
- Education in `Education.jsx`
- Contact information in `Contact.jsx`

### Styling
Modify the Tailwind classes in each component to adjust the styling and layout.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The dark mode toggle is implemented using CSS custom properties and Tailwind's dark mode classes. The theme preference is managed in the main App component.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Name**: Muhammad Faizan Satti
- **Email**: faizan.satti@example.com
- **GitHub**: [@faizansatti](https://github.com/faizansatti)
- **LinkedIn**: [Muhammad Faizan Satti](https://linkedin.com/in/faizansatti)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
