# Strapi CMS Integration Setup

This project is integrated with Strapi CMS to fetch products dynamically.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Strapi CMS Configuration
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337/api

# Optional: If your Strapi API requires authentication
NEXT_PUBLIC_STRAPI_API_TOKEN=your_strapi_api_token_here
```

## Strapi Content Type Setup

In your Strapi CMS, create a content type called `product` with the following fields:

### Required Fields:
- `title` (Text) - Product name
- `slug` (UID, based on title) - URL-friendly identifier
- `price` (Number) - Product price
- `inStock` (Boolean) - Stock availability

### Optional Fields:
- `description` (Rich Text or Textarea) - Product description
- `originalPrice` (Number) - Original price for discount calculation
- `discount` (Number) - Discount percentage
- `expiryDate` (Date) - Product expiry date
- `badges` (JSON) - Array of badges like ["Dry", "Halal", "Veg", "Vegan"]
- `images` (Media) - Product images (single image or multiple)
- `category` (Relation - One-to-One or Many-to-One) - Link to category
- `brand` (Relation - One-to-One or Many-to-One) - Link to brand
- `featured` (Boolean) - Mark as featured product
- `publishedAt` (DateTime) - Publication date

## API Endpoints

The integration uses the following endpoints:

1. **Fetch All Products**: `GET /api/products`
   - Query params: `limit`, `featured`, `category`
   - Example: `/api/products?limit=8&featured=true`

2. **Fetch Single Product**: `GET /api/products/[slug]`
   - Fetches product by slug

## Usage

Products are automatically fetched from Strapi on the homepage. The `ProductsGrid` component handles:
- Loading states
- Error handling
- Client-side refresh
- Server-side initial data

## File Structure

```
lib/
  api/
    strapi.ts          # Strapi API utilities
  types/
    strapi.ts          # TypeScript types for Strapi data

app/
  api/
    products/
      route.ts         # Next.js API route for products
  components/
    ProductsGrid.tsx   # Products grid component with loading/error states
  page.tsx             # Homepage with server-side product fetching
```

## Testing

1. Start your Strapi server: `npm run develop` (in Strapi directory)
2. Create some products in Strapi admin panel
3. Make sure products are published (`publishedAt` is set)
4. Start Next.js dev server: `npm run dev`
5. Products should appear on the homepage

## Troubleshooting

- **No products showing**: Check that products are published in Strapi
- **Images not loading**: Verify image URLs in Strapi and check CORS settings
- **API errors**: Check `NEXT_PUBLIC_STRAPI_API_URL` is correct and Strapi server is running
- **Type errors**: Ensure Strapi content type matches the expected structure

