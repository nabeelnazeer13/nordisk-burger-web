
import React, { useEffect } from "react";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
}

// Simulated Instagram posts
const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    caption: "Simple ingredients, extraordinary flavor. #BurgersbyWesters #Nordic",
    likes: 142
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    caption: "We believe in letting quality speak for itself. #Minimalism",
    likes: 189
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    caption: "Inspired by Nordic simplicity and precision. #BurgerCraft",
    likes: 215
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    caption: "Locally sourced, carefully selected. #QualityFirst",
    likes: 167
  },
];

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, index * 100);
        }
      });
    }, observerOptions);
    
    const posts = document.querySelectorAll(".instagram-post");
    posts.forEach(post => {
      fadeObserver.observe(post);
    });

    return () => {
      posts.forEach(post => {
        fadeObserver.unobserve(post);
      });
    };
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10 fade-in-section">
          <h2 className="mb-4">Follow Our Journey</h2>
          <p>See what's happening at Burgers by Westers through our Instagram feed.</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-nordic-terracotta hover:text-nordic-terracotta/80 mt-2 gap-1">
            @burgersbywesters
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {instagramPosts.map((post, index) => (
            <a 
              key={post.id}
              href={`https://instagram.com/p/${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post group relative overflow-hidden rounded-lg aspect-square fade-in-section"
            >
              <img 
                src={post.imageUrl} 
                alt={post.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nordic-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                <p className="text-xs md:text-sm text-nordic-offwhite line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
