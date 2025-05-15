# Blog Page Requirements

## 1. General Requirements

- **Purpose:** To host articles, essays, and "truth bombs" in a more structured format than the homepage carousel, allowing for deeper dives into topics related to mental toughness, financial independence, and emotional resilience.
- **Tone:** Consistent with the overall brand: smart, direct, a little provocative, humorous when needed. No fluff, no pandering.
- **Audience:** Same as the main site (50-75 year olds, plus younger folks seeking truth).
- **Design Consistency:** The blog section must visually integrate with the existing website design (masculine, rugged, sharp; black, charcoal, white with blood red or battle-worn gold accent; strong serif + modern sans fonts).

## 2. Blog Listing Page (`/blog`)

- **Layout:** A chronological list of blog posts, with the most recent post appearing first.
- **Display per Post:** Each post in the list should display:
    - **Title:** Prominent, strong serif font.
    - **Publication Date:** Clearly visible (e.g., "May 14, 2025").
    - **Author:** (Initially can be static, e.g., "NeverBeNeedy.com" or a persona name if desired later).
    - **Excerpt/Summary:** A short (2-3 sentences) engaging summary of the post content.
    - **Read More Link/Button:** A clear call to action to navigate to the full post.
- **Pagination:** If the number of posts grows, pagination will be required (e.g., "Older Posts" / "Newer Posts" links or page numbers). For the initial build with a few placeholders, this might not be immediately necessary but should be planned for.
- **No Sidebar Initially:** To maintain a clean, focused look, the initial blog listing page will not feature a sidebar. This can be added later if categories/tags or popular posts become a feature.

## 3. Individual Blog Post Page (`/blog/[slug]`)

- **Layout:** Single-column layout for optimal readability of the main content.
- **Content Display:**
    - **Title:** Large, prominent, strong serif font.
    - **Publication Date & Author:** Displayed clearly below the title or in a consistent metadata section.
    - **Main Content Body:** Well-formatted text, using paragraphs, subheadings (H2, H3) for structure. The existing prose style (no lists unless absolutely necessary) should be maintained.
    - **Imagery:** Ability to include images within the post content (relevant to the rugged, sharp brand style if possible, or conceptual placeholders).
- **Navigation:**
    - Clear link back to the main blog listing page.
    - Optional: "Previous Post" / "Next Post" navigation links at the bottom of the post.
- **No Comments Section Initially:** To keep it simple and align with the direct, no-nonsense tone, a comments section will not be included in the initial build. This can be considered as a future enhancement.
- **Social Sharing:** Placeholder for social sharing buttons (can be implemented later).

## 4. Content Management (Initial Approach)

- **Source:** For the initial build, blog posts will be managed as Markdown files within the project structure (e.g., in a `/content/posts` directory).
- **Metadata in Markdown:** Each Markdown file will use frontmatter to define metadata like title, date, author, slug, and excerpt.

## 5. Technical Considerations

- **SEO:** Basic SEO considerations for blog posts (meta titles, descriptions derived from post content).
- **Responsiveness:** Both listing and individual post pages must be fully responsive and display well on desktop, tablet, and mobile devices.

This document outlines the core requirements for the initial blog page implementation. Further enhancements like categories, tags, search functionality, and advanced author profiles can be considered in subsequent phases.
