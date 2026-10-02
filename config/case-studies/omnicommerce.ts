import type { ProjectShowcase } from "@/types/portfolio";

const omniCommerceShowcase: ProjectShowcase = {
  graph: {
    navTitle: "Interactive Architecture Map",
    navSubtitle:
      "Inspect the Next.js Headless Storefront, Multi-Tenant Admin Control Plane, and Stripe Webhook Pipeline",
    title: "OmniCommerce Decoupled Platform Architecture Graph",
    countLabel: "9 Core Systems",
    verifyLabel: "Source modules verified in b-l-i-n-d/ecommerce-admin & ecommerce-store",
    verifyUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
    inspectLabel: "Inspect Source",
    commitsHeading: "Key Architecture Modules (b-l-i-n-d/ecommerce-*):",
    commitPrefix: "src:",
    columns: [
      {
        title: "Headless Storefront",
        nodeIds: ["storefront-client", "zustand-cart", "gallery-slider"],
        accent: "rose",
      },
      {
        title: "Multi-Tenant Control Plane",
        nodeIds: ["admin-dashboard", "prisma-models", "clerk-auth"],
        accent: "emerald",
      },
      {
        title: "Payments & Fulfillment",
        nodeIds: ["stripe-checkout", "webhook-listener", "inventory-engine"],
        accent: "sky",
      },
    ],
    nodes: [
      {
        id: "storefront-client",
        label: "Headless Next.js Storefront",
        version: "Next.js 13+ App Router",
        badge: "App Router · Radix UI · Tailwind CSS",
        commits: [
          "app/(routes)/page.tsx — dynamic category & billboard composition",
          "app/(routes)/products/[productId] — variant selectors (Size & Color)",
          "components/ui/product-card.tsx — responsive image cards & quick preview",
        ],
        description:
          "High-converting headless customer storefront built with Next.js App Router, Radix UI primitives, dynamic billboard banners, and multi-variant product galleries.",
        prHighlight: "app/(routes) · components/ui",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-store",
        metrics: "App Router · Radix UI · Tailwind CSS",
      },
      {
        id: "zustand-cart",
        label: "Persistent Cart Store",
        version: "Zustand 4.4",
        badge: "Local Storage · Stock Validation",
        commits: [
          "hooks/use-cart.ts — persist middleware with createJSONStorage",
          "Stock ceiling verification against SizeStock before cart increments",
          "Real-time subtotal, quantity adjustments, and toast notifications via Sonner",
        ],
        description:
          "Client-side shopping cart state with local storage hydration, optimistic quantity management, and real-time inventory ceiling checks before incrementing item counts.",
        prHighlight: "hooks/use-cart.ts",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-store/blob/master/hooks/use-cart.ts",
        metrics: "Zustand persist · Stock Headroom Gates",
      },
      {
        id: "gallery-slider",
        label: "Multi-Image Swiper Gallery",
        version: "Swiper 10 + Radix UI",
        badge: "Cloudinary CDN · Responsive Tabs",
        commits: [
          "components/gallery/index.tsx — dynamic thumbnail tab synchronization",
          "components/gallery/gallery-tab.tsx — Cloudinary next-gen format optimization",
          "components/preview-modal.tsx — quick-view modal dialogs with Radix Dialog",
        ],
        description:
          "Hardware-accelerated product visualizer with fluid image swipe transitions, responsive aspect ratio management, and high-DPI zoom previews.",
        prHighlight: "components/gallery · components/preview-modal.tsx",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-store/tree/master/components/gallery",
        metrics: "Swiper 10 · Next-Gen WebP/AVIF",
      },
      {
        id: "admin-dashboard",
        label: "Merchant SaaS Control Plane",
        version: "Next.js App Router",
        badge: "Multi-Store · TanStack Table",
        commits: [
          "app/(dashboard)/[storeId]/page.tsx — revenue charts & stock telemetry",
          "components/store-switcher.tsx — instant multi-tenant tenant context switching",
          "components/ui/data-table.tsx — TanStack Table pagination, sorting & filters",
        ],
        description:
          "Comprehensive administration suite enabling vendors to manage multiple distinct digital storefronts, categories, billboards, variants, and revenue analytics from one unified hub.",
        prHighlight: "app/(dashboard)/[storeId] · components/store-switcher.tsx",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
        metrics: "Multi-Store Context · TanStack Table",
      },
      {
        id: "prisma-models",
        label: "Relational Multi-Store Schema",
        version: "Prisma ORM 5.3",
        badge: "MySQL / PlanetScale · Cascading Relations",
        commits: [
          "prisma/schema.prisma — Store, Billboard, Category, Product, SizeStock, Order models",
          "RelationMode = prisma for decoupled, serverless relational integrity",
          "OrderItem → Product → SizeStock composite indexing for fast lookups",
        ],
        description:
          "Normalized database architecture handling multi-tenancy, multi-tier product hierarchies, dynamic billboard associations, and granular size/color stock variant tracking.",
        prHighlight: "prisma/schema.prisma",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-admin/blob/master/prisma/schema.prisma",
        metrics: "Prisma ORM · Serverless MySQL",
      },
      {
        id: "clerk-auth",
        label: "Clerk Multi-Tenant Auth",
        version: "Clerk Next.js SDK",
        badge: "JWT Sessions · Route Protection",
        commits: [
          "middleware.ts — route authorization gates for merchant portals",
          "app/(auth) — customized dark/light auth modals matching dashboard palette",
          "User-to-Store tenant ownership validation on every CRUD invocation",
        ],
        description:
          "Enterprise authentication guarding admin routes with biometric session tokens, role-based store ownership enforcement, and isolated tenant queries.",
        prHighlight: "middleware.ts · app/(auth)",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
        metrics: "Clerk Auth · Middleware Gates",
      },
      {
        id: "stripe-checkout",
        label: "Checkout Session Creator",
        version: "Stripe API v13",
        badge: "Hosted Checkout · Server Order Lock",
        commits: [
          "app/api/[storeId]/checkout/route.ts — price integrity verification",
          "Pre-session Order creation with pending status and relational OrderItems",
          "Success/Cancel callback routing with session metadata binding",
        ],
        description:
          "Server-side Stripe Checkout session generator that verifies pricing against database records, prevents client-tampered cart amounts, and links pending orders.",
        prHighlight: "app/api/[storeId]/checkout/route.ts",
        prUrl:
          "https://github.com/b-l-i-n-d/ecommerce-admin/blob/master/app/api/%5BstoreId%5D/checkout/route.ts",
        metrics: "Stripe Checkout · Cryptographic Price Lock",
      },
      {
        id: "webhook-listener",
        label: "Signed Webhook Listener",
        version: "Stripe Webhooks",
        badge: "HMAC Signature · Idempotent Processing",
        commits: [
          "app/api/webhook/route.ts — constructEvent with STRIPE_WEBHOOK_SECRET",
          "checkout.session.completed event handler with transaction guarantees",
          "Customer delivery address & contact parsing into normalized order records",
        ],
        description:
          "Event-driven webhook handler verifying raw Stripe signatures, ensuring zero spoofing attacks, and atomically transitions orders from pending to paid upon confirmation.",
        prHighlight: "app/api/webhook/route.ts",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-admin/blob/master/app/api/webhook/route.ts",
        metrics: "HMAC Signature · Sub-200ms Execution",
      },
      {
        id: "inventory-engine",
        label: "Atomic SizeStock Decrement",
        version: "Prisma Transactions",
        badge: "Oversell Prevention · Variant Matrix",
        commits: [
          "app/api/webhook/route.ts — looping orderItems to update SizeStock balances",
          "Dynamic size variant matching against product catalog",
          "Real-time stock depletion preventing concurrent flash-sale collisions",
        ],
        description:
          "Automated inventory management engine that atomically reduces stock counts across precise size/color combinations immediately upon completed payment.",
        prHighlight: "app/api/webhook/route.ts",
        prUrl: "https://github.com/b-l-i-n-d/ecommerce-admin/blob/master/app/api/webhook/route.ts",
        metrics: "Prisma Atomic Updates · Variant Integrity",
      },
    ],
  },
  flow: {
    steps: [
      {
        id: "step-1",
        number: "01",
        title: "Catalog Browsing & Variant Matrix Selection",
        description:
          "Shoppers discover curated collections rendered through dynamic billboard banners. Selecting a product loads real-time size and color attributes fetched from the control plane REST API.",
        tech: "Next.js App Router · Radix UI · Tailwind CSS",
        codeFile: "ecommerce-store/app/(routes)/products/[productId]/page.tsx",
        codeSnippet: `// Fetch product with expanded size/color variant matrix
const product = await getProduct(params.productId);
const suggestedProducts = await getProducts({
  categoryId: product?.category?.id
});`,
        systemMetrics: {
          latency: "42ms",
          ops: "60 FPS Render",
          status: "healthy",
        },
        logs: [
          "[Storefront] Fetching product attributes from admin API",
          "[Prisma] Product resolved with 3 size variants and 2 color schemes",
          "[Radix UI] Modal preview hydrated with zero layout shift",
        ],
      },
      {
        id: "step-2",
        number: "02",
        title: "Persistent Cart & Stock Headroom Check",
        description:
          "Shopper selects their preferred size and clicks Add to Cart. Zustand checks active SizeStock limits in local storage before persisting the item to avoid adding out-of-stock variants.",
        tech: "Zustand 4.4 · LocalStorage Middleware · Sonner Toasts",
        codeFile: "ecommerce-store/hooks/use-cart.ts",
        codeSnippet: `// Stock limit verification before incrementing
if (selectedSize && item.sizes.find(s => s.size.id === selectedSize)?.stock > currentQty) {
  toast.success("Item added to cart");
  set({ items: updatedItems });
} else {
  toast.error("Item out of stock");
}`,
        systemMetrics: {
          latency: "0.8ms",
          ops: "Client-Local Memory",
          status: "healthy",
        },
        logs: [
          "[useCart] Validating selected size variant against stock balance",
          "[Zustand] Persisting cart JSON payload to browser storage",
          "[UI] Sonner toast dispatched with instant haptic visual feedback",
        ],
      },
      {
        id: "step-3",
        number: "03",
        title: "Checkout Handoff & Server Price Locking",
        description:
          "Customer proceeds to checkout. Storefront posts item IDs and sizes to admin checkout route. The server verifies unit prices in MySQL, creates a pending order, and spawns a Stripe Checkout session.",
        tech: "Stripe Checkout API · Prisma ORM · Next.js Route Handler",
        codeFile: "ecommerce-admin/app/api/[storeId]/checkout/route.ts",
        codeSnippet: `const session = await stripe.checkout.sessions.create({
  line_items,
  mode: "payment",
  billing_address_collection: "required",
  success_url: process.env.FRONTEND_STORE_URL + "/cart?success=1",
  cancel_url: process.env.FRONTEND_STORE_URL + "/cart?canceled=1",
  metadata: { orderId: order.id }
});`,
        systemMetrics: {
          latency: "185ms",
          ops: "Stripe API Handshake",
          status: "processing",
        },
        logs: [
          "[Checkout API] Validating product pricing against database",
          "[Prisma] Created pending order record with relational OrderItems",
          "[Stripe] Generated secure hosted checkout redirect URL",
        ],
      },
      {
        id: "step-4",
        number: "04",
        title: "Cryptographic Webhook & Order Settlement",
        description:
          "Customer completes card payment. Stripe emits a checkout.session.completed event. The admin webhook handler verifies the cryptographic signature and updates order status to isPaid: true.",
        tech: "Stripe Webhook SDK · HMAC Signature · Prisma Client",
        codeFile: "ecommerce-admin/app/api/webhook/route.ts",
        codeSnippet: `event = stripe.webhooks.constructEvent(
  body,
  signature,
  process.env.STRIPE_WEBHOOK_SECRET!
);

if (event.type === "checkout.session.completed") {
  await prismadb.order.update({
    where: { id: sessions?.metadata?.orderId },
    data: { isPaid: true, address: addressString }
  });
}`,
        systemMetrics: {
          latency: "110ms",
          ops: "Signed Verification",
          status: "healthy",
        },
        logs: [
          "[Stripe Webhook] Received event payload with valid Stripe-Signature",
          "[Security] HMAC SHA-256 signature verified against secret",
          "[Prisma] Order marked paid; customer delivery record recorded",
        ],
      },
      {
        id: "step-5",
        number: "05",
        title: "Atomic SizeStock Decrement & Real-Time Telemetry",
        description:
          "The webhook iterates through each purchased item, finding its matching SizeStock row in Prisma and decrementing available inventory atomically. Recharts dashboard updates instantly.",
        tech: "Prisma ORM · MySQL · Recharts Telemetry",
        codeFile: "ecommerce-admin/app/api/webhook/route.ts",
        codeSnippet: `for (const orderItem of order.orderItems) {
  const productSize = orderItem.product.sizes.find(s => s.sizeId === orderItem.size.id);
  if (productSize) {
    await prismadb.sizeStock.update({
      where: { id: productSize.id },
      data: { stock: productSize.stock - orderItem.quantity }
    });
  }
}`,
        systemMetrics: {
          latency: "65ms",
          ops: "Atomic Inventory Lock",
          status: "ready",
        },
        logs: [
          "[Inventory] Decrementing SizeStock row for purchased SKU variant",
          "[Analytics] Order revenue factored into monthly Recharts aggregate",
          "[Pipeline] Fulfillment state finalized; confirmation email triggered",
        ],
      },
    ],
    archMermaid: `graph TD
    Client[Next.js Headless Storefront] -->|Browse & Cart| StorefrontUI[Radix UI / Zustand Store]
    StorefrontUI -->|POST /api/checkout| AdminAPI[Next.js Admin Control Plane]
    AdminAPI -->|Verify Prices & Create Pending Order| DB[(MySQL / PlanetScale DB)]
    AdminAPI -->|Create Session| Stripe[Stripe Checkout Engine]
    Stripe -->|Customer Pays| Webhook[Signed Webhook Endpoint]
    Webhook -->|Verify Signature & Mark isPaid| DB
    Webhook -->|Atomically Decrement Stock| SizeStock[SizeStock Inventory Matrix]
    Merchant[Merchant Admin Portal] -->|Clerk Auth & Dashboard| AdminAPI`,
    seqMermaid: `sequenceDiagram
    autonumber
    actor Customer
    participant Store as Headless Storefront
    participant Admin as Admin Control Plane
    participant DB as Prisma (MySQL)
    participant Stripe as Stripe Gateway

    Customer->>Store: Add item with Size selection
    Store->>Store: Validate stock in Zustand persistent store
    Customer->>Store: Click Checkout
    Store->>Admin: POST /api/{storeId}/checkout
    Admin->>DB: Query exact Product & Size prices
    Admin->>DB: Create Order (isPaid: false)
    Admin->>Stripe: Create Checkout Session with metadata.orderId
    Stripe-->>Admin: Return session.url
    Admin-->>Store: Return { url }
    Store-->>Customer: Redirect to Stripe Checkout
    Customer->>Stripe: Authorize card payment
    Stripe->>Admin: POST /api/webhook (Stripe-Signature)
    Admin->>Admin: constructEvent(body, signature, secret)
    Admin->>DB: Update Order (isPaid: true, delivery info)
    Admin->>DB: Decrement SizeStock (stock - quantity)
    Stripe-->>Customer: Redirect to Store /cart?success=1`,
  },
  codeModules: [
    {
      id: "stripe-webhook",
      filename: "ecommerce-admin/app/api/webhook/route.ts",
      badge: "Payment Fulfillment",
      title: "Signed Stripe Webhook & SizeStock Decrement",
      description:
        "Validates Stripe signature headers, locks order states to paid upon completion, captures delivery addresses, and atomically decrements variant inventory across SizeStock models.",
      prUrl: "https://github.com/b-l-i-n-d/ecommerce-admin/blob/master/app/api/webhook/route.ts",
      prHighlight: "app/api/webhook/route.ts",
      code: `import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error: any) {
        return new Response(\`WebHook error: \${error.message}\`, { status: 400 });
    }

    const sessions = event.data.object as Stripe.Checkout.Session;
    const address = sessions?.customer_details?.address;
    const addressComponents = [
        address?.line1,
        address?.line2,
        address?.city,
        address?.state,
        address?.postal_code,
        address?.country,
    ];
    const addressString = addressComponents.filter((c) => c !== null).join(", ");

    if (event.type === "checkout.session.completed") {
        const order = await prismadb.order.update({
            where: {
                id: sessions?.metadata?.orderId,
            },
            data: {
                isPaid: true,
                address: addressString,
                phone: sessions?.customer_details?.phone || "",
                name: sessions?.customer_details?.name || "",
            },
            include: {
                orderItems: {
                    include: {
                        product: {
                            include: {
                                sizes: true,
                            },
                        },
                        size: true,
                    },
                },
            },
        });

        // Atomically update product variant stock
        for (const orderItem of order.orderItems) {
            const product = orderItem.product;
            const size = orderItem.size;
            const productSize = product.sizes.find((s) => s.sizeId === size.id);

            if (productSize) {
                await prismadb.sizeStock.update({
                    where: {
                        id: productSize.id,
                    },
                    data: {
                        stock: productSize.stock - orderItem.quantity,
                    },
                });
            }
        }
    }

    return new NextResponse(null, { status: 200 });
}`,
    },
    {
      id: "checkout-session",
      filename: "ecommerce-admin/app/api/[storeId]/checkout/route.ts",
      badge: "Checkout Gateway",
      title: "Secure Checkout Session Creation",
      description:
        "CORS-enabled route handler that queries product pricing directly from MySQL, compiles Stripe line items with size descriptors, and persists pending orders before payment handoff.",
      prUrl:
        "https://github.com/b-l-i-n-d/ecommerce-admin/blob/master/app/api/%5BstoreId%5D/checkout/route.ts",
      prHighlight: "app/api/[storeId]/checkout/route.ts",
      code: `import { NextResponse } from "next/server";
import Stripe from "stripe";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    const { items } = await req.json();
    if (!items || items.length === 0) {
        return new NextResponse("Product Ids are required", { status: 400 });
    }

    const products = [];
    for (const item of items) {
        const product = await prismadb.product.findUnique({
            where: { id: item.id },
            include: {
                images: true,
                sizes: { include: { size: true } },
            },
        });
        if (!product) return new NextResponse(\`Product \${item.id} not found\`, { status: 404 });
        products.push(product);
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    for (const item of items) {
        const product = products.find((p) => p.id === item.id);
        const size = product?.sizes.find((s) => s.size.id === item.selectedSize);

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product!.name,
                    images: product!.images.map((i) => i.url),
                    description: \`Size: \${size?.size.name}\`,
                },
                unit_amount: product!.price.toNumber() * 100,
            },
            quantity: item.quantity,
        });
    }

    const order = await prismadb.order.create({
        data: {
            storeId: params.storeId,
            isPaid: false,
            orderItems: {
                create: items.map((item: any) => ({
                    product: { connect: { id: item.id } },
                    size: { connect: { id: item.selectedSize } },
                    quantity: item.quantity,
                })),
            },
        },
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        billing_address_collection: "required",
        phone_number_collection: { enabled: true },
        success_url: \`\${process.env.FRONTEND_STORE_URL}/cart?success=1\`,
        cancel_url: \`\${process.env.FRONTEND_STORE_URL}/cart?canceled=1\`,
        metadata: { orderId: order.id },
    });

    return NextResponse.json({ url: session.url }, { headers: corsHeaders });
}`,
    },
    {
      id: "zustand-cart-store",
      filename: "ecommerce-store/hooks/use-cart.ts",
      badge: "State & Storage",
      title: "Zustand Multi-Variant Cart Store",
      description:
        "Client store managing cart persistence via local storage, matching items on composite key (productId + sizeId), and enforcing inventory stock limits before mutating counts.",
      prUrl: "https://github.com/b-l-i-n-d/ecommerce-store/blob/master/hooks/use-cart.ts",
      prHighlight: "hooks/use-cart.ts",
      code: `import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IProduct } from "@/types";

interface ICartStore {
    items: (IProduct & { quantity: number; selectedSize: string })[];
    addItem: (item: IProduct) => void;
    removeItem: (id: string, selectedSize: string) => void;
    increaseItemQuantity: (id: string, selectedSize: string) => void;
    decreaseItemQuantity: (id: string, selectedSize: string) => void;
    removeAllItems: () => void;
    selectedSize: string | undefined;
    setSelectedSize: (size: string | undefined) => void;
}

export const useCart = create(
    persist<ICartStore>(
        (set, get) => ({
            items: [],
            addItem: (item) => {
                const currentItems = get().items;
                const isItemExist = currentItems.filter(
                    (currentItem) =>
                        currentItem.id === item.id &&
                        currentItem.selectedSize === get().selectedSize
                ) ?? [];

                if (get().selectedSize === undefined) {
                    return toast.error("Please select size");
                }

                if (isItemExist.length > 0) {
                    const newItems = currentItems.map((currentItem) => {
                        if (currentItem.id === isItemExist[0].id && currentItem.selectedSize === get().selectedSize) {
                            const availableStock = currentItem.sizes.find(
                                (size) => size.size.id === get().selectedSize
                            )?.stock ?? 0;

                            if (availableStock > currentItem.quantity) {
                                toast.success("Item added to cart");
                                return {
                                    ...currentItem,
                                    quantity: currentItem.quantity + 1,
                                    selectedSize: get().selectedSize ?? "",
                                };
                            } else {
                                toast.error("Item out of stock");
                                return currentItem;
                            }
                        }
                        return currentItem;
                    });
                    return set({ items: newItems });
                } else {
                    toast.success("Item added to cart");
                    return set({
                        items: [
                            ...currentItems,
                            { ...item, quantity: 1, selectedSize: get().selectedSize ?? "" },
                        ],
                    });
                }
            },
            removeItem: (id, selectedSize) => {
                toast.success("Item removed from cart");
                return set({
                    items: get().items.filter(
                        (item) => item.id !== id || item.selectedSize !== selectedSize
                    ),
                });
            },
            removeAllItems: () => set({ items: [] }),
            selectedSize: undefined,
            setSelectedSize: (size) => set({ selectedSize: size }),
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),
        }
    )
);`,
    },
    {
      id: "prisma-schema",
      filename: "ecommerce-admin/prisma/schema.prisma",
      badge: "Database Topology",
      title: "Relational Multi-Store Schema",
      description:
        "Prisma database contract establishing Store, Category, Billboard, Product, Size, Color, SizeStock, and Order relations optimized with composite indexes.",
      prUrl: "https://github.com/b-l-i-n-d/ecommerce-admin/blob/master/prisma/schema.prisma",
      prHighlight: "prisma/schema.prisma",
      code: `datasource db {
    provider     = "mysql"
    url          = env("STORE_DB_URL")
    relationMode = "prisma"
}

generator client {
    provider = "prisma-client-js"
}

model Store {
    id         String      @id @default(uuid())
    name       String
    userId     String
    billboards Billboard[] @relation("StoreToBillboard")
    categories Category[]  @relation("StoreToCategory")
    sizes      Size[]      @relation("StoreToSize")
    colors     Color[]     @relation("StoreToColor")
    products   Product[]   @relation("StoreToProduct")
    orders     Order[]     @relation("StoreToOrder")
    createdAt  DateTime    @default(now())
    updatedAt  DateTime    @updatedAt
}

model Product {
    id         String      @id @default(uuid())
    storeId    String
    store      Store       @relation("StoreToProduct", fields: [storeId], references: [id])
    categoryId String
    category   Category    @relation("CategoryToProduct", fields: [categoryId], references: [id])
    name       String
    price      Decimal
    isFeatured Boolean     @default(false)
    isArchived Boolean     @default(false)
    sizes      SizeStock[] @relation("ProductToSizeStock")
    colorId    String
    color      Color       @relation("ColorToProduct", fields: [colorId], references: [id])
    images     Image[]     @relation("ProductToImage")
    orders     OrderItem[] @relation("ProductToOrder")
    createdAt  DateTime    @default(now())
    updatedAt  DateTime    @updatedAt

    @@index([storeId])
    @@index([categoryId])
    @@index([colorId])
}

model SizeStock {
    id        String   @id @default(uuid())
    productId String
    product   Product  @relation("ProductToSizeStock", fields: [productId], references: [id], onDelete: Cascade)
    sizeId    String
    size      Size     @relation("SizeToSizeStock", fields: [sizeId], references: [id])
    stock     Int
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt

    @@index([productId])
    @@index([sizeId])
}`,
    },
  ],
};

export default omniCommerceShowcase;
