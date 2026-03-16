'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Star,
  Heart,
  Menu,
  Search,
  ArrowRight,
  Instagram,
  Truck,
  ShieldCheck,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

const featured = [
  {
    name: 'Luna Satin Dress',
    price: '₹2,499',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Elara Co-ord Set',
    price: '₹3,199',
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mira Evening Top',
    price: '₹1,899',
    tag: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Noor Tailored Blazer',
    price: '₹3,999',
    tag: 'Editor Pick',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
];

const categories = [
  {
    title: 'Evening Dresses',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Luxury Co-ords',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Signature Tops',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
  },
];

const testimonials = [
  {
    name: 'Ananya',
    text: 'The quality, presentation, and fit feel incredibly elevated. It genuinely feels like a luxury label.',
  },
  {
    name: 'Rhea',
    text: 'Everything from the photography to the finishing details feels refined and expensive in the best way.',
  },
  {
    name: 'Sanya',
    text: 'The silhouettes are elegant, modern, and polished. This is the kind of brand that feels instantly premium.',
  },
];

function Button({ children, className = '', variant = 'default', size = 'md', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 transition-all font-medium focus:outline-none';
  const variants = {
    default: 'bg-[#c79a63] text-black hover:bg-[#d4a874]',
    outline: 'border border-[#5a4631] bg-transparent text-[#f1ddc2] hover:bg-[#151515] hover:text-[#f8f3ec]',
    ghost: 'bg-transparent text-[#c6b9aa] hover:bg-[#121212] hover:text-[#f1ddc2]',
    secondary: 'bg-[#111111]/90 text-[#f1ddc2] hover:bg-[#1a1a1a]',
  };
  const sizes = {
    md: 'h-11 px-5 rounded-2xl',
    lg: 'h-12 px-8 rounded-2xl',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Badge({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center rounded-full text-sm ${className}`}>
      {children}
    </div>
  );
}

function Card({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-4 outline-none transition-all ${className}`}
      {...props}
    />
  );
}

function ProductCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <Card className="group overflow-hidden rounded-[2rem] border border-[#3b2f24] bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-1 hover:border-[#8a6a45] hover:shadow-[0_32px_110px_rgba(0,0,0,0.55)]">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <Badge className="absolute left-4 top-4 border border-[#a37a4a]/50 bg-[#151515]/90 px-3 py-1 text-[#f1ddc2] shadow-sm">
            {item.tag}
          </Badge>
          <button className="absolute right-4 top-4 rounded-full border border-[#a37a4a]/50 bg-[#151515]/90 p-2 text-[#f1ddc2] shadow-sm">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-[#f8f3ec]">{item.name}</h3>
              <p className="mt-1 text-sm text-[#b7a998]">Crafted premium womenswear</p>
            </div>
            <div className="text-sm font-semibold text-[#f1ddc2]">{item.price}</div>
          </div>
          <Button className="mt-5 w-full">Add to Bag</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function WomenClothingBrandWebsite() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(55,41,27,0.35),_rgba(9,9,9,1)_28%,_rgba(4,4,4,1)_100%)] text-[#f8f3ec]">
      <header className="sticky top-0 z-40 border-b border-[#2a2119] bg-[#090909]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-[#3b2f24] bg-[#121212] p-2 lg:hidden">
              <Menu className="h-5 w-5 text-[#f1ddc2]" />
            </button>
            <div>
              <div className="text-[11px] uppercase tracking-[0.38em] text-[#9d8b76]">Maison</div>
              <div className="text-2xl font-semibold tracking-[0.28em] text-[#f8f3ec]">AURELLE</div>
            </div>
          </div>
          <nav className="hidden items-center gap-10 text-sm text-[#c6b9aa] lg:flex">
            <a href="#new" className="transition hover:text-[#f1ddc2]">New In</a>
            <a href="#shop" className="transition hover:text-[#f1ddc2]">Shop</a>
            <a href="#collection" className="transition hover:text-[#f1ddc2]">Collections</a>
            <a href="#stories" className="transition hover:text-[#f1ddc2]">Maison Story</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-[#3b2f24] bg-[#121212] p-2"><Search className="h-4 w-4 text-[#f1ddc2]" /></button>
            <button className="rounded-full border border-[#3b2f24] bg-[#121212] p-2"><ShoppingBag className="h-4 w-4 text-[#f1ddc2]" /></button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-20">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} className="flex flex-col justify-center">
          <Badge className="w-fit border border-[#5a4631] bg-[#121212] px-4 py-1.5 text-[#f1ddc2] shadow-sm">
            <Sparkles className="mr-2 h-3.5 w-3.5" /> Autumn Noir 2026
          </Badge>
          <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#f8f3ec] lg:text-7xl">
            Dark luxury womenswear with an editorial edge.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#b7a998]">
            Discover refined silhouettes, rich textures, and statement pieces designed for women who want bold elegance with a premium finish.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">Shop The Edit</Button>
            <Button size="lg" variant="outline">View Collection</Button>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#2c231b] bg-[#111111] p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-[#b7a998]"><Truck className="h-4 w-4" /> Complimentary shipping</div>
              <div className="mt-2 text-sm font-medium text-[#f8f3ec]">On orders above ₹2,999</div>
            </div>
            <div className="rounded-[1.5rem] border border-[#2c231b] bg-[#111111] p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-[#b7a998]"><RefreshCw className="h-4 w-4" /> Seamless returns</div>
              <div className="mt-2 text-sm font-medium text-[#f8f3ec]">Easy 7-day return window</div>
            </div>
            <div className="rounded-[1.5rem] border border-[#2c231b] bg-[#111111] p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-[#b7a998]"><ShieldCheck className="h-4 w-4" /> Trusted checkout</div>
              <div className="mt-2 text-sm font-medium text-[#f8f3ec]">Secure payment experience</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute -left-8 top-12 hidden h-40 w-40 rounded-full bg-[#7b5d3a]/20 blur-3xl lg:block" />
          <div className="absolute -right-8 bottom-10 hidden h-48 w-48 rounded-full bg-[#c79a63]/15 blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#2e241b] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury women fashion hero"
              className="h-[700px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
          <Card className="absolute -bottom-8 left-8 max-w-sm rounded-[2rem] border border-[#3a2f24] bg-[#111111]/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-[#b7a998]">
                <Star className="h-4 w-4 fill-current text-[#f1ddc2]" /> 4.9 customer rating
              </div>
              <p className="mt-3 text-sm leading-7 text-[#b7a998]">
                Meticulous fabrics, flattering cuts, and a visual identity inspired by high-fashion night editorials.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="collection" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#9d8b76]">Curated collections</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#f8f3ec] lg:text-5xl">A premium wardrobe, reimagined in noir</h2>
          </div>
          <Button variant="ghost">View all <ArrowRight className="h-4 w-4" /></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-[2.25rem] border border-[#2e241b] shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <img src={category.image} alt={category.title} className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#e0c6a2]/70">Curated</div>
                  <div className="mt-2 text-2xl font-semibold text-white">{category.title}</div>
                </div>
                <Button variant="secondary">Shop</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#9d8b76]">The signature edit</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#f8f3ec] lg:text-5xl">Best sellers and new arrivals</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Card className="overflow-hidden rounded-[2.5rem] border border-[#2d241c] bg-[linear-gradient(135deg,rgba(17,17,17,0.95),rgba(28,22,18,0.98))] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <CardContent className="p-8 lg:p-12">
              <p className="text-sm uppercase tracking-[0.28em] text-[#9d8b76]">Maison story</p>
              <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-[#f8f3ec] lg:text-5xl">Crafted for confidence, polish, and dark luxury.</h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#b7a998]">
                AURELLE is designed for women who prefer refined dressing over excess. Every piece is imagined with sculpted structure, graceful movement, and a luxurious finish that feels timeless and cinematic.
              </p>
              <Button className="mt-8">Read Our Story</Button>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="rounded-[2rem] border border-[#2c231b] bg-[#101010] shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-[#f1ddc2]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#b7a998]">{item.text}</p>
                  <div className="mt-5 text-sm font-semibold text-[#f8f3ec]">{item.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="new" className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <Card className="overflow-hidden rounded-[2.5rem] border border-[#3a2d22] bg-[linear-gradient(135deg,#0b0b0b,#15110d,#261d15)] text-white shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
          <CardContent className="relative p-8 text-center lg:p-14">
            <div className="absolute inset-0 opacity-25">
              <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#d7ab74] blur-3xl" />
              <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-[#8c6741] blur-3xl" />
            </div>
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d2b48c]/75">Private access</p>
              <h3 className="mt-3 text-3xl font-semibold lg:text-5xl">Receive first access to new drops and exclusive releases.</h3>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#d5c6b5]/78">
                Join the AURELLE list for early access, private offers, seasonal edits, and style inspiration curated with a dark luxury lens.
              </p>
              <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <Input placeholder="Enter your email" className="h-12 rounded-2xl border border-[#3d3125] bg-[#121212] text-[#f8f3ec] placeholder:text-[#8f7f6e]" />
                <Button className="h-12">Subscribe</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-[#211913] bg-[#080808]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-4 lg:px-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.38em] text-[#9d8b76]">Maison</div>
            <div className="mt-1 text-xl font-semibold tracking-[0.28em] text-[#f8f3ec]">AURELLE</div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#b7a998]">
              Elevated womenswear designed with a dark luxury aesthetic for modern wardrobes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#f8f3ec]">Shop</h4>
            <div className="mt-4 space-y-3 text-sm text-[#b7a998]">
              <div>New Arrivals</div>
              <div>Evening Dresses</div>
              <div>Signature Tops</div>
              <div>Luxury Co-ords</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#f8f3ec]">Client Care</h4>
            <div className="mt-4 space-y-3 text-sm text-[#b7a998]">
              <div>Shipping</div>
              <div>Returns</div>
              <div>Size Guide</div>
              <div>Contact</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#f8f3ec]">Follow</h4>
            <div className="mt-4 flex items-center gap-3 text-[#b7a998]">
              <button className="rounded-full border border-[#3b2f24] bg-[#111111] p-2"><Instagram className="h-4 w-4" /></button>
              <button className="rounded-full border border-[#3b2f24] bg-[#111111] p-2"><Heart className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
