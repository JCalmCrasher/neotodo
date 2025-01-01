## Minimal Todo using Next.js and Neon

A minimalist todo application built with Next.js 15 and Neon Database, featuring server-side rendering and real-time data persistence.

### Tech Stack

- [Next.js](https://nextjs.org/) (v15.1.3)
- [Neon Database](https://neon.tech/) (Serverless Postgres)
- [Drizzle ORM](https://orm.drizzle.team/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Prerequisites

- Node.js 18+
- A Neon Database account
- yarn/npm/yarn

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/JCalmCrasher/neotodo.git
cd neotodo
```

2. Install dependencies:

```bash
yarn install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
DATABASE_URL=your_neon_database_url
```

4. Start the development server:

```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
