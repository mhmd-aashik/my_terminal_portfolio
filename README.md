# Terminal Portfolio

A modern, interactive terminal-style developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Interactive Terminal Interface**: Type commands to explore different sections
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Command System**: Full command-line interface with history and auto-completion
- **Modern UI**: Glassmorphism effects and neon terminal styling
- **TypeScript**: Fully typed for better development experience

## 🎯 Available Commands

- `help` - Show available commands
- `about` - Display personal information
- `skills` - Show technical skills
- `projects` - List featured projects
- `contact` - Get in touch information
- `resume` - Download resume
- `whoami` - Display current user info
- `date` - Show current date and time
- `ls` - List available commands
- `clear` - Clear terminal screen

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd terminal-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and terminal theme
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Terminal.tsx         # Main terminal component
│   ├── TerminalHeader.tsx   # Terminal window header
│   ├── CommandLine.tsx      # Command input line
│   ├── CommandOutput.tsx    # Command output wrapper
│   ├── BlinkingCursor.tsx   # Animated cursor
│   ├── TypingAnimation.tsx  # Typing animation component
│   └── ResumeDialog.tsx     # Resume download dialog
└── data/
    └── portfolio.ts         # Portfolio data and content
```

## 🎨 Customization

### Updating Portfolio Content

Edit `src/data/portfolio.ts` to customize:

- Personal information and bio
- Skills and technologies
- Projects and their details
- Contact information
- Available commands

### Styling

The terminal theme is defined in `src/app/globals.css`. Key classes:

- `.terminal-bg` - Background gradient
- `.terminal-window` - Main terminal container
- `.terminal-header` - Terminal window header
- `.terminal-cursor` - Blinking cursor animation
- `.command-line` - Command input styling
- `.command-output` - Command output styling

### Adding New Commands

1. Add the command to `helpCommands` in `portfolio.ts`
2. Add a case in the `executeCommand` function in `Terminal.tsx`
3. Implement the command logic and output

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 📱 Responsive Design

The terminal is fully responsive and adapts to different screen sizes:

- Mobile: Optimized touch interface
- Tablet: Balanced layout
- Desktop: Full terminal experience

## 🎯 Keyboard Shortcuts

- `Enter` - Execute command
- `↑/↓` - Navigate command history
- `Tab` - Auto-complete commands
- `Ctrl+L` - Clear terminal (browser default)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by terminal interfaces and developer tools
- Built with modern web technologies
- Designed for developer portfolios

---

**Happy coding!** 🚀
