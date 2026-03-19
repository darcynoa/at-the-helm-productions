# At The Helm Productions

A modern Next.js-based website with integrated Sanity CMS for content management. Built for creative professionals who need both powerful component-based design and flexible content management.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (React with App Router)
- **Styling**: CSS Modules & Global CSS
- **CMS**: [Sanity.io](https://www.sanity.io) for content management
- **Package Manager**: npm (or yarn/pnpm/bun)

## Prerequisites

- Node.js 16.x or higher
- npm/yarn/pnpm/bun
- A Sanity account with access to the project workspace

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with your Sanity configuration:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Contact your project lead for the Sanity project credentials.

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The development server will auto-reload when you make changes to files.

## Project Structure

### `app/` - Next.js App Router

- **`page.js`** - Home page
- **`layout.js`** - Root layout wrapper for all pages
- **`globals.css`** - Global styles applied to entire site
- **`globals.js`** - Global JavaScript setup
- **`fonts/`** - Custom font files
- **`justspacey/`** - Just Spacey section (secondary page route)
- **`sanity/`** - Sanity CMS configuration and schema
  - **`client.js`** - Sanity client configuration
  - **`schemaTypes/`** - Content schema definitions (what content types exist)
- **`studio/`** - Sanity Studio interface (accessible at `/studio` route)

### `components/` - Reusable React Components

**Root Components:**

- `Navigation.jsx` - Main navigation bar
- `Footer.jsx` - Site footer
- `Menu.jsx` / `MenuSVG.jsx` - Mobile/menu components
- `Cursor.jsx` - Custom cursor behavior
- `Loading.jsx` / `LoadingSVGGroup.jsx` - Loading states
- `CustomLink.jsx` - Custom link wrapper
- `Contact.jsx` - Contact form component
- Various visual components: `HelmerLine.jsx`, `HeroLine.jsx`, `LightBall.jsx`

**`home/` - Home Page Components:**

- `HomeClient.jsx` - Client-side home page logic
- `Hero.jsx` - Hero section
- `WhatsAtTheHelm.jsx` - Main content section
- `WhosRunningTheShip.jsx` - Team/about section
- `JustSpaceyTitle.jsx` - Promotional section

**`justspacey/` - Just Spacey Section Components:**

- `JustSpaceyClient.jsx` - Client-side logic
- `JustSpaceyHero.jsx` - Hero for this section
- `JustSpaceyCardStack.jsx` - Card component for content
- `AuthenticLocations.jsx` - Location information
- `SneakPeek.jsx` - Preview content

**`utils/` - Utility & Helper Components:**

- `SanityImageUrl.js` - Helper for Sanity image URLs
- `SmoothScroller.jsx` - Scroll animation utility
- `TextHighlightOnScroll.jsx` - Text highlight on scroll effect

## How to Edit Content & Components

### Adding/Editing Pages

1. Create a new folder in `app/` with your page route name
2. Add a `page.js` file inside that folder
3. Import components as needed from `components/`

Example:

```
app/new-section/page.js → accessible at /new-section
```

### Adding/Editing Components

1. Create a new `.jsx` file in the appropriate `components/` subfolder
2. Export as default or named export
3. Import and use in your pages

### Managing Content in Sanity

1. **Access Sanity Studio**: Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
2. **Log in**: Use your Sanity account credentials (you must have access to the workspace)
3. **Edit Content**: Use the studio interface to create, edit, and publish content
4. **Content Schema**: Define what content types are available in `app/sanity/schemaTypes/`

### Adding a New Content Type

1. Create a new file in `app/sanity/schemaTypes/` (e.g., `myNewType.js`)
2. Define the schema following Sanity's documentation
3. Add it to `app/sanity/schemaTypes/index.js`
4. Restart the development server
5. Access it in the Sanity Studio UI

### Fetching Content from Sanity

Use the Sanity client configured in `app/sanity/client.js`:

```javascript
import { client } from "@/app/sanity/client";

// In your component or page:
const data = await client.fetch(`
  *[_type == "yourContentType"][0] {
    _id,
    title,
    body
  }
`);
```

### Styling

- **Global styles**: Edit `app/globals.css`
- **Component styles**: Use CSS modules (`.module.css`) or inline styles
- **PostCSS**: Configuration in `postcss.config.mjs`

## Deployment

Deployment is automatically handled by [Netlify](https://www.netlify.com). Simply push your changes to the main branch, or any branch — Netlify will build and deploy them automatically.

**No manual deployment steps required.**

Environment variables are already configured in Netlify. If you need to update them, contact your project administrator.

## Configuration Files

- **`next.config.mjs`** - Next.js configuration
- **`jsconfig.json`** - JavaScript path aliases (e.g., `@/` = root)
- **`postcss.config.mjs`** - PostCSS plugins
- **`eslint.config.mjs`** - ESLint rules
- **`sanity.config.js`** - Sanity Studio configuration

## Common Development Tasks

### Update Dependencies

```bash
npm update
```

### Format Code

Check your project for any ESLint configuration and run:

```bash
npm run lint
```

### Debug Issues

- Check browser console for client-side errors
- Check terminal output for server-side errors
- Restart dev server if making changes to environment variables

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [React Documentation](https://react.dev)

## Support

For questions or issues, contact the development team or refer to the tech stack documentation above.
