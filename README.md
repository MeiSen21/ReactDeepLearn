# ReactDeepLearn

A modern React application template built with:

- **Core**: React 18 + TypeScript + Vite
- **UI**: Ant Design 5.x + Tailwind CSS
- **State**: Zustand (Global) + TanStack Query (Server)
- **Router**: React Router v6
- **Forms**: React Hook Form + Zod
- **Network**: Axios
- **Engineering**: ESLint + Prettier + Husky + Commitlint

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/components`: Reusable components
- `src/layouts`: Layout components (e.g. MainLayout)
- `src/pages`: Page components
- `src/store`: Global state management (Zustand)
- `src/services`: API services (Axios)
- `src/hooks`: Custom hooks
- `src/utils`: Utility functions
- `src/theme`: Ant Design theme configuration

## Features

- **Ant Design Theme**: Customized theme in `src/theme/themeConfig.ts`
- **Tailwind Integration**: Used alongside Ant Design for layout and custom styling
- **Axios Interceptors**: Global request/response handling in `src/services/api.ts`
- **Form Validation**: Example in `src/pages/FormDemo.tsx`
