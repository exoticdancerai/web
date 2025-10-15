import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import SocialMediaBar from "@/components/SocialMediaBar";
import Footer from "@/components/Footer";

const blogPosts = {
  "1": {
    id: 1,
    title: "Exploring the Future of American Heritage in the Digital Age: A New Era with NFTs",
    content: "NFTs are transforming American heritage preservation by blending tradition with technology, offering a modern way to celebrate history. The National Anthem 250 NFT collection on Solana highlights this digital shift.\n\nAs we approach America's 250th anniversary, the intersection of cultural preservation and blockchain technology presents unprecedented opportunities for commemorating our nation's heritage. The NAT250 project represents this evolution, offering Americans a tangible way to participate in historic preservation through digital ownership.\n\nBy leveraging the Solana blockchain's speed and efficiency, we're creating accessible pathways for patriots to own a piece of American history. This innovative approach ensures that our cultural treasures are preserved for future generations while embracing the technological advances of our time.",
    date: "October 1, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/10/featured-image-1759341635.jpeg"
  },
  "2": {
    id: 2,
    title: "The Solana Advantage: Elevate Your NFT Collection with National Anthem 250",
    content: "The Solana blockchain offers NFT collectors a chance to own patriotic NFTs with the National Anthem 250 Collection, celebrating American heritage. Solana's speed, efficiency, and low costs enhance the NFT experience.\n\nWhy Solana? Our choice of blockchain was deliberate and strategic. Solana's high transaction throughput and minimal fees make it the ideal platform for commemorative digital collectibles. Unlike other blockchains with expensive gas fees, Solana ensures that every American can participate in this historic project without prohibitive costs.\n\nThe NAT250 token leverages Solana's robust infrastructure to provide instant transactions, environmental efficiency, and seamless user experience. This technological foundation supports our mission to democratize access to patriotic digital collectibles.",
    date: "September 30, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/09/featured-image-1759237249.jpeg"
  },
  "3": {
    id: 3,
    title: "Unlocking the Power of Community Governance in NFT Projects",
    content: "NFT community governance, exemplified by National Anthem 250 on Solana, empowers participants to influence project decisions, ensuring transparency and fostering engagement. It offers historical NFTs, community involvement, and potential investment opportunities.\n\nThe NAT250 project is built on principles of community participation and transparent governance. Token holders will have the opportunity to participate in key decisions about the project's future, from artistic direction to partnership opportunities.\n\nThis democratic approach ensures that the project remains true to its patriotic roots while adapting to the evolving needs of our community. By giving stakeholders a voice, we're creating more than just a digital collectible—we're building a movement of Americans united in celebrating our heritage.",
    date: "September 29, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/09/featured-image-1759150842.jpeg"
  },
  "4": {
    id: 4,
    title: "The Rise of Patriotic NFTs: Merging History with Blockchain Technology",
    content: "NAT250 is revolutionizing NFTs by merging American heritage with blockchain technology. Celebrating the 250th anniversary of independence, it offers secure, unique collectibles on Solana, supporting artists and preserving history.\n\nThe patriotic NFT movement represents a new chapter in how Americans engage with their heritage. By combining the permanence of blockchain with the emotional resonance of national symbols, projects like NAT250 are creating lasting digital monuments to American culture.\n\nHannah Magnelli's performance of the National Anthem, preserved as an NFT, exemplifies this fusion of tradition and innovation. Each token represents not just ownership of a digital asset, but participation in a historic moment as we commemorate America's 250th year of independence.",
    date: "September 28, 2025",
    category: "NAT250 News",
    image: "https://anthem250th-ubpsy.wpcomstaging.com/wp-content/uploads/2025/09/featured-image-1759082427.jpeg"
  }
};

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPosts[postId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/blog">
              Back to Blog
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SocialMediaBar />
      <Header />
      
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" asChild data-testid="button-back-to-blog">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <div className="mb-8">
            <span className="inline-block px-4 py-1 bg-patriot-gold/10 text-patriot-gold text-sm font-bold rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <time>{post.date}</time>
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-2xl mb-8 bg-muted">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-patriot-blue/5 to-transparent">
            <div className="flex items-start gap-4">
              <ExternalLink className="h-6 w-6 text-patriot-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Read More on Anthem250.com</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Visit our official blog for the complete article and additional insights about the NAT250 project.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://anthem250.com/blog" target="_blank" rel="noopener noreferrer">
                    Visit Official Blog
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Articles
                </Link>
              </Button>
              <Button asChild data-testid="button-join-waitlist-article">
                <Link href="/#participate">
                  Join the Waitlist
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
