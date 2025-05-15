import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="hero-bg text-center py-16 md:py-24 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>Never Be Needy. Ever Again.</h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>Mental toughness. Emotional resilience. Financial independence. Let's rebuild America, one savage mind at a time.</p>
          <Link href="/community#quiz" legacyBehavior>
            <a className="btn-accent text-xl">Take the ‘Are You Needy?’ Quiz</a>
          </Link>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12" style={{ fontFamily: 'Georgia, serif' }}>Featured Content</h2>
        <div className="bg-charcoal p-6 md:p-8 rounded-lg shadow-lg">
          <p className="text-gray-300 mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            Dive into a raw, unfiltered stream of consciousness designed to shatter illusions and forge strength. Here you'll find a rotating selection of our latest video rants, potent "truth bombs," and concise essays. Each piece is a dose of unapologetic realism, blending hard-won life advice with the kind of straight talk that’s become a lost art. No sugar-coating, no safe spaces – just the unvarnished perspectives you need to navigate a world that too often rewards weakness. Prepare to be challenged, provoked, and ultimately, empowered. New content drops regularly, so check back often for your next intellectual sparring session.
          </p>
          {/* Carousel Placeholder - Simple Grid for now */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[{
              title: "The Entitlement Epidemic: Why Your Comfort Zone is Killing You",
              description: "A fiery takedown of modern coddling and a call to embrace discomfort as the crucible of growth. (30-second preview available).",
              type: "Video Rant"
            }, {
              title: "Truth Bomb: Nobody Cares, Work Harder.",
              description: "A blunt reminder that the world owes you nothing. Your success is your responsibility. Period.",
              type: "Truth Bomb"
            }, {
              title: "The Art of Savage Self-Reliance",
              description: "An exploration of what it truly means to be independent in thought, action, and spirit in an increasingly interdependent and often parasitic world.",
              type: "Short Essay"
            }].map((item, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded-md bg-black bg-opacity-50 hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gray-600 mb-3 rounded flex items-center justify-center text-gray-400 italic">Video/Image Placeholder</div>
                <h3 className="text-xl font-semibold mb-2 accent-color" style={{ fontFamily: 'Georgia, serif' }}>{item.title}</h3>
                <p className="text-sm text-gray-400 mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>{item.type}</p>
                <p className="text-gray-300 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400 italic" style={{ fontFamily: 'Arial, sans-serif' }}>Interactive carousel coming soon.</p>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="text-center py-12 md:py-16 bg-charcoal rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <Link href="/community#join" legacyBehavior>
            <a className="btn-accent text-2xl">Join the Movement</a>
          </Link>
          <p className="text-lg md:text-xl text-gray-300 mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>No pity. No panic. Just power.</p>
        </div>
      </section>
    </div>
  );
}

