# Strapi CMS Setup and Login Guide

## Step 1: Install Strapi Locally

Strapi should be installed in a **separate directory** from your Next.js project. Open a new terminal and navigate to where you want to install Strapi.

### Option A: Quick Start (Recommended)

```bash
# Create a new Strapi project
npx create-strapi-app@latest my-strapi-cms --quickstart

# Or use yarn
yarn create strapi-app my-strapi-cms --quickstart
```

The `--quickstart` flag uses SQLite (good for development) and automatically sets everything up.

### Option B: Manual Setup

```bash
# Create Strapi project with custom configuration
npx create-strapi-app@latest my-strapi-cms

# Follow the prompts to choose:
# - Database: SQLite (development) or PostgreSQL/MySQL (production)
# - Template: Choose your preferred template
```

## Step 2: Start Strapi Server

```bash
cd my-strapi-cms
npm run develop
# or
yarn develop
```

Wait for Strapi to start. You should see:
```
[2024-xx-xx xx:xx:xx.xxx] info: Server started on http://localhost:1337
```

## Step 3: Create Admin Account (First Time Only)

1. Open your browser and go to: **http://localhost:1337/admin**
2. You'll see a registration form (this only appears on first setup)
3. Fill in the form:
   - **First Name**: Your first name
   - **Last Name**: Your last name
   - **Email**: Your email address
   - **Password**: Create a strong password
   - **Confirm Password**: Re-enter your password
4. Click **"Let's start"** or **"Create your account"**

## Step 4: Login to Strapi Admin Panel

After creating your account or for subsequent logins:

1. Go to: **http://localhost:1337/admin**
2. Enter your **Email** and **Password**
3. Click **"Login"**

You'll be redirected to the Strapi admin dashboard.

## Step 5: Create the Product Content Type

Once logged in:

1. Go to **Content-Type Builder** (left sidebar)
2. Click **"Create new collection type"**
3. Name it: `product`
4. Click **"Continue"**
5. Add the following fields:

### Required Fields:
- **title** - Text (Short text)
- **slug** - UID (based on title)
- **price** - Number (Decimal)
- **inStock** - Boolean

### Optional Fields:
- **description** - Rich text or Long text
- **originalPrice** - Number (Decimal)
- **discount** - Number (Integer)
- **expiryDate** - Date (Date)
- **badges** - JSON
- **images** - Media (Single media or Multiple media)
- **featured** - Boolean
- **category** - Relation (Many-to-One or One-to-One)
- **brand** - Relation (Many-to-One or One-to-One)

6. Click **"Save"**
7. Go to **Content Manager** → **Product**
8. Click **"Create new entry"**
9. Fill in product details and **Save** then **Publish**

## Step 6: Configure Your Next.js Project

Update your `.env.local` file in your Next.js project:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337/api
```

## Common Issues & Solutions

### Port Already in Use
If port 1337 is already in use:
```bash
# Check what's using the port
netstat -ano | findstr :1337  # Windows
lsof -i :1337                 # Mac/Linux

# Or change Strapi port
# Edit config/server.js and set: port: process.env.PORT || 1338
```

### Forgot Password
1. Go to: http://localhost:1337/admin
2. Click **"Forgot your password?"**
3. Enter your email
4. Check your email for reset link

### Can't Access Admin Panel
- Make sure Strapi server is running (`npm run develop`)
- Check the URL is correct: http://localhost:1337/admin
- Clear browser cache and cookies
- Check firewall/antivirus isn't blocking port 1337

### Database Issues
If using SQLite (quickstart), the database file is at:
- `my-strapi-cms/.tmp/data.db`

For PostgreSQL/MySQL, ensure:
- Database server is running
- Connection credentials in `config/database.js` are correct

## Using Strapi Cloud (Alternative)

Instead of local installation, you can use Strapi Cloud:

1. Go to: https://cloud.strapi.io
2. Sign up / Login
3. Create a new project
4. Use the provided URL in your `.env.local`:
   ```env
   NEXT_PUBLIC_STRAPI_API_URL=https://your-project.strapiapp.com/api
   ```

## API Token (Optional)

For production or to secure your API:

1. In Strapi admin, go to **Settings** → **API Tokens**
2. Click **"Create new API Token"**
3. Name it and set permissions (read-only for products)
4. Copy the token
5. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_STRAPI_API_TOKEN=your_token_here
   ```

## Quick Start Checklist

- [ ] Strapi installed in separate directory
- [ ] Strapi server running on port 1337
- [ ] Admin account created
- [ ] Logged into admin panel
- [ ] Product content type created with all required fields
- [ ] At least one product created and published
- [ ] `.env.local` configured in Next.js project
- [ ] Next.js project can fetch products from Strapi

