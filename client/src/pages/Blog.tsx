import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import SocialMediaBar from "@/components/SocialMediaBar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Future of American Heritage in the Digital Age: A New Era with NFTs",
    excerpt: "NFTs are transforming American heritage preservation by blending tradition with technology, offering a modern way to celebrate history. The National Anthem 250 NFT collection on Solana highlights this digital shift.",
    date: "October 1, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/10/featured-image-1759341635.jpeg"
  },
  {
    id: 2,
    title: "The Solana Advantage: Elevate Your NFT Collection with National Anthem 250",
    excerpt: "The Solana blockchain offers NFT collectors a chance to own patriotic NFTs with the National Anthem 250 Collection, celebrating American heritage. Solana's speed, efficiency, and low costs enhance the NFT experience.",
    date: "September 30, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/09/featured-image-1759237249.jpeg"
  },
  {
    id: 3,
    title: "Unlocking the Power of Community Governance in NFT Projects",
    excerpt: "NFT community governance, exemplified by National Anthem 250 on Solana, empowers participants to influence project decisions, ensuring transparency and fostering engagement. It offers historical NFTs, community involvement, and potential investment opportunities.",
    date: "September 29, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/09/featured-image-1759150842.jpeg"
  },
  {
    id: 4,
    title: "The Rise of Patriotic NFTs: Merging History with Blockchain Technology",
    excerpt: "NAT250 is revolutionizing NFTs by merging American heritage with blockchain technology. Celebrating the 250th anniversary of independence, it offers secure, unique collectibles on Solana, supporting artists and preserving history.",
    date: "September 28, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/09/featured-image-1759082427.jpeg"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SocialMediaBar />
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-br from-patriot-navy via-patriot-blue to-patriot-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-patriot-gold/20 mb-6">
              <BookOpen className="h-10 w-10 text-patriot-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              NAT250 BLOG
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Discover the latest updates, behind-the-scenes stories, and insights about America's first National Anthem NFT project
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Latest Articles</h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest news, insights, and stories about America's National Anthem NFT project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden hover-elevate transition-all"
                  data-testid={`card-blog-post-${post.id}`}
                >
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1 text-sm text-patriot-blue font-semibold">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="px-3 py-1 bg-patriot-gold/10 text-patriot-gold text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="group"
                      data-testid={`button-read-more-${post.id}`}
                      asChild
                    >
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center gap-4 p-8 bg-muted/30 rounded-2xl">
                <BookOpen className="h-12 w-12 text-patriot-blue" />
                <h3 className="text-2xl font-bold">Stay Connected</h3>
                <p className="text-muted-foreground max-w-md">
                  Join our community to receive the latest updates, exclusive content, and be part of America's historic NFT journey
                </p>
                <Button 
                  size="lg" 
                  asChild
                  data-testid="button-join-waitlist-blog"
                >
                  <Link href="/#participate">
                    Join the Waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
