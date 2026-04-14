# MealTime 🍽️

## Food Delivery Platform

MealTime is a modern food delivery platform that connects customers with their favorite restaurants. Built with a monorepo architecture, it provides a seamless experience for ordering food online.

## 🚀 Overview

MealTime simplifies the food ordering process by providing:
- 🍕 Easy restaurant browsing and menu exploration
- 📱 Intuitive ordering interface
- 🚚 Real-time order tracking
- 💳 Secure payment processing
- ⭐ Restaurant ratings and reviews

## 🎯 Target Users

- 🧑‍🍳 Restaurant owners and managers
- 👥 Customers looking for convenient food delivery
- 🚴 Delivery personnel
- 🏢 Corporate clients for bulk orders

## ⚙️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Language**: TypeScript

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS

### Infrastructure
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Code Quality**: Biome
- **Containerization**: Docker

## 🏗️ Architecture

MealTime follows a monorepo architecture with three main components:

### 1. Backend (MealTime-BE)
- RESTful API built with Express
- PostgreSQL database with Prisma ORM
- Modular route structure
- Type-safe API endpoints

### 2. Frontend (MealTime-FE)
- Next.js 14 with App Router
- Server and client components
- Responsive design
- Type-safe API integration

### 3. Shared Packages
- Common types and utilities
- Shared configuration files

## 📦 Project Structure

```
MealTime/
├── MealTime-BE/              # Backend application
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   ├── src/
│   │   ├── routes/           # API routes
│   │   │   ├── restaurants.ts
│   │   │   └── orders.ts
│   │   └── index.ts          # Entry point
│   ├── package.json
│   └── tsconfig.json
├── MealTime-FE/              # Frontend application
│   ├── app/                  # Next.js app directory
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── restaurants/
│   ├── lib/                  # Utilities
│   │   └── api.ts
│   ├── types/                # TypeScript types
│   ├── package.json
│   └── tsconfig.json
├── packages/                 # Shared packages
├── package.json              # Root package.json
├── pnpm-workspace.yaml       # pnpm workspace config
├── turbo.json                # Turborepo config
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)
- **PostgreSQL** (v14 or higher)
- **Docker** (optional, for containerized setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dev-Vik-Tor/MealTime.git
   cd MealTime
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create `.env` files in both backend and frontend directories:
   
   **Backend (.env in MealTime-BE/)**
   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/mealtime"
   PORT=4000
   ```
   
   **Frontend (.env.local in MealTime-FE/)**
   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
   ```

4. **Set up the database**
   ```bash
   cd MealTime-BE
   pnpm prisma migrate dev
   pnpm prisma generate
   cd ..
   ```

5. **Start the development servers**
   
   From the root directory:
   ```bash
   pnpm dev
   ```
   
   This will start both frontend and backend concurrently:
   - Backend: http://localhost:4000
   - Frontend: http://localhost:3000

### Running Individual Services

**Backend only:**
```bash
cd MealTime-BE
pnpm dev
```

**Frontend only:**
```bash
cd MealTime-FE
pnpm dev
```

## 🧪 Testing

Run tests across all packages:
```bash
pnpm test
```

Run tests for a specific package:
```bash
cd MealTime-BE
pnpm test
```

## 🏗️ Building for Production

Build all packages:
```bash
pnpm build
```

Start production servers:
```bash
# Backend
cd MealTime-BE
pnpm start

# Frontend
cd MealTime-FE
pnpm start
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Contribution Guidelines

#### 1. Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/Dev-Vik-Tor/MealTime.git
   cd MealTime
   ```

#### 2. Create a Branch

Create a feature branch for your work:
```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or updates

#### 3. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed
- Write tests for new features

#### 4. Code Quality Standards

**TypeScript:**
- Use strict type checking
- Avoid `any` types when possible
- Define interfaces for data structures

**Code Style:**
- Run the linter before committing:
  ```bash
  pnpm lint
  ```
- Format code with Biome:
  ```bash
  pnpm format
  ```

**Testing:**
- Write unit tests for new functions
- Ensure all tests pass:
  ```bash
  pnpm test
  ```
- Aim for >80% code coverage

#### 5. Commit Your Changes

Follow conventional commit messages:
```bash
git commit -m "feat: add restaurant search functionality"
git commit -m "fix: resolve order calculation bug"
git commit -m "docs: update API documentation"
```

Commit types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style changes
- `refactor` - Code refactoring
- `test` - Test updates
- `chore` - Build/config updates

#### 6. Push and Create Pull Request

1. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Go to GitHub and create a Pull Request

3. Fill out the PR template with:
   - Description of changes
   - Related issue numbers
   - Screenshots (if UI changes)
   - Testing steps

#### 7. Code Review Process

- Maintainers will review your PR
- Address any requested changes
- Once approved, your PR will be merged

### Development Workflow

1. **Pick an Issue**: Check the [Issues](https://github.com/Dev-Vik-Tor/MealTime/issues) page
2. **Discuss**: Comment on the issue to discuss your approach
3. **Develop**: Create your feature branch and implement
4. **Test**: Ensure all tests pass
5. **Document**: Update relevant documentation
6. **Submit**: Create a pull request

### Areas for Contribution

We're looking for help in these areas:

**Backend:**
- Payment integration
- Order tracking system
- Restaurant analytics
- User authentication
- API rate limiting

**Frontend:**
- UI/UX improvements
- Mobile responsiveness
- Accessibility features
- Performance optimization
- Component library

**Infrastructure:**
- CI/CD pipeline
- Docker configuration
- Monitoring and logging
- Database optimization

**Documentation:**
- API documentation
- User guides
- Architecture diagrams
- Tutorial videos

### Getting Help

- 💬 Join our [Discord community](https://discord.gg/mealtime)
- 📧 Email: dev@mealtime.com
- 📖 Check the [Wiki](https://github.com/Dev-Vik-Tor/MealTime/wiki)
- 🐛 Report bugs via [GitHub Issues](https://github.com/Dev-Vik-Tor/MealTime/issues)

### Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We're committed to providing a welcoming and inclusive environment.

## 📝 API Documentation

### Restaurants

**GET /api/restaurants**
- Get all restaurants
- Response: `{ restaurants: Restaurant[] }`

**GET /api/restaurants/:id**
- Get restaurant by ID
- Response: `{ id, name, cuisine, menu }`

### Orders

**GET /api/orders**
- Get all orders
- Response: `{ orders: Order[] }`

**POST /api/orders**
- Create new order
- Body: `{ restaurantId, items, totalAmount }`
- Response: `{ id, restaurantId, items, totalAmount, status }`

**GET /api/orders/:id**
- Get order by ID
- Response: `{ id, status }`

## 🔒 Security

- Never commit `.env` files
- Use environment variables for secrets
- Report security vulnerabilities to security@mealtime.com
- Follow OWASP security guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern food delivery platforms
- Built with open-source technologies
- Thanks to all contributors

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Basic restaurant listing
- ✅ Order creation
- ✅ Monorepo setup

### Phase 2 (Next)
- 🔄 User authentication
- 🔄 Payment integration
- 🔄 Real-time order tracking

### Phase 3 (Future)
- 📱 Mobile app
- 🤖 AI-powered recommendations
- 🌍 Multi-language support
- 📊 Advanced analytics

## ❓ FAQ

**Q: How do I reset the database?**
```bash
cd MealTime-BE
pnpm prisma migrate reset
```

**Q: How do I add a new API endpoint?**
1. Create a new route file in `MealTime-BE/src/routes/`
2. Import and register it in `src/index.ts`
3. Update API documentation

**Q: How do I add a new page?**
1. Create a new folder in `MealTime-FE/app/`
2. Add a `page.tsx` file
3. The route is automatically available

---

Made with ❤️ by the MealTime Team
