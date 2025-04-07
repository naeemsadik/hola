# Hola - Language Learning App 🌍📚

![App Preview](https://via.placeholder.com/800x400?text=Hola+App+Screenshots)

A modern flashcard-based language learning application built with React Native and Expo, designed to help users master new vocabulary through interactive exercises.

## Features ✨
- **Interactive Flashcards**: Flip cards for translations
- **Progress Tracking**: Visual progress bar and card counter
- **Bilingual Examples**: Example sentences with translations
- **Dark Mode**: Eye-friendly dark theme
- **Spaced Repetition**: "Retry" and "Save" features for difficult cards
- **Multi-Language Support**: Built-in localization system
- **Audio Integration**: Pronunciation guides (placeholder)
- **Progress Statistics**: Track learning milestones

## Prerequisites 📋
- Node.js (v18+)
- npm (v9+)
- Expo CLI
- Android Studio (for local builds)
- Expo account

## Installation 🛠️
1. Clone the repository:
```bash
git clone https://github.com/naeemsadik/hola-app.git
cd hola-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
expo start
```

## Usage 📱
### Basic Navigation
- **Home Screen**: Swipe through flashcards
  - Tap card to flip (word ↔ translation)
  - Use ←/→ buttons to navigate
- **Settings**: Adjust preferences and app behavior
  - Toggle dark mode
  - Set daily reminders
  - Configure learning language

### Key Commands
| Action                | Command           |
|-----------------------|-------------------|
| Start dev server      | `expo start`      |
| Android emulator      | `expo run:android`|
| iOS simulator         | `expo run:ios`    |
| Production build      | `eas build`       |

## Building the APK 📦
1. Configure EAS:
```bash
eas build:configure
```

2. Build Android APK:
```bash
eas build --platform android --profile apk
```

3. Download built APK from [Expo Dashboard](https://expo.dev)

## Project Structure 📂
```
hola-app/
├── assets/           # Media resources
├── app/              # Core application
│   ├── components/   # Reusable components
│   ├── constants/    # Styles & configuration
│   └── navigation/   # Routing logic
├── eas.json          # Build configuration
└── app.json          # Expo metadata
```

## Contributing 🤝
1. Fork the repository
2. Create feature branch:
```bash
git checkout -b feature/amazing-feature
```
3. Commit changes
4. Push to branch
5. Open pull request

## License 📄
MIT License - See [LICENSE](LICENSE) for details

## Acknowledgments 🙏
- Built with [Expo](https://expo.dev)
- UI components from [React Native Elements](https://reactnativeelements.com)
- Icons by [Ionicons](https://ionicons.com)

