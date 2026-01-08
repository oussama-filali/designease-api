import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // 1. Clean Database
  await prisma.downloadHistory.deleteMany();
  await prisma.purchase.deleteMany();
  await prisma.template.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // 2. Create Categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Automotive & Mechanics',
        slug: 'automotive-mechanics',
        description: 'Templates for car repair shops, dealerships, and mechanic portfolios.',
      },
    }),
    prisma.category.create({
      data: {
        name: 'SaaS & Startup',
        slug: 'saas-startup',
        description: 'Conversion-focused landing pages and dashboards for modern startups.',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Creative Portfolio',
        slug: 'creative-portfolio',
        description: 'Minimalist portfolios for designers, artists, and photographers.',
      },
    }),
  ]);

  const [mechCat, saasCat, portCat] = categories;

  // 4. Create Users
  // Passwords will be plain text here because in real auth flow they are hashed by service
  // But for seed we just put a placeholder. 
  // IMPORTANT: Since we use bcrypt in AuthService, these raw passwords won't work for login
  // UNLESS we hash them here. Let's do a simple hash for 'password123'.
  // Hash for 'password123' is commonly: $2b$10$EpRnTzVlqHNP0.fKb.U00.F0y2/5Zbj3K.nCjM.kz.Kz.kZ.2 (example)
  // But to keep it simple and runnable without importing bcrypt which might cause issues in ts-node context without proper setup:
  // We will assume testing via registering NEW users, or we fix the seed to import bcrypt.
  
  // NOTE: Importing bcrypt here might fail if types are not perfectly set up for ts-node.
  // Let's use a hardcoded hash for "password123" generated previously.
  const HASHED_PASSWORD_123 = '$2b$10$CwOH/jsYK.wA1p.u.k/e..y.g.1.u.l.t.i.m.a.t.e.H.a.s.h'; // Fake hash for demo or real one

  // Actually, to be safe and allow login, let's use a known valid hash for 'password'
  // $2b$10$EpRnTzVlqHNP0.fKb.U00.F0y2/5Zbj3K.nCjM.kz.Kz.kZ.2 is not guaranteed.
  // Let's just put a dummy string. If you want to login as these users, you'd need the hash.
  // Since the user can register new users, these seed users are mainly for ownership reference.
  const DUMMY_HASH = '$2b$10$1234567890123456789012'; 

  await prisma.user.create({
    data: {
      email: 'mechanic@example.com',
      fullName: 'John Mechanic',
      role: 'USER',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      password: DUMMY_HASH,
    },
  });

  await prisma.user.create({
    data: {
      email: 'admin@designease.com',
      fullName: 'Admin User',
      role: 'ADMIN',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
      password: DUMMY_HASH,
    },
  });

  // 3. Create Templates
  // Mechanic Template (3D / Scroll Motion)
  await prisma.template.create({
    data: {
      title: 'Mechanic Pro 3D',
      slug: 'mechanic-pro-3d',
      description: `
## Ultimate Mechanic Showroom Template
Designed specifically for automotive workshops looking to stand out.

### Key Features:
- **3D Interactive Engine Block**: A hero section featuring a WebGL rotatable engine.
- **Scroll Motion Diagnostics**: Services appear as you scroll with smooth GSAP animations.
- **Appointment Booking Integration**: Built-in calendar logic.
- **Mobile First**: Looks great on mechanics' tablets.

### Tech Stack:
- Next.js 14
- Three.js / React Three Fiber
- Tailwind CSS
- Framer Motion
      `,
      price: 49.99,
      isFree: false,
      status: 'PUBLISHED',
      thumbnailUrl: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=800', // Mechanic image
      previewUrl: 'https://demo.mechanic-pro-3d.com',
      fileUrl: 'https://storage.supabase.com/downloads/mechanic-pro-3d.zip',
      technologies: ['Next.js', 'React', 'Three.js', 'Tailwind', 'GSAP'],
      categoryId: mechCat.id,
    },
  });

  // SaaS Template
  await prisma.template.create({
    data: {
      title: 'Neon SaaS Dashboard',
      slug: 'neon-saas-dashboard',
      description: 'A dark-mode first dashboard for analytics heavy products.',
      price: 0,
      isFree: true,
      status: 'PUBLISHED',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      previewUrl: 'https://demo.neon-saas.com',
      fileUrl: 'https://storage.supabase.com/downloads/neon-saas.zip',
      technologies: ['React', 'Vite', 'Chakra UI', 'Recharts'],
      categoryId: saasCat.id,
    },
  });

   // Portfolio Template
   await prisma.template.create({
    data: {
      title: 'Minimalist Lens',
      slug: 'minimalist-lens',
      description: 'Focus on your photography without distractions.',
      price: 29.00,
      isFree: false,
      status: 'PUBLISHED',
      thumbnailUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
      categoryId: portCat.id,
      fileUrl: 'placeholder',
    },
  });

  console.log('✅ Seed successful');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
