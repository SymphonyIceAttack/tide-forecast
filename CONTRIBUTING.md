# Contributing to US Tide Forecast

Thank you for your interest in contributing to US Tide Forecast! This document provides guidelines and information for contributors.

## 🌊 About the Project

US Tide Forecast is an open source project providing professional-grade tide predictions and charts for US coastal locations. We welcome contributions from developers, marine scientists, maritime professionals, and anyone passionate about accurate tide forecasting.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git for version control

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tide-forecast.git
   cd tide-forecast
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development Server**
   ```bash
   pnpm dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Workflow

### Making Changes

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. **Make Your Changes**
   - Follow our coding standards (see below)
   - Test your changes locally
   - Add tests if applicable

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new tide visualization feature"
   ```

4. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use our PR template
   - Provide a clear description of changes
   - Reference any related issues

### Commit Message Guidelines

We follow [Conventional Commits](https://conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes  
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
- `feat: add support for Gulf Coast tide stations`
- `fix: resolve issue with tide chart rendering`
- `docs: update installation instructions`

## 📋 Coding Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all data structures
- Avoid `any` types unless absolutely necessary
- Use meaningful variable and function names

### Code Style
We use Biome for linting and formatting:
```bash
# Check for issues
pnpm lint

# Fix formatting issues
pnpm format
```

### Component Guidelines
- Use functional components with hooks
- Follow React best practices
- Implement proper error boundaries
- Use semantic HTML elements
- Ensure accessibility compliance (WCAG 2.1 AA)

### File Organization
```
app/                    # Next.js App Router pages
├── api/               # API routes
├── posts/             # Blog system
├── layout.tsx         # Root layout
└── page.tsx          # Homepage

components/            # React components
├── ui/               # Base UI components
├── blog/             # Blog components
└── [feature].tsx     # Feature components

lib/                  # Utilities and configurations
├── types.ts          # TypeScript types
├── utils.ts          # Utility functions
└── [service].ts      # External service integrations
```

## 🧪 Testing

### Current Testing Strategy
We use manual testing for the current version. Automated tests are planned for future releases.

### Manual Testing Checklist
- [ ] Tide data loads correctly for all stations
- [ ] Charts render properly on desktop and mobile
- [ ] Location switching works smoothly
- [ ] All navigation links function
- [ ] No console errors in browser
- [ ] Responsive design works across devices

### Running Tests
```bash
pnpm test
```

## 🎯 Areas for Contribution

### High Priority
- 🐛 **Bug Fixes**: Fix issues with tide data loading, chart rendering, or mobile experience
- 📊 **New Features**: Additional NOAA stations, enhanced charts, export functionality
- 🌍 **Coverage**: Add more US coastal locations
- 📱 **Mobile**: Improve mobile experience and PWA features

### Medium Priority  
- 🔧 **Performance**: Optimize loading times, reduce bundle size
- 📚 **Documentation**: Improve code comments, API documentation
- 🧪 **Testing**: Add automated tests, improve test coverage
- 🎨 **UI/UX**: Enhance user interface and experience

### Long Term
- 🌍 **International**: Expand to international tide forecasting
- 🌤️ **Weather Integration**: Add weather data and alerts
- 📱 **Mobile App**: Native mobile applications
- 🤖 **AI/ML**: Machine learning for enhanced predictions

## 🏷️ Issue Types

### Bug Reports
- **High**: Critical functionality broken
- **Medium**: Feature not working as expected
- **Low**: Minor UI issues or improvements

### Feature Requests
- **Enhancement**: Improve existing functionality
- **New Feature**: Add new capabilities
- **Integration**: Connect with external services

## 📞 Communication

### Getting Help
- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Email**: support@tide-forecast.art for private inquiries

### Response Times
- **Issues**: 2-3 days for initial response
- **Pull Requests**: 1-2 weeks for review
- **Feature Requests**: 1-2 weeks for evaluation

## 🔍 Code Review Process

### What We Look For
1. **Functionality**: Does the code work as intended?
2. **Quality**: Is the code clean, readable, and maintainable?
3. **Performance**: Are there any performance implications?
4. **Security**: Are there any security concerns?
5. **Accessibility**: Does the code maintain accessibility standards?

### Review Checklist
- [ ] Code follows project conventions
- [ ] Changes are well-documented
- [ ] No breaking changes (or clearly communicated)
- [ ] Tests pass (when implemented)
- [ ] Accessibility maintained
- [ ] Performance impact considered

## 🏆 Recognition

### Contributors
All contributors will be recognized in:
- README.md contributors section
- GitHub contributors page
- Release notes for significant contributions

### How to Get Listed
1. Make a meaningful contribution (not just documentation fixes)
2. Ensure your GitHub profile has your name/contact
3. We'll automatically detect contributions via GitHub

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

## 🙏 Thank You

Thank you for contributing to US Tide Forecast! Your efforts help make accurate tide predictions accessible to mariners, researchers, and maritime professionals worldwide.

Every contribution, no matter how small, makes a difference. We appreciate your time and expertise.

---

**Questions?** Feel free to reach out via GitHub Issues or email support@tide-forecast.art

**Happy Coding! 🌊**