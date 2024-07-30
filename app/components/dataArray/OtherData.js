const OtherData = [
    {
        "id": "6",
        "title": "The Birth of Next.js",
        "subtitle": "Introduction to the framework",
        "description": "Next.js was created by Vercel (formerly ZEIT) and officially released in October 2016, aiming to simplify the process of building React applications with server-side rendering.",
        "category": "History and Evolution"
    },
    {
        "id": "7",
        "title": "Version 9: Introduction of API Routes",
        "subtitle": "Enhancing backend capabilities",
        "description": "In August 2019, Next.js 9 introduced API Routes, allowing developers to create backend endpoints directly in the Next.js project without needing a separate server.",
        "category": "History and Evolution"
    },
    {
        "id": "8",
        "title": "Version 10: Image Optimization and Internationalized Routing",
        "subtitle": "New features and global reach",
        "description": "Next.js 10, released in October 2020, introduced built-in image optimization with the Image component and support for internationalized routing for multilingual applications.",
        "category": "History and Evolution"
    },
    {
        "id": "9",
        "title": "Version 11: Performance Improvements and New Middleware",
        "subtitle": "Enhancing performance and flexibility",
        "description": "Next.js 11, released in June 2021, focused on performance improvements, including faster refresh times and the introduction of middleware for custom logic in requests.",
        "category": "History and Evolution"
    },
    {
        "id": "10",
        "title": "Version 12: Edge Functions and React 18 Support",
        "subtitle": "Advanced features and modern React",
        "description": "Next.js 12, released in October 2021, introduced Edge Functions for running code at the edge of the network and added support for React 18 features like concurrent rendering.",
        "category": "History and Evolution"
    },
    {
        "id": "11",
        "title": "E-commerce Website",
        "subtitle": "Building a performant online store",
        "description": "Use Next.js with SSR or SSG to build a fast and SEO-friendly e-commerce website, leveraging its capabilities for dynamic product pages and optimized loading.",
        "category": "Different Scenarios"
    },
    {
        "id": "12",
        "title": "Blog with Incremental Static Regeneration",
        "subtitle": "Efficiently update blog content",
        "description": "Build a blog using Next.js with ISR to update individual blog posts without redeploying the entire site, allowing for fresh content and improved performance.",
        "category": "Different Scenarios"
    },
    {
        "id": "13",
        "title": "Corporate Dashboard",
        "subtitle": "Create a responsive and interactive dashboard",
        "description": "Develop a corporate dashboard with Next.js, utilizing SSR for secure and fast server-side rendering of sensitive data and real-time updates.",
        "category": "Different Scenarios"
    },
    {
        "id": "14",
        "title": "Documentation Site",
        "subtitle": "Efficiently manage and serve documentation",
        "description": "Create a documentation site with Next.js using SSG for fast load times and a consistent user experience, enabling easy navigation and updates.",
        "category": "Different Scenarios"
    },
    {
        "id": "15",
        "title": "Social Media Platform",
        "subtitle": "Handle user-generated content and interactions",
        "description": "Build a social media platform with Next.js by leveraging SSR for dynamic user-generated content and API Routes for handling user interactions and data.",
        "category": "Different Scenarios"
    },
    {
        "id": "16",
        "title": "Single Page Application (SPA)",
        "subtitle": "Leverage client-side rendering",
        "description": "Utilize Next.js for a Single Page Application by using client-side rendering, optimizing user experience with dynamic imports and client-side routing.",
        "category": "Advanced Use Cases"
    },
    {
        "id": "17",
        "title": "Hybrid Application",
        "subtitle": "Combine SSR, SSG, and CSR",
        "description": "Create a hybrid application with Next.js that uses SSR for critical pages, SSG for static content, and CSR for interactive components, optimizing performance and user experience.",
        "category": "Advanced Use Cases"
    },
    {
        "id": "18",
        "title": "Multitenant Application",
        "subtitle": "Serve multiple user contexts",
        "description": "Build a multitenant application with Next.js by using dynamic routing and API Routes to handle multiple user contexts and provide a tailored experience for each tenant.",
        "category": "Advanced Use Cases"
    },
    {
        "id": "19",
        "title": "Progressive Web App (PWA)",
        "subtitle": "Enhance user experience with offline capabilities",
        "description": "Transform your Next.js app into a Progressive Web App by implementing service workers and offline support, improving performance and user experience on mobile devices.",
        "category": "Advanced Use Cases"
    },
    {
        "id": "20",
        "title": "Microservices Architecture",
        "subtitle": "Integrate with microservices",
        "description": "Develop a Next.js application that integrates with a microservices architecture, using API Routes to interact with various microservices and manage data flow.",
        "category": "Advanced Use Cases"
    },
    {
        "id": "1",
        "title": "Server-side Rendering (SSR) and Static Site Generation (SSG)",
        "subtitle": "Improve SEO and performance",
        "description": "Server-side Rendering (SSR) generates HTML on each request, while Static Site Generation (SSG) builds pages at build time. Both methods enhance SEO and performance.",
        "category": "Core Concepts"
    },
    {
        "id": "2",
        "title": "Incremental Static Regeneration (ISR)",
        "subtitle": "Update static content without rebuilding",
        "description": "ISR allows you to update static pages after the site has been built and deployed. This method provides a way to regenerate static content on-demand.",
        "category": "Core Concepts"
    },
    {
        "id": "3",
        "title": "API Routes",
        "subtitle": "Create backend functionality within your app",
        "description": "API Routes enable you to build API endpoints within your Next.js application, allowing you to handle backend logic and serve data from your server.",
        "category": "Core Concepts"
    },
    {
        "id": "4",
        "title": "Dynamic Routing",
        "subtitle": "Create dynamic URLs for your pages",
        "description": "Dynamic Routing lets you create pages with dynamic paths by using file names with brackets, enabling personalized and variable content.",
        "category": "Core Concepts"
    },
    {
        "id": "5",
        "title": "Static and Dynamic Imports",
        "subtitle": "Optimize loading and performance",
        "description": "Static imports are resolved at build time, while dynamic imports are resolved at runtime, allowing you to load components and libraries only when needed.",
        "category": "Core Concepts"
    },
]

export default OtherData;