# 🌊 US Tide Forecast - Professional NOAA Tide Predictions

A professional-grade tide forecasting service providing real-time NOAA tide predictions and interactive charts for US coastal locations. Trusted by mariners, commercial maritime operators, and coastal professionals nationwide.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SymphonyIceAttack/tide-forecast)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.0+-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)

## 🚀 Live Demo

**Website**: [https://tide-forecast.art/](https://tide-forecast.art/)  
**GitHub Repository**: [https://github.com/SymphonyIceAttack/tide-forecast](https://github.com/SymphonyIceAttack/tide-forecast)

## ✨ Features

### 📊 Professional Tide Charts
- Real-time tide predictions with ±15-minute timing accuracy
- ±0.1-0.2 feet height precision
- Interactive charts powered by ECharts and Recharts
- Weekly and daily tide forecasts

### 🗺️ Comprehensive Coverage
- 100+ coastal monitoring stations across US coastlines
- Real-time data updates every 30 minutes
- Coverage for major maritime routes and harbors
- Pacific, Atlantic, and Gulf Coast locations

### 🏛️ Professional Standards
- Government-grade accuracy from NOAA sources
- Trusted by maritime professionals and commercial operators
- Maritime safety compliance standards
- Professional visualization tools

### 🎨 Modern User Experience
- Responsive design with mobile-first approach
- Dark/light theme support
- Accessible UI with ARIA compliance
- Professional maritime industry styling

### 📱 Multi-Platform Support
- Desktop and mobile optimized
- Progressive Web App (PWA) capabilities
- SEO optimized with structured data
- Social media integration

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16+](https://nextjs.org/)** - Full-stack React framework with App Router
- **[React 19.2](https://react.dev/)** - Latest React features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[class-variance-authority](https://cva.style/)** - Variant management

### Data & State Management
- **[NOAA API](https://api.tidesandcurrents.noaa.gov/)** - Government tide data source
- **[@tanstack/react-query](https://tanstack.com/query)** - Server state management
- **[@directus/sdk](https://docs.directus.io/)** - CMS integration for blog content

### Visualization & Charts
- **[ECharts](https://echarts.apache.org/)** - Advanced charting library
- **[Recharts](https://recharts.org/)** - React-based charting

### Development Tools
- **[Biome](https://biomejs.dev/)** - Unified linter and formatter
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Vercel Analytics](https://vercel.com/analytics)** - Performance monitoring

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/SymphonyIceAttack/tide-forecast.git
   cd tide-forecast
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following environment variables:
   ```env
   # Directus CMS (Optional - for blog functionality)
   NEXT_PUBLIC_DIRECTUS_URL=https://soyo-directus.lzyinglian.com
   DIRECTUS_ACCESS_TOKEN=your_access_token_here
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://tide-forecast.art
   ```

4. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Development
```bash
# Start development server
pnpm dev

# Type checking
pnpm type-check

# Linting
pnpm lint

# Formatting
pnpm format
```

### Production
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Deployment Options

#### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SymphonyIceAttack/tide-forecast)

1. Click the deploy button above
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy automatically

#### Other Platforms
- **Netlify**: Use the `netlify.toml` configuration
- **Docker**: Use the provided Dockerfile
- **Static Export**: Run `pnpm build && pnpm export`

## 📊 API Integration

### NOAA Tide API
The application integrates with the NOAA (National Oceanic and Atmospheric Administration) tide prediction API:

```typescript
// Example API call structure
const response = await fetch(
  `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?` +
  `product=predictions&` +
  `station=9411340&` +
  `begin_date=20241205&` +
  `end_date=20241212&` +
  `datum=MLLW&` +
  `units=english&` +
  `time_zone=lst_ldt&` +
  `format=json`
);
```

### Data Caching
- 30-minute revalidation for NOAA data
- Client-side caching with React Query
- Optimistic updates for better UX

## 🏛️ Professional Features

### Maritime Industry Standards
- **Commercial Fishing**: Optimal timing for fishing expeditions
- **Harbor Operations**: Vessel transit and cargo scheduling
- **Coastal Research**: Scientific studies and environmental monitoring

### Accuracy Standards
- **Timing**: ±15-minute precision
- **Height**: ±0.1-0.2 feet accuracy
- **Data Source**: Government-grade NOAA predictions
- **Update Frequency**: Every 30 minutes

### Safety & Compliance
- Maritime safety regulation support
- Environmental protection guidelines
- Emergency response coordination
- Regulatory reporting compliance

## 📁 Project Structure

```
tide-forecast/
├── app/                     # Next.js App Router
│   ├── api/                # API routes
│   │   └── tides/         # Tide data API endpoints
│   │   └── draft/         # Draft API routes
│   ├── posts/             # Blog system
│   │   ├── [slug]/        # Dynamic blog posts
│   │   └── page.tsx       # Blog listing page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── ui/                # Base UI components (Radix UI)
│   ├── blog/              # Blog-specific components
│   ├── tide-chart-*.tsx   # Chart components
│   └── professional-*.tsx # Professional UI components
├── lib/                   # Utilities and configurations
│   ├── directus.ts        # Directus CMS integration
│   ├── noaa-stations.ts   # NOAA station mappings
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   └── location-context.tsx # Location context provider
├── public/               # Static assets
└── .github/workflows/   # CI/CD configuration
```

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines before submitting PRs.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`pnpm test && pnpm lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Standards
- **TypeScript**: Strict type checking enabled
- **Linting**: Biome linter with recommended rules
- **Formatting**: Biome formatter with 2-space indentation
- **Testing**: Jest and React Testing Library
- **Accessibility**: WCAG 2.1 AA compliance

### Areas for Contribution
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📊 Additional NOAA station coverage
- 🌍 International tide forecasting
- 📱 Mobile app development
- 🔧 Performance optimizations
- 📚 Documentation improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 SymphonieIceAttack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **NOAA (National Oceanic and Atmospheric Administration)** - For providing official tide data
- **Next.js Team** - For the amazing React framework
- **Vercel** - For seamless deployment and analytics
- **Radix UI** - For accessible component primitives
- **ECharts Team** - For powerful charting capabilities
- **Maritime Community** - For feedback and professional requirements

## 📞 Support & Contact

- **Website**: [https://tide-forecast.art/](https://tide-forecast.art/)
- **GitHub Issues**: [Report bugs and request features](https://github.com/SymphonyIceAttack/tide-forecast/issues)
- **Discussions**: [Community discussions](https://github.com/SymphonyIceAttack/tide-forecast/discussions)
- **Email**: [Contact information available on website](https://tide-forecast.art/contact/)

## 🗺️ Roadmap

### Short Term (Q1 2025)
- [ ] Additional NOAA station coverage
- [ ] Enhanced mobile experience
- [ ] Export functionality for tide data
- [ ] Advanced chart customization

### Medium Term (Q2-Q3 2025)
- [ ] International tide forecasting
- [ ] Weather integration
- [ ] Mobile app development
- [ ] API rate limiting improvements

### Long Term (Q4 2025+)
- [ ] Machine learning predictions
- [ ] Real-time tide gauge integration
- [ ] Commercial API for enterprises
- [ ] Multi-language support

---

**Built with ❤️ for the maritime community**

*This project is dedicated to maritime professionals, researchers, and anyone who depends on accurate tide predictions for safe and efficient coastal operations.*