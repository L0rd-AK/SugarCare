# 🩺 SugarCare - Smart Diabetes Management

<div align="center">

![SugarCare Logo](https://img.shields.io/badge/SugarCare-Smart%20Health%20Management-blue?style=for-the-badge&logo=react)

**A modern, intuitive diabetes management application built with React and Firebase**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.7.1-FFCA28?style=flat&logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

[Live Demo](#) • [Features](#-features) • [Getting Started](#-getting-started) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

## 🌟 Overview

SugarCare is a comprehensive diabetes management application designed to help users track their blood sugar levels, analyze trends, and make informed health decisions. With a modern, intuitive interface and powerful features, SugarCare makes diabetes management simpler and more effective.

### ✨ Key Highlights

- **📊 Real-time Tracking** - Log blood glucose levels with instant feedback and status indicators
- **📈 Visual Analytics** - Beautiful charts and graphs to visualize your health trends
- **🤖 AI-Powered Insights** - Get personalized recommendations based on your data
- **👥 Community Support** - Connect with others on similar health journeys
- **📱 Mobile-First Design** - Responsive interface that works perfectly on all devices
- **🔐 Secure & Private** - Your health data is protected with Firebase Authentication

## 🚀 Features

### Core Functionality
- **Blood Sugar Logging**: Easy-to-use form with real-time validation and feedback
- **Meal Status Tracking**: Track readings before or after meals with appropriate reference ranges
- **Historical Data**: View and analyze your glucose trends over time
- **Data Persistence**: Your data is safely stored and synchronized across devices

### User Experience
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Dark/Light Mode**: Adaptive design that's easy on the eyes
- **Mobile Responsive**: Perfect experience on phones, tablets, and desktops
- **Offline Support**: Continue tracking even without internet connection

### Health Features
- **Smart Recommendations**: AI-powered insights based on your readings
- **Normal Range Indicators**: Visual cues to help you understand your levels
- **Trend Analysis**: Identify patterns and potential concerns
- **Export Data**: Download your health data for doctor visits

### Social Features
- **Community Hub**: Connect with other users managing diabetes
- **Share Progress**: Optional sharing of achievements and milestones
- **Support Groups**: Join discussions and get peer support

## 🎯 Target Users

- **Individuals with Diabetes** - Type 1 and Type 2 diabetes management
- **Pre-diabetic Individuals** - Monitoring and prevention
- **Healthcare Providers** - Tool for patient monitoring
- **Family Members** - Supporting loved ones with diabetes
- **Health Enthusiasts** - General blood sugar awareness

## 🛠️ Technology Stack

### Frontend
- **React 18.2** - Modern React with hooks and functional components
- **Vite 5.0** - Lightning-fast build tool and development server
- **Tailwind CSS 3.3** - Utility-first CSS framework for rapid UI development
- **Chart.js 4.4** - Beautiful, responsive charts for data visualization

### Backend & Services
- **Firebase Authentication** - Secure user authentication and authorization
- **Firestore Database** - Real-time NoSQL database for data storage
- **Firebase Hosting** - Fast, secure web hosting

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn**
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/L0rd-AK/SugarCare.git
cd SugarCare
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication with Email/Password
4. Create a Firestore database
5. Add your domain to authorized domains

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 6. Build for Production
```bash
npm run build
# or
yarn build
```

## 📱 Usage Guide

### Getting Started
1. **Sign Up/Login**: Create an account or sign in with existing credentials
2. **Record Your First Reading**: Use the intuitive form to log your blood sugar level
3. **Choose Meal Status**: Select whether the reading is before or after a meal
4. **View Results**: Get instant feedback on your glucose level
5. **Explore History**: View your trends and patterns over time

### Features Walkthrough

#### 📝 Recording Blood Sugar
- Select meal timing (before/after meal)
- Enter your glucose reading
- Get real-time feedback on normal ranges
- Automatic timestamp recording

#### 📊 Viewing History
- Interactive charts showing your glucose trends
- Filter by date range
- Identify patterns and outliers
- Export data for healthcare providers

#### 🤖 AI Chat Assistant
- Ask questions about diabetes management
- Get personalized recommendations
- Learn about healthy lifestyle choices
- Understand your glucose patterns

#### 👥 Community Features
- Connect with other users
- Share experiences and tips
- Join support groups
- Celebrate milestones together

## 🎨 Design System

SugarCare uses a modern design system built with Tailwind CSS:

### Color Palette
- **Primary**: Blue tones (#2563eb) for main actions and branding
- **Secondary**: Neutral grays for text and backgrounds
- **Accent**: Light blue (#0ea5e9) for highlights
- **Health Colors**: Green (normal), Yellow (caution), Red (alert)

### Typography
- **Font Family**: Inter - Clean, modern, and highly readable
- **Font Weights**: 300-800 for proper hierarchy
- **Responsive Sizing**: Scales appropriately across devices

### Components
- **Glass Morphism**: Modern glassmorphic effects for headers
- **Soft Shadows**: Subtle depth without overwhelming
- **Rounded Corners**: Friendly, approachable interface
- **Smooth Animations**: Enhance user experience

## 📸 Screenshots

> **Note**: Screenshots will be added after deployment

- Dashboard Overview
- Blood Sugar Recording
- Historical Charts
- Mobile Interface
- AI Chat Interface

## 🔒 Privacy & Security

SugarCare takes your privacy seriously:

- **Firebase Authentication**: Industry-standard security
- **Data Encryption**: All data is encrypted in transit and at rest
- **Local Storage**: Sensitive data is stored securely
- **No Third-Party Sharing**: Your health data stays with you
- **HIPAA Considerations**: Built with healthcare privacy in mind

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design

## 🐛 Bug Reports

Found a bug? Please help us improve by reporting it:

1. Check if the issue already exists
2. Use the bug report template
3. Provide detailed steps to reproduce
4. Include screenshots if applicable
5. Mention your environment details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Firebase Team** - For the robust backend services
- **Tailwind CSS** - For the excellent utility framework
- **Chart.js** - For beautiful data visualizations
- **Healthcare Community** - For inspiration and feedback

## 📞 Support

Need help? Reach out to us:

- **GitHub Issues**: [Report bugs or request features](https://github.com/L0rd-AK/SugarCare/issues)
- **Email**: support@sugarcare.app
- **Documentation**: [Wiki](https://github.com/L0rd-AK/SugarCare/wiki)

## 🗺️ Roadmap

### Version 2.0 (Coming Soon)
- [ ] Advanced analytics and insights
- [ ] Integration with fitness trackers
- [ ] Medication reminders
- [ ] Healthcare provider portal
- [ ] Meal photo analysis
- [ ] HbA1c tracking

### Version 2.1
- [ ] Apple Health / Google Fit integration
- [ ] Multi-language support
- [ ] Offline data sync
- [ ] Advanced reporting
- [ ] Family sharing features

---

<div align="center">

**Built with ❤️ by [L0rd-AK](https://github.com/L0rd-AK)**

⭐ Star this repository if you find it helpful!

</div>