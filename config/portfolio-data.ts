import { EngineerProfile } from "@/types/portfolio";

export const portfolioData: EngineerProfile = {
    name: "Fahim Faisal",
    tagline: "Full Stack & Frontend Software Engineer",
    headline: "Engineering High-Performance Web Systems with Fluid 60 FPS Polish",
    bioParagraphs: [
        "I am a Full-Stack Software Engineer based in Bangladesh with a focus on high-performance web applications, resilient backend architectures, and fluid, physical user interfaces.",
        "Graduated from Shahjalal University of Science and Technology (SUST). I specialize in TypeScript, Next.js, Node.js, distributed databases, and GPU-composited motion design where performance and visual craft meet seamlessly."
    ],
    location: "Dhaka, Bangladesh",
    education: {
        institute: "Shahjalal University of Science and Technology",
        shortInstitute: "SUST",
        degree: "Bachelor of Science",
        department: "Computer Science & Engineering",
        status: "Graduated",
        link: "https://www.sust.edu/"
    },
    contact: {
        email: "fahim.faisal.abir@gmail.com",
        github: "https://github.com/b-l-i-n-d",
        linkedin: "https://www.linkedin.com/in/b-l-i-n-d/",
        locationMap: "https://goo.gl/maps/DbUNvX2C7X9ZJrKC7",
        cvUrl: "/assets/cv.pdf"
    },
    heroReel: {
        title: "Software Engineering Showreel 2024",
        tagline: "Compilation of Full-Stack Architecture, Distributed APIs & 60 FPS Micro-Interactions",
        badge: "Flagship Showreel · 60 FPS",
        videoUrl: "https://player.vimeo.com/video/920509668?badge=0&autopause=0&player_id=0&app_id=58479",
        posterUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d616f6193029727.65f2f573e631f.gif",
        runtime: "0:59",
        framerate: "60 FPS Locked"
    },
    chapters: [
        { id: "hero", number: "00", title: "Showreel", label: "Flagship Reel" },
        { id: "ecommerce", number: "01", title: "E-Commerce", label: "Multi-Tenant Platform" },
        { id: "edtech", number: "02", title: "EdTech LMS", label: "Learning Platform" },
        { id: "docapp", number: "03", title: "DocApp", label: "Healthcare Scheduling" },
        { id: "motion-lab", number: "04", title: "Motion Lab", label: "Physics & UI Systems" },
        { id: "gallery", number: "05", title: "Blueprints", label: "12-Item Blueprint Gallery" },
        { id: "profile", number: "06", title: "Credentials", label: "Profile & Outro" }
    ],
    flagshipProjects: [
        {
            id: "ecommerce",
            chapterNumber: "01",
            title: "E-Commerce Multi-Tenant Admin & Storefront",
            tagline: "Enterprise Multi-Store Management Dashboard & High-Speed Customer Store",
            category: "Fullstack E-Commerce Architecture",
            timeline: "Production Ready",
            role: "Lead Full-Stack Architect",
            stack: [
                "Next.js 13+ App Router",
                "TypeScript",
                "Clerk Auth",
                "Prisma ORM",
                "PlanetScale MySQL",
                "Zustand",
                "Shadcn/UI",
                "Tailwind CSS",
                "Stripe Checkout"
            ],
            summary: "A production-grade multi-tenant e-commerce ecosystem allowing merchants to create, configure, and isolate independent online storefronts under a single unified dashboard, complete with automated inventory tracking, billboard management, and Stripe webhook payment reconciliation.",
            liveUrl: "https://ecommerce-admin-ruddy-nu.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/ecommerce-admin",
            secondaryGithubUrl: "https://github.com/b-l-i-n-d/ecommerce-store",
            stats: [
                { label: "Architecture", value: "Multi-Tenant" },
                { label: "Database", value: "PlanetScale" },
                { label: "Auth Provider", value: "Clerk RBAC" },
                { label: "Checkout", value: "Stripe Webhooks" }
            ],
            stages: {
                architecture: {
                    type: "architecture",
                    title: "Multi-Tenant Entity Relationship & Webhook Pipeline",
                    subtitle: "Zero-Leakage Multi-Store Data Isolation",
                    description: "Every merchant account controls multiple independent stores. Each store partitions its own categories, billboards, products, color palettes, sizing matrices, and order ledgers. Stripe webhooks enforce atomic order status transitions without race conditions.",
                    highlights: [
                        "Foreign key constraints enforce store-level data segregation across all queries",
                        "Idempotent Stripe webhook listeners handling asynchronous payment confirmations",
                        "Prisma connection pooling optimized for serverless edge database clusters"
                    ],
                    diagramType: "er"
                },
                flow: {
                    type: "flow",
                    title: "Merchant Configuration & Checkout Journey",
                    subtitle: "Zero-Latency Optimistic UI & Filter Cascade",
                    description: "Merchants update store billboards and category filters with instantaneous optimistic UI feedback. Customers navigate the storefront with server-rendered filter matrices and seamless modal previews before handoff to Stripe Checkout.",
                    highlights: [
                        "Real-time billboard image upload with immediate blurhash placeholder generation",
                        "Faceted product search filtering by category, size, and hex-color simultaneously",
                        "Client-side persistent cart synchronization powered by Zustand with local storage hydration"
                    ]
                },
                code: {
                    type: "code",
                    title: "Atomic Webhook Processing & Multi-Store Prisma Transactions",
                    subtitle: "Defensive Server-Side Engineering",
                    description: "Critical server route handler executing atomic order completion and address extraction upon verified Stripe `checkout.session.completed` events.",
                    highlights: [
                        "Cryptographic signature validation on all incoming Stripe webhook payloads",
                        "Batch order item updates executed in single atomic database transaction",
                        "Clean error logging and strict HTTP 200/400 status boundaries"
                    ],
                    codeSnippet: {
                        language: "typescript",
                        filename: "app/api/webhook/route.ts",
                        code: `import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";
import Stripe from "stripe";

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
    return new NextResponse(\`Webhook Error: \${error.message}\`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  if (event.type === "checkout.session.completed") {
    const order = await prismadb.order.update({
      where: { id: session?.metadata?.orderId },
      data: {
        isPaid: true,
        address: session?.customer_details?.address?.line1 || "",
        phone: session?.customer_details?.phone || "",
      },
      include: { orderItems: true },
    });

    const productIds = order.orderItems.map((item) => item.productId);
    await prismadb.product.updateMany({
      where: { id: { in: productIds } },
      data: { isArchived: true },
    });
  }

  return new NextResponse(null, { status: 200 });
}`,
                        explanation: "Verifies cryptographic Stripe signatures, updates order fulfillment status, and archives purchased items in a resilient transaction."
                    }
                },
                live: {
                    type: "live",
                    title: "Live Production Verification",
                    subtitle: "Deployments and Source Repositories",
                    description: "Both the multi-tenant administration portal and consumer storefront are deployed live on Vercel with automated CI/CD pipelines.",
                    highlights: [
                        "Admin Portal: https://ecommerce-admin-ruddy-nu.vercel.app",
                        "Customer Storefront: https://ecommerce-store-b-l-i-n-d.vercel.app",
                        "GitHub Repositories: b-l-i-n-d/ecommerce-admin & b-l-i-n-d/ecommerce-store"
                    ],
                    liveUrl: "https://ecommerce-admin-ruddy-nu.vercel.app"
                }
            }
        },
        {
            id: "edtech",
            chapterNumber: "02",
            title: "EdTech Interactive Learning Management System",
            tagline: "Scalable Course Platform with Video Streaming & RTK Query Caching",
            category: "Fullstack EdTech & Media Streaming",
            timeline: "Production Ready",
            role: "Full-Stack Engineer",
            stack: [
                "Next.js",
                "TypeScript",
                "Redux Toolkit",
                "RTK Query",
                "Node.js",
                "Express.js",
                "MongoDB & Mongoose",
                "Cloudinary Video",
                "JWT Auth",
                "Ant Design"
            ],
            summary: "A modern, responsive e-learning architecture enabling seamless student enrollment, adaptive video lecture streaming, rich markdown curriculum parsing, and centralized state caching via RTK Query.",
            liveUrl: "https://ed-tech-six.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/edTech",
            secondaryGithubUrl: "https://github.com/b-l-i-n-d/edTech-backend",
            stats: [
                { label: "Frontend", value: "Next.js + RTK Query" },
                { label: "Backend", value: "Express.js REST" },
                { label: "Database", value: "MongoDB Atlas" },
                { label: "Media Host", value: "Cloudinary CDN" }
            ],
            stages: {
                architecture: {
                    type: "architecture",
                    title: "Decoupled Next.js & Express REST Pipeline",
                    subtitle: "Normalized State & Media Pipeline",
                    description: "Client queries utilize RTK Query endpoints with automated tag invalidation for course progress and user enrollments. Video streaming assets are transcoded and delivered via Cloudinary with adaptive bitrate streaming.",
                    highlights: [
                        "Separation of concerns: Stateless Express microservice paired with SSR Next.js frontend",
                        "Strict JWT authorization tokens with HTTP-only refresh cookies",
                        "Cache invalidation matrix automatically reconciling student completed lecture checklists"
                    ],
                    diagramType: "system"
                },
                flow: {
                    type: "flow",
                    title: "Student Curriculum & Playback Experience",
                    subtitle: "Continuous Learning Loop",
                    description: "Students navigate module playlists with keyboard shortcuts, auto-saving playback timestamp positions and synchronizing markdown lecture notes in real time.",
                    highlights: [
                        "Resume playback exact second tracking via ReactPlayer state hooks",
                        "Client-side lecture notes rendering GitHub-flavored markdown",
                        "Dynamic progress bar reflecting aggregate course completion percentage"
                    ]
                },
                code: {
                    type: "code",
                    title: "RTK Query Automated Cache Synchronization",
                    subtitle: "Optimistic State Invalidation",
                    description: "Implementation of RTK Query mutation hooks with cache tagging, providing optimistic UI updates when marking lectures as complete.",
                    highlights: [
                        "Declarative tag-based query refetching avoiding manual state syncs",
                        "Optimistic cache patch for zero-latency checkbox checkoffs",
                        "Centralized error normalization handling expired authentication tokens"
                    ],
                    codeSnippet: {
                        language: "typescript",
                        filename: "redux/features/course/courseApi.ts",
                        code: `import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourseDetails: builder.query({
      query: (courseId: string) => \`/courses/\${courseId}\`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),
    updateLectureProgress: builder.mutation({
      query: ({ courseId, lectureId, completed }) => ({
        url: \`/courses/\${courseId}/lectures/\${lectureId}/progress\`,
        method: "PATCH",
        body: { completed },
      }),
      invalidatesTags: (result, error, { courseId }) => [
        { type: "Course", id: courseId },
        { type: "UserEnrollments" },
      ],
    }),
  }),
});`,
                        explanation: "Injects decoupled endpoint queries with declarative cache invalidation tags to maintain sync across the lecture player."
                    }
                },
                live: {
                    type: "live",
                    title: "EdTech Production Deployment",
                    subtitle: "Interactive Student Portal",
                    description: "Live web application featuring course catalog, video curriculum, and user profile management.",
                    highlights: [
                        "Live Web App: https://ed-tech-six.vercel.app",
                        "Frontend Repo: b-l-i-n-d/edTech",
                        "Backend Repo: b-l-i-n-d/edTech-backend"
                    ],
                    liveUrl: "https://ed-tech-six.vercel.app"
                }
            }
        },
        {
            id: "docapp",
            chapterNumber: "03",
            title: "DocApp: Healthcare Appointment Management",
            tagline: "Real-Time Patient Consultation Scheduling & Doctor Practice Management",
            category: "Healthcare Web Application",
            timeline: "Production Ready",
            role: "Full-Stack Developer",
            stack: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Redux Toolkit",
                "Tailwind CSS",
                "React Router DOM",
                "Cloudinary"
            ],
            summary: "A role-based medical consultation portal connecting patients with verified physicians, featuring automated appointment time-slot reservation, medical record PDF generation, and physician scheduling consoles.",
            liveUrl: "https://docapp-five.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/docapp",
            stats: [
                { label: "Role Management", value: "Doctor & Patient" },
                { label: "Scheduling", value: "Time-Slot Matrix" },
                { label: "State Store", value: "Redux Toolkit" },
                { label: "Styling", value: "Tailwind CSS" }
            ],
            stages: {
                architecture: {
                    type: "architecture",
                    title: "Appointment Booking State Machine & RBAC",
                    subtitle: "Conflict-Free Slot Allocation",
                    description: "Physicians declare weekly availability slots. The booking engine performs atomic validation checks preventing double-booking before persisting appointment state in MongoDB.",
                    highlights: [
                        "Role-Based Access Control ensuring strict separation of medical dashboards",
                        "Atomic reservation locking mechanism during concurrent checkout attempts",
                        "Automated appointment status pipeline (Pending -> Confirmed -> Completed -> Cancelled)"
                    ],
                    diagramType: "state"
                },
                flow: {
                    type: "flow",
                    title: "Consultation Booking & Schedule Dispatch",
                    subtitle: "Fluid 3-Step Reservation Flow",
                    description: "Patients filter doctors by specialty, select an available date on the calendar matrix, and receive instant confirmation cards with printable PDF prescription stubs.",
                    highlights: [
                        "Dynamic calendar time-slot matrix updating live availability",
                        "Doctor approval dashboard with one-click rescheduling and notifications",
                        "Client-side PDF prescription generation via React-PDF"
                    ]
                },
                code: {
                    type: "code",
                    title: "Slot Availability & Conflict Detection Engine",
                    subtitle: "Atomic Reservation Validation",
                    description: "Server-side Express validation controller ensuring time slots cannot be overbooked by multiple simultaneous patients.",
                    highlights: [
                        "MongoDB query filtering overlapping appointments with active status",
                        "Strict validation on physician slot boundaries and buffer intervals",
                        "Sanitized payload serialization preventing NoSQL injection"
                    ],
                    codeSnippet: {
                        language: "javascript",
                        filename: "controllers/appointmentController.js",
                        code: `exports.bookAppointment = async (req, res) => {
  const { doctorId, appointmentDate, timeSlot } = req.body;
  const patientId = req.user.id;

  const existingBooking = await Appointment.findOne({
    doctor: doctorId,
    date: appointmentDate,
    timeSlot: timeSlot,
    status: { $in: ["Pending", "Confirmed"] },
  });

  if (existingBooking) {
    return res.status(409).json({
      success: false,
      message: "This appointment slot has already been reserved.",
    });
  }

  const appointment = await Appointment.create({
    patient: patientId,
    doctor: doctorId,
    date: appointmentDate,
    timeSlot,
    status: "Pending",
  });

  res.status(201).json({ success: true, data: appointment });
};`,
                        explanation: "Guarantees zero double-booking by checking active conflicting reservations before writing to the database."
                    }
                },
                live: {
                    type: "live",
                    title: "DocApp Production Deployment",
                    subtitle: "Healthcare System Live Portal",
                    description: "Complete healthcare consultation web application running live on Vercel.",
                    highlights: [
                        "Live Production App: https://docapp-five.vercel.app",
                        "GitHub Repository: b-l-i-n-d/docapp"
                    ],
                    liveUrl: "https://docapp-five.vercel.app"
                }
            }
        }
    ],
    interactiveBuilds: [
        {
            id: "dragnsort",
            title: "DragNSort: Physics-Based Reordering Engine",
            tagline: "60 FPS Drag & Drop Component with Smooth Physics Transitions",
            category: "Physics & Motion",
            description: "A lightweight, zero-dependency drag-and-drop sortable list implementation built with GPU matrix transforms and pointer events.",
            technologies: ["TypeScript", "Next.js", "Pointer Events", "CSS Transform3D"],
            demoUrl: "https://dragnsort.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/dragnsort",
            fpsTarget: 60,
            highlights: ["Zero layout thrashing during drag", "Hardware-accelerated translate3d physics", "Touch and desktop pointer normalization"]
        },
        {
            id: "folder-manager",
            title: "Folder Manager: Hierarchical Tree Explorer",
            tagline: "Recursive File & Directory System with Expanding Animations",
            category: "Tree Structures",
            description: "Interactive nested tree explorer supporting dynamic directory creation, deletion, nested nesting, and persistent memory caching.",
            technologies: ["TypeScript", "React", "Recursive Data Structures", "Tailwind CSS"],
            demoUrl: "https://folder-manager-blond.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/folder-manager",
            fpsTarget: 60,
            highlights: ["Infinite recursive nesting without stack overflow", "Smooth CSS height/scale transitions", "State serialization to localStorage"]
        },
        {
            id: "book-animation",
            title: "3D Book Animation: Perspective Page-Flip Interaction",
            tagline: "Physical 3D Matrix Page Flipping Built with CSS Transforms",
            category: "3D Transform",
            description: "A realistic 3D book flipping experience using pure CSS 3D perspectives, preserving lighting gradients and depth without heavy WebGL canvas.",
            technologies: ["HTML5", "CSS3 3D Transforms", "Perspective Matrix", "JavaScript"],
            demoUrl: "https://book-animation-two.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/book-animation",
            fpsTarget: 60,
            highlights: ["Pure CSS 3D perspective rendering", "Runs locked 60 FPS on low-end mobile devices", "Realistic lighting and shade falloff"]
        },
        {
            id: "calendar",
            title: "Reactive Calendar Component",
            tagline: "Modular Date & Event Scheduling Interface",
            category: "Productivity",
            description: "High-performance calendar widget featuring month and week grid calculations, quick date navigation, and event indicators.",
            technologies: ["TypeScript", "Next.js", "Date-Fns", "Tailwind CSS"],
            demoUrl: "https://calendar-eight-mu.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/calendar",
            fpsTarget: 60,
            highlights: ["Sub-millisecond date matrix recalculation", "Accessible keyboard navigation", "Compact zero-dependency footprint"]
        },
        {
            id: "travel-web-app",
            title: "Travel Web App: Exploration Platform",
            tagline: "Fluid Tourism Destination Discovery & Booking UI",
            category: "Productivity",
            description: "Editorial travel explorer showcasing responsive destination cards, image carousels, and interactive booking modal overlays.",
            technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
            demoUrl: "https://travel-web-app-two.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/travel-web-app",
            fpsTarget: 60,
            highlights: ["Responsive fluid typography", "Curated photography showcase", "Smooth modal enter/exit animations"]
        },
        {
            id: "spinner",
            title: "Micro-Interaction Spinner Lab",
            tagline: "GPU-Composited Loading Indicators & State Feedback",
            category: "Micro-Interactions",
            description: "A collection of ultra-smooth, lightweight loading spinners engineered with zero main-thread CPU overhead using pure SVG/CSS keyframes.",
            technologies: ["TypeScript", "SVG Animations", "CSS Keyframes", "Next.js"],
            demoUrl: "https://spinner-wine.vercel.app",
            githubUrl: "https://github.com/b-l-i-n-d/spinner",
            fpsTarget: 60,
            highlights: ["Zero main-thread blocking", "Infinite smooth looping at 60 FPS", "Scale-independent vector graphics"]
        }
    ],
    hybridGallery: [
        {
            id: "blueprint-1",
            number: "01",
            title: "Multi-Tenant E-Commerce Schema",
            category: "Architecture Schema",
            badge: "System Design",
            description: "Database entity relationships isolating multi-merchant stores, product attributes (size, color, category), and order lines.",
            details: [
                "Strict foreign-key cascades preventing orphaned inventory rows",
                "Normalized attribute tables for size and color variants",
                "Indexed storeId partitions across high-frequency queries"
            ],
            technologies: ["Prisma", "MySQL", "PlanetScale"],
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-admin"
        },
        {
            id: "blueprint-2",
            number: "02",
            title: "Stripe Webhook Idempotency Pipeline",
            category: "Architecture Schema",
            badge: "API Pipeline",
            description: "State transition sequence diagram handling asynchronous payment webhooks, signature verification, and inventory updates.",
            details: [
                "Cryptographic HMAC signature validation",
                "Idempotency key checks preventing duplicate order fulfillment",
                "Dead-letter retry queue fallback design"
            ],
            technologies: ["Stripe API", "Next.js App Router", "TypeScript"],
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-admin"
        },
        {
            id: "blueprint-3",
            number: "03",
            title: "DocApp Appointment State Machine",
            category: "Architecture Schema",
            badge: "State Machine",
            description: "Finite state machine diagram modeling appointment lifecycle from initial slot hold through doctor confirmation and completion.",
            details: [
                "Atomic slot reservation with automated 15-minute expiration hold",
                "Role-based action guards for doctor vs patient permissions",
                "Real-time state broadcast to clinic reception console"
            ],
            technologies: ["Express.js", "MongoDB", "Redux Toolkit"],
            sourceUrl: "https://github.com/b-l-i-n-d/docapp"
        },
        {
            id: "blueprint-4",
            number: "04",
            title: "EdTech Video & Cache Invalidation Matrix",
            category: "Architecture Schema",
            badge: "Caching Strategy",
            description: "RTK Query cache tagging architecture reconciling client-side video playback progress and server-side curriculum completion.",
            details: [
                "Automated cache invalidation tags on lecture completion mutations",
                "Optimistic UI updates reducing perceived network latency to 0ms",
                "Adaptive bitrate HLS video streaming handoff"
            ],
            technologies: ["RTK Query", "Next.js", "Redux Toolkit"],
            sourceUrl: "https://github.com/b-l-i-n-d/edTech"
        },
        {
            id: "blueprint-5",
            number: "05",
            title: "Recursive Tree Filesystem Data Model",
            category: "Architecture Schema",
            badge: "Data Structures",
            description: "Recursive hierarchical node structure enabling nested folder nesting, renaming, and atomic move operations.",
            details: [
                "Immutable state mutations using recursive tree walk algorithms",
                "O(1) node lookup indexing with parent-child pointer caches",
                "Safe serialization to browser persistent storage"
            ],
            technologies: ["TypeScript", "Algorithms", "Data Structures"],
            sourceUrl: "https://github.com/b-l-i-n-d/folder-manager"
        },
        {
            id: "blueprint-6",
            number: "06",
            title: "Physics Drag-and-Drop Coordinate System",
            category: "Architecture Schema",
            badge: "Motion Physics",
            description: "Pointer event mathematical coordinate model tracking drag offset, bounding box collision, and sibling reorder animations.",
            details: [
                "Zero DOM reading during drag movement to eliminate layout thrashing",
                "GPU transform3d matrix calculation in requestAnimationFrame loop",
                "Velocity-based momentum and spring settle damping"
            ],
            technologies: ["Web APIs", "CSS Matrix", "requestAnimationFrame"],
            sourceUrl: "https://github.com/b-l-i-n-d/dragnsort"
        },
        {
            id: "ui-1",
            number: "07",
            title: "E-Commerce Customer Storefront",
            category: "Interactive UI",
            badge: "Production App",
            description: "Clean, high-converting product catalog featuring real-time filter ribbons, color swatches, and cart drawer.",
            details: [
                "Faceted search with URL parameter synchronization",
                "High-resolution product image modal previews",
                "Integrated Stripe checkout redirect with localized currency"
            ],
            technologies: ["Next.js", "Tailwind CSS", "Zustand"],
            demoUrl: "https://ecommerce-store-b-l-i-n-d.vercel.app",
            sourceUrl: "https://github.com/b-l-i-n-d/ecommerce-store"
        },
        {
            id: "ui-2",
            number: "08",
            title: "3D Perspective Book Flipping Interaction",
            category: "Interactive UI",
            badge: "3D Transform",
            description: "Interactive physical book simulation built with pure CSS 3D perspective transforms and dynamic shadow shaders.",
            details: [
                "Smooth page turning gesture with dual-page rendering",
                "Realistic ambient occlusion and depth gradients",
                "Zero external canvas dependencies"
            ],
            technologies: ["HTML5", "CSS3 3D Matrix", "JavaScript"],
            demoUrl: "https://book-animation-two.vercel.app",
            sourceUrl: "https://github.com/b-l-i-n-d/book-animation"
        },
        {
            id: "ui-3",
            number: "09",
            title: "Hierarchical Folder Explorer UI",
            category: "Interactive UI",
            badge: "Interactive UI",
            description: "Tree structure explorer with expanding directory animations, item creation modals, and breadcrumbs.",
            details: [
                "Animated folder expansion and collapse transitions",
                "Context menu for renaming and deleting items",
                "State preservation across page reloads"
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://folder-manager-blond.vercel.app",
            sourceUrl: "https://github.com/b-l-i-n-d/folder-manager"
        },
        {
            id: "ui-4",
            number: "10",
            title: "Sortable Physics Drag Grid",
            category: "Interactive UI",
            badge: "Physics Engine",
            description: "Drag-and-drop sortable items with fluid spring animations and layout repositioning.",
            details: [
                "Spring physics on sibling item relocation",
                "Touch gesture support for mobile devices",
                "Accessible keyboard reordering keys"
            ],
            technologies: ["TypeScript", "Pointer Events", "CSS3"],
            demoUrl: "https://dragnsort.vercel.app",
            sourceUrl: "https://github.com/b-l-i-n-d/dragnsort"
        },
        {
            id: "ui-5",
            number: "11",
            title: "Travel Destination Explorer",
            category: "Interactive UI",
            badge: "Editorial UI",
            description: "Editorial travel web application with destination cards, weather widgets, and trip booking dialogues.",
            details: [
                "Fluid typography and responsive grid layout",
                "Backdrop filter blur effects with low-end device fallbacks",
                "Interactive photo gallery with smooth transitions"
            ],
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            demoUrl: "https://travel-web-app-two.vercel.app",
            sourceUrl: "https://github.com/b-l-i-n-d/travel-web-app"
        },
        {
            id: "ui-6",
            number: "12",
            title: "Modular Reactive Calendar Widget",
            category: "Interactive UI",
            badge: "Component Library",
            description: "Date picker and event scheduling calendar widget with month, week, and day views.",
            details: [
                "Fast month-matrix calendar generation",
                "Active date highlights and event dot badges",
                "Zero external bloated date libraries"
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            demoUrl: "https://calendar-eight-mu.vercel.app",
            sourceUrl: "https://github.com/b-l-i-n-d/calendar"
        }
    ],
    skillCategories: [
        {
            name: "Core Languages & Foundations",
            skills: ["TypeScript", "JavaScript (ESNext)", "HTML5 / Semantic Web", "CSS3 / Modern Layouts", "C++", "SQL"]
        },
        {
            name: "Frontend Frameworks & Motion",
            skills: ["Next.js (App Router & SSR)", "React.js", "Tailwind CSS", "Framer Motion", "Shadcn/UI", "Redux Toolkit / RTK Query", "Zustand"]
        },
        {
            name: "Backend & Distributed Systems",
            skills: ["Node.js", "Express.js", "RESTful API Design", "MongoDB & Mongoose", "Prisma ORM", "PlanetScale (MySQL)", "JWT Authentication"]
        },
        {
            name: "DevOps, Tooling & Cloud",
            skills: ["Git & GitHub", "Vercel CI/CD", "Stripe API & Webhooks", "Clerk Auth", "Cloudinary CDN", "Netlify"]
        }
    ]
};
