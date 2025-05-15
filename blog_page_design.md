# Blog Page Design and Layout

## Overall Design Principles

- **Consistency:** The blog section will adhere to the established visual identity of NeverBeNeedy.com: masculine, rugged, sharp.
- **Color Palette:** Primary colors will be black, charcoal, and white. The accent color (blood red, e.g., `#C00000`, or battle-worn gold, e.g., `#B08D57` - let's assume blood red for now as per previous CSS) will be used for calls to action, important headings, and highlights.
- **Typography:** Strong serif (e.g., Merriweather) for main titles and impactful headings. Modern sans-serif (e.g., Montserrat) for body text, metadata, and UI elements.
- **Readability:** Emphasis on clear typography, good contrast, and ample spacing, especially for longer article content.

## 1. Blog Listing Page (`/blog`)

- **Header:** Consistent with existing site pages (Logo, Navigation: Home, About, Community, Blog).
- **Page Title:**
    - Text: "THE ARSENAL" or "FROM THE FRONT LINES"
    - Styling: Large, all-caps, strong serif font (Merriweather), centered or left-aligned, using the accent color or white. Positioned prominently at the top of the content area.
- **Layout of Post List:** Chronological, with the most recent posts first. Each post entry will be a distinct block, separated by a horizontal rule or clear spacing.
- **Individual Post Entry (in the list):
    - **Container:** Each post preview will be in a `bg-surface` (charcoal) container with subtle padding and rounded corners, or simply separated by a `border-b border-gray-700` for a sharper look.
    - **Title (H2):**
        - Text: Post Title
        - Styling: Strong serif font (Merriweather), accent color. Clickable, linking to the full post page.
        - Size: Prominent, e.g., `text-2xl` or `text-3xl`.
    - **Metadata:**
        - Content: "Published [Date] by [Author]"
        - Styling: Smaller sans-serif font (Montserrat), `text-secondary` (light gray), displayed below the title.
    - **Excerpt/Summary:**
        - Content: 2-4 sentences summarizing the post.
        - Styling: Sans-serif font (Montserrat), `text-primary` (white) or `text-gray-300`, good line height.
    - **"Read More" Link/Button:**
        - Text: "READ FULL ARTICLE" or "UNLEASH TRUTH →"
        - Styling: `btn-accent` style (accent color background, white text) or a bold accent color text link.
- **Spacing:** Generous vertical spacing between post entries.
- **Pagination (Future Consideration):** For initial implementation with few posts, simple "Older Posts" / "Newer Posts" links at the bottom would suffice if more than a page full. Full pagination can be added later.
- **Footer:** Consistent with existing site pages.

## 2. Individual Blog Post Page (`/blog/[slug]`)

- **Header:** Consistent with existing site pages.
- **Layout:** Single-column for the main content body to maximize focus and readability. The content area might have a max-width for optimal line length (e.g., `max-w-3xl` or `max-w-4xl` centered).
- **Post Title (H1):**
    - Text: Full Post Title
    - Styling: Very large, strong serif font (Merriweather), `text-primary` (white) or accent color. Typically left-aligned or centered above the content.
- **Metadata Section:**
    - Content: "Published [Date] by [Author]"
    - Styling: Sans-serif font (Montserrat), `text-secondary` (light gray), displayed clearly below the title or as a distinct byline.
- **Main Content Body (`prose` or custom styled):
    - **Typography:** Body text in modern sans-serif (Montserrat), `text-primary` (white) or a very light gray for excellent contrast on the dark background. Line height should be generous (e.g., `leading-relaxed`).
    - **Subheadings (H2, H3, H4):** Strong serif font (Merriweather), potentially using the accent color for H2s or a slightly lighter shade of white/gray than body text. Clear hierarchy.
    - **Paragraphs:** Well-spaced.
    - **Blockquotes:** Styled to stand out. Could use an accent color left border, slightly different background (e.g., a darker charcoal), and/or italicized serif font.
    - **Images:** Support for images within the content. Images should be responsive. Captions, if used, in a smaller italic sans-serif font, `text-secondary`.
    - **Links:** Standard link styling, perhaps underlined and in accent color.
- **Author Bio (Optional, Future):** A small section at the end of the post for an author bio if multiple authors contribute later.
- **Navigation (Post-to-Post):**
    - Optional: At the bottom of the post, links for "← Previous Post: [Title]" and "Next Post: [Title] →". Sans-serif, accent color links.
- **"Back to Blog" Link:**
    - Text: "← BACK TO THE ARSENAL" or "← ALL POSTS"
    - Styling: Prominent link, possibly using sans-serif font and accent color, placed above the title or at the very end of the post.
- **Footer:** Consistent with existing site pages.

This design aims to create a blog experience that is both thematically consistent with "Never Be Needy.com" and highly readable for the target audience.
