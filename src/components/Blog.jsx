import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Data-Driven Marketing: Strategies for TopNotch Growth",
      date: "October 8, 2025",
      author: "TopNotch Growth Team",
      excerpt: "Unlock the power of data to drive unparalleled growth. Learn how TopNotch Growth leverages analytics to craft winning marketing, lead generation, and outreach strategies.",
      imageUrl: "https://via.placeholder.com/600x400", // Placeholder image
      content: `
        <p>In today's competitive landscape, businesses are constantly seeking an edge. The answer often lies in one powerful asset: <strong>data</strong>. At TopNotch Growth, we don't just talk about data-driven marketing; we live and breathe it. Our approach transforms raw information into actionable insights, propelling our clients towards unprecedented success.</p>

        <h2>The Foundation: Understanding Your Data</h2>
        <p>Before any strategy can be implemented, a deep understanding of your existing data is crucial. This involves:</p>
        <ul>
          <li><strong>Audience Segmentation:</strong> Identifying distinct groups within your target market based on demographics, behavior, and psychographics.</li>
          <li><strong>Performance Metrics:</strong> Analyzing key performance indicators (KPIs) from past campaigns to understand what worked and what didn't.</li>
          <li><strong>Market Trends:</strong> Keeping a pulse on industry shifts and consumer behavior patterns to anticipate future opportunities.</li>
        </ul>

        <h2>Crafting Winning Strategies with Data</h2>
        <p>Once the data is understood, we move to strategy development. This is where TopNotch Growth truly shines. We use data to:</p>
        <ol>
          <li><strong>Optimize Lead Generation:</strong> By understanding where your most valuable leads come from and what their pain points are, we can refine targeting and messaging to attract higher-quality prospects.</li>
          <li><strong>Enhance Outreach Campaigns:</strong> Data informs the best channels, times, and content for reaching out to potential clients, ensuring your message resonates and gets a response.</li>
          <li><strong>Personalize Customer Journeys:</strong> Tailoring experiences based on individual data points significantly increases engagement and conversion rates.</li>
          <li><strong>Forecast and Adapt:</strong> Data allows us to predict future outcomes and quickly adapt strategies in real-time, ensuring continuous improvement and maximum ROI.</li>
        </ol>

        <h2>The TopNotch Growth Advantage</h2>
        <p>Our commitment to a data-first approach means:</p>
        <ul>
          <li><strong>Measurable Results:</strong> Every campaign is tracked, analyzed, and optimized for tangible outcomes.</li>
          <li><strong>Reduced Waste:</strong> By focusing on what truly works, we minimize expenditure on ineffective strategies.</li>
          <li><strong>Sustainable Growth:</strong> We build systems that are not only effective now but are also scalable and adaptable for future market changes.</p>
        </ul>

        <p>Ready to transform your business with data-driven marketing? <Link to="/contact" className="text-electric-green hover:underline">Contact TopNotch Growth today</Link> for a free strategy session and discover how we can turn your potential into performance.</p>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-light-bg pt-20">
      <section className="section-padding">
        <div className="container-width mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-deep-blue mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-text max-w-3xl mx-auto mb-12">
            Insights, strategies, and trends in data-driven marketing, lead generation, and business growth.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-width mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-text text-sm mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-text mb-6">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="text-electric-green font-semibold flex items-center hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Blog Post Page (example structure) */}
      {/* This would typically be a separate component/route, e.g., /blog/:id */}
      {/* For simplicity, we'll just show the content here if a post is selected, or navigate to a new route */}
    </div>
  );
};

export default Blog;
