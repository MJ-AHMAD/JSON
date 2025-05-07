"use client"

import { useState } from "react"
import { JsonViewer } from "@/components/json-viewer"
import { JsonEditor } from "@/components/json-editor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Combined JSON data with both Yunus Inspire and TRUSTED-ALLY
const jsonData = {
  "Yunus Inspire": {
    project_overview: {
      about: {
        name: "Yunus Inspire",
        type: "Educational and Non-Profit Initiative",
        inspiration: "Inspired by the legacy of Nobel Laureate Professor Muhammad Yunus",
        objective:
          "To empower Bangladeshi students by providing free access to quality educational resources in technology, programming, and innovation",
      },
      core_objectives: [
        "Ensure access to affordable, quality education for all students in Bangladesh",
        "Foster technological fluency and innovation among Bangladeshi youth",
        "Build a community of learners through forums, coding challenges, and mentorship programs",
        "Promote sustainability and inclusion in education and technological growth",
      ],
      key_features: {
        free_courses: "Interactive courses in HTML, CSS, Python, GitHub, and Data Science",
        learning_resources: ["Interactive Code Editors", "Downloadable Study Guides", "Video Tutorials"],
        community_support: "Forums, Discussion Boards, and Mentorship Programs",
        framework: "Transparent and Ethical Practices",
      },
      vision_and_mission: {
        mission:
          "To inspire and enable Bangladeshi students through free, accessible resources in technology, ensuring every learner can unlock their potential and contribute meaningfully to a prosperous and equitable society.",
        vision:
          "To create a generation of confident, skilled, and ethical leaders who will drive innovation, unity, and sustainable development in Bangladesh.",
      },
      why_it_matters: {
        problem:
          "Many Bangladeshi students lack the resources and guidance needed to thrive in technology-driven fields",
        solution: [
          "Providing an inclusive learning platform for all students",
          "Establishing a foundation for leadership and innovation",
          "Building a collaborative and supportive community",
        ],
      },
      expected_impact: [
        "Educate thousands of students nationwide",
        "Develop technical and leadership skills among the youth",
        "Create a network of innovators contributing to sustainable progress",
      ],
      message: {
        closing_statement:
          "Yunus Inspire is a transparent and trustworthy platform built to empower Bangladeshi youth through education, innovation, and community engagement. Every student can expect a brighter future, and collaborators will feel pride in contributing to this noble cause.",
      },
    },
    project_structure: {
      src: {
        assets: {
          images: "Stores all project-related images",
          styles: "Contains global CSS/SCSS files for styling",
        },
        components: {
          shared: {
            "Header.tsx": "Reusable Header Component",
            "Footer.tsx": "Reusable Footer Component",
          },
          Courses: {
            "CourseCard.tsx": "Component for displaying individual course details",
            "CoursesList.tsx": "Component for listing all available courses",
          },
          Community: {
            "Forum.tsx": "Component for community forums",
            "Events.tsx": "Component for community events",
          },
          Contact: {
            "ContactForm.tsx": "Component for the contact form",
          },
          Resources: {
            "CodeEditor.tsx": "Interactive code editor component",
            "Tutorials.tsx": "Component for displaying tutorials",
          },
        },
        pages: {
          Home: {
            "page.tsx": "Component for the Home Page",
          },
          About: {
            "page.tsx": "Component for the About Us Page",
          },
          Courses: {
            "page.tsx": "Component for the Courses Page",
          },
          Resources: {
            "page.tsx": "Component for the Resources Page",
          },
          Community: {
            "page.tsx": "Component for the Community Page",
          },
          Contact: {
            "page.tsx": "Component for the Contact Us Page",
          },
        },
        utils: {
          "api.ts": "Utility functions for API integration",
        },
        "App.tsx": "Main application component",
        "index.tsx": "Application entry point",
      },
      public: {
        "index.html": "Main HTML template for the project",
        "favicon.ico": "Favicon for the project",
      },
      tests: {
        components: {
          "Header.test.ts": "Unit test for the Header Component",
          "Footer.test.ts": "Unit test for the Footer Component",
          "Courses.test.ts": "Unit test for the Courses Page",
        },
        utils: {
          "api.test.ts": "Unit test for API utility functions",
        },
      },
      server: {
        controllers: {
          "coursesController.ts": "Handles backend logic for courses",
          "userController.ts": "Handles backend logic for users",
        },
        models: {
          "courseModel.ts": "Schema for courses data",
          "userModel.ts": "Schema for user data",
        },
        routes: {
          "coursesRoutes.ts": "Defines API routes for courses",
          "userRoutes.ts": "Defines API routes for users",
        },
        db: {
          "connect.ts": "Database connection configuration",
        },
        "server.ts": "Main server file",
        "config.ts": "Configuration settings for the server",
      },
      "package.json": "Defines project dependencies and scripts",
      "README.md": "Documentation for the project",
      ".gitignore": "Specifies files to be ignored by Git",
      ".env": "Environment variables configuration",
    },
    website_structure: {
      landing_page: {
        header_section: {
          logo: "Insert your logo here",
          navigation_menu: ["Home", "About Us", "Courses", "Resources", "Community", "Contact Us"],
        },
        hero_section: {
          banner_text: "Empowering the minds of Bangladesh, one dream at a time",
          cta_button: "Get Started for Free",
          background_image: "Add a symbolic image of Bangladesh's digital progress (your screenshot here)",
        },
        highlights_section: {
          cards: ["Free Quality Education", "Interactive Learning Tools", "Community Support"],
        },
        footer_section: {
          social_media_links: ["LinkedIn", "Facebook", "YouTube"],
          copyright_notice: "© 2025 Yunus Inspire. All Rights Reserved.",
        },
      },
      about_us_page: {
        vision_and_mission: {
          mission: "To empower Bangladeshi students with knowledge, technology, and innovation.",
          vision: "To inspire a generation of leaders and innovators for a brighter Bangladesh.",
        },
        values_section: ["Empowerment", "Integrity", "Collaboration", "Sustainability", "Innovation"],
        inspirational_segment: {
          image_and_quote: "Insert an image and quote of Dr. Muhammad Yunus",
        },
      },
      courses_page: {
        overview: "Choose from our range of courses to kickstart your learning journey!",
        available_courses: [
          {
            course_name: "HTML Basics",
            description: "Learn the fundamentals of web development.",
          },
          {
            course_name: "Python for Beginners",
            description: "Unlock the power of programming.",
          },
          {
            course_name: "GitHub Essentials",
            description: "Collaborate and manage code effectively.",
          },
          {
            course_name: "Data Science Intro",
            description: "Analyze data for actionable insights.",
          },
        ],
        cta: "Each course card will have an 'Enroll Now' button.",
      },
      resources_page: {
        interactive_code_editor: "A space for online practice",
        video_tutorials_section: "Add links to your video tutorials",
        downloadable_pdfs: "Include course guides in PDF format",
        faq_section: "Provide answers to frequently asked questions",
      },
      community_page: {
        discussion_board: "Forum for students to ask questions and interact",
        events: "Announce upcoming events and challenges",
        success_stories: "Highlight student experiences with images and text",
      },
      contact_us_page: {
        form_fields: ["Name", "Email", "Message"],
        support_info: {
          email: "Your email address here",
          phone: "Your phone number here",
          additional_info: "Other contact methods",
        },
      },
      design_guidelines: {
        color_palette: {
          primary_colors: "Blue, White",
          secondary_highlights: "Light Green",
        },
        typography: "Poppins, Open Sans",
        accessibility: "Use contrasting colors and large text for better usability",
      },
      hosting_and_tools: {
        frontend: "React.js with Tailwind CSS or Bootstrap Styling",
        backend: "Node.js with Express.js",
        database: "MongoDB or PostgreSQL",
        hosting_platforms: ["Vercel", "Azure DevOps"],
      },
      missing_elements_instructions: {
        pictures_to_add: [
          "Inspirational image of Dr. Muhammad Yunus for About Us page",
          "Course-specific banner images for Courses page",
        ],
        links_to_include: [
          "Social Media Links: LinkedIn, Facebook, YouTube (Footer Section)",
          "Video Tutorial Links",
          "Downloadable PDF Links",
        ],
      },
      message_of_transparency_and_purpose: {
        core_values: {
          transparency: "Publish all feature details and expense breakdowns",
          inclusivity: "Create an open platform for all students",
          sustainability: "Work with ethical and long-term goals",
        },
        closing_statement:
          "Every student can expect a brighter future here, and collaborators can feel a sense of pride in this endeavor.",
      },
    },
    landing_page: {
      about_md_jafor_ahmad: {
        introduction: {
          content:
            "Md Jafor Ahmad, widely known as MJ Ahmad, is a visionary leader, social worker, and dedicated citizen of Bangladesh. Driven by a profound belief in the transformative potential of education, technology, and inclusivity, Md Jafor Ahmad has devoted his life to inspiring change and empowering the next generation. His projects, such as Trusted Ally and Yunus Inspire, are true reflections of his commitment to building a brighter and fairer Bangladesh.",
          quote:
            "Through steadfast dedication, ethical values, and innovative approaches, Md Jafor Ahmad seeks to create meaningful opportunities and inspire a future full of possibilities.",
        },
        biography: {
          full_name: "Md Jafor Ahmad",
          nickname: "MJ Ahmad",
          date_of_birth: "November 10, 1989",
          nationality: "Bangladeshi",
          nid: "3734108768",
          tin_certificate: "425092691933",
          passport_number: "A02019678",
          summary:
            "Md Jafor Ahmad stands as a symbol of dedication and transparency, maintaining the highest ethical standards throughout his life. He remains committed to becoming a trusted ally for communities, enabling impactful change through education and social empowerment.",
        },
        achievements_and_contributions: [
          {
            title: "Social Service Initiatives",
            description:
              "Since 2014, Md Jafor Ahmad has actively organized and led impactful social service projects, focusing on community development, education, and sustainability. His presence on platforms like Facebook highlights his unwavering commitment to empowering communities.",
            profiles: {
              first_profile: "https://facebook.com/mdjaforahmad10.11.1989",
              current_profile: "https://facebook.com/mj.ahmad.768732",
            },
          },
          {
            title: "Trusted Ally",
            description:
              "As the founder of Trusted Ally, Md Jafor Ahmad continues to create bridges between resources and communities, focusing on education and long-term development.",
            links: {
              website: "https://tallybd.vercel.app",
              linkedin: "https://linkedin.com/company/tallybd",
            },
          },
          {
            title: "Yunus Inspire Project",
            description:
              "With inspiration from Professor Muhammad Yunus, Md Jafor Ahmad initiated Yunus Inspire, a project aimed at empowering Bangladeshi youth through education, technology, and ethical practices, paving the way for sustainable progress.",
          },
        ],
        professional_profiles: {
          linkedin: "https://linkedin.com/in/jafor-ahmad",
          github: "https://github.com/MJ-AHMAD",
          microsoft_learning_username: "MJAHMAD-5742",
        },
        key_skills: [
          "Strategic Leadership and Management",
          "Social Advocacy and Community Engagement",
          "Transparent and Ethical Decision-Making",
          "Technical and Creative Problem-Solving",
          "Innovation and Collaboration",
        ],
        contact_information: {
          email: "mjahmad2024@outlook.com",
          phone: "+8801336221217",
        },
        verified_accounts: {
          screenshots: [
            "IJM Volunteer Dashboard",
            "PayPal Developer Dashboard",
            "Microsoft Developer Community",
            "Microsoft Tech Community",
          ],
        },
        message_to_students_and_supporters: {
          content:
            "Yunus Inspire is the manifestation of my dream to empower youth through knowledge, unity, and innovation. I believe that education is the cornerstone of progress, and together we can build a brighter future for Bangladesh. I welcome every student and supporter to join this journey of transformation.",
        },
        why_choose_md_jafor_ahmad: {
          content:
            "Md Jafor Ahmad embodies trust, dedication, and innovation. His passion for community empowerment, coupled with his commitment to ethical and transparent practices, makes him a leader who inspires and paves the way for meaningful change.",
        },
        instructions_for_adding_final_elements: {
          profile_photos: "Add images reflecting Md Jafor Ahmad's contributions and personal journey.",
          verification_proof: "Attach screenshots for verified accounts in the specified section.",
          social_media_links: "Connect LinkedIn, GitHub, and other relevant profiles directly.",
        },
      },
      mission: {
        project: {
          name: "Yunus Inspire",
          slogan: "Empowering the minds of Bangladesh, one dream at a time",
          mission:
            "To inspire and enable Bangladeshi students by providing free, accessible, and innovative resources in technology and programming, ensuring every learner has the tools to unlock their potential and contribute meaningfully to a prosperous and equitable society.",
          vision:
            "To establish a generation of confident, skilled, and ethical leaders who will drive innovation, unity, and sustainable progress, building a brighter future for Bangladesh while honoring the enduring legacy of Nobel Laureate Professor Muhammad Yunus.",
          key_values: {
            empowerment: "Students are empowered with knowledge, tools, and mentorship.",
            equality: "Ensuring equal access for all, irrespective of socio-economic background.",
            collaboration: "Encouraging teamwork and a shared vision for growth.",
            sustainability: "Promoting responsible and sustainable technological practices.",
            innovation: "Fostering creativity and problem-solving through modern technology.",
            inspiration: "Guided by the values and spirit of Professor Yunus to shape a better society.",
            integrity: "Upholding honesty, respect, and social responsibility.",
          },
        },
      },
      project_plan: {
        phase_1: {
          title: "Initial Planning and Strategy",
          objectives_finalization: [
            "Determine the project's goals, purpose, and primary content",
            "Plan strategies to attract students",
            "Technological decisions: React.js (Frontend), Node.js (Backend), Hosting with Vercel",
          ],
          team_formation: [
            "Recruit one Frontend Developer",
            "Recruit one Backend Developer",
            "Recruit one UI/UX Designer",
            "Recruit one Project Manager",
            "Recruit one Content Creator",
          ],
          timeline_setup: "Aim to complete the project within 3 months",
        },
        phase_2: {
          title: "Website Development",
          frontend_development: [
            "Develop Landing Page",
            "Develop Courses Page",
            "Develop Community Section",
            "Develop Contact Page",
          ],
          backend_development: ["Setup Database", "Implement Authentication (JWT/OAuth)", "Build RESTful APIs"],
          integration: "Establish proper connection between Frontend and Backend",
          testing: ["Conduct Beta Testing", "Fix Bugs"],
        },
        phase_3: {
          title: "Content Development",
          course_creation: ["Create simple and small courses on HTML, CSS, Python, and GitHub"],
          practice_tasks: ["Add beginner-level tasks for student practice"],
          resources: ["Setup Interactive Code Editor", "Provide Downloadable PDF Guides", "Create Video Tutorials"],
        },
        phase_4: {
          title: "Community Building",
          social_media_setup: ["Create LinkedIn and Facebook pages", "Add logo and cover images"],
          engagement_activities: ["Organize coding challenges", "Host mentorship programs"],
          forum_creation: "Develop Q&A platform for students",
        },
        phase_5: {
          title: "Launch and Promotion",
          website_hosting: "Host the website on Vercel",
          launch_event: ["Organize launch event on social media and community platforms"],
          marketing_campaign: ["Run promotions and media coverage targeting students"],
        },
        budget_proposal: {
          estimated_budget_breakdown: [
            {
              category: "Website Development",
              cost: "$5,000",
              details: "Frontend, Backend, Integration, Hosting",
            },
            {
              category: "Content Creation",
              cost: "$2,000",
              details: "Course material, Video Tutorials, Resources",
            },
            {
              category: "Team Salaries",
              cost: "$10,000",
              details: "Developers, Designers, Project Manager",
            },
            {
              category: "Marketing",
              cost: "$3,000",
              details: "Social Media Ads, Community Promotion",
            },
            {
              category: "Hosting and Tools",
              cost: "$1,000",
              details: "Vercel Hosting, Azure DevOps, Domain Costs",
            },
            {
              category: "Miscellaneous Costs",
              cost: "$1,000",
              details: "Unexpected expenses and small adjustments",
            },
          ],
          total_estimated_budget: "$22,000",
        },
      },
    },
  },
  "TRUSTED-ALLY": {
    projectName: "TRUSTED-ALLY Website",
    description:
      "A comprehensive website for TRUSTED-ALLY organization dedicated to education, social initiatives, and environmental development",
    structure: {
      app: {
        "layout.tsx": "Root layout component with metadata and global styles",
        "globals.css": "Global CSS styles and animations",
        "page.tsx": "Homepage of the website",
        api: {
          "submit-volunteer": {
            "route.ts": "API route for volunteer form submissions",
          },
          newsletter: {
            "route.ts": "API route for newsletter subscriptions",
          },
          "schedule-consultation": {
            "route.ts": "API route for scheduling consultations",
          },
          "submit-donation": {
            "route.ts": "API route for processing donations",
          },
          "submit-membership": {
            "route.ts": "API route for membership applications",
          },
          "core-team-auth": {
            "route.ts": "API route for core team authentication",
          },
          "get-user-ids": {
            "route.ts": "API route for retrieving user IDs",
          },
        },
        invest: {
          "page.tsx": "Investment opportunities page",
          opportunities: {
            "page.tsx": "Detailed investment opportunities page",
          },
          "export-opportunities": {
            "page.tsx": "Export investment opportunities page",
          },
        },
        "schedule-consultation": {
          "page.tsx": "Page for scheduling consultations",
        },
        "education-program": {
          "page.tsx": "Main education program page",
          "get-involved": {
            "page.tsx": "Page for getting involved in education programs",
          },
          "free-learning": {
            "page.tsx": "Free learning resources page",
            register: {
              "page.tsx": "Registration page for free learning",
            },
          },
          projects: {
            "page.tsx": "Education projects overview page",
          },
          mentorship: {
            "page.tsx": "Mentorship program page",
          },
          "developer-program": {
            "page.tsx": "Developer program details page",
          },
          "student-dashboard": {
            "page.tsx": "Dashboard for enrolled students",
          },
          courses: {
            "web-development": {
              "page.tsx": "Web development course page",
              register: {
                "page.tsx": "Registration for web development course",
              },
            },
            "programming-languages": {
              "page.tsx": "Programming languages course page",
            },
            "powershell-automation": {
              "page.tsx": "PowerShell automation course page",
              register: {
                "page.tsx": "Registration for PowerShell course",
              },
            },
            "api-development": {
              "page.tsx": "API development course page",
              register: {
                "page.tsx": "Registration for API development course",
              },
            },
            "version-control": {
              "page.tsx": "Version control course page",
              register: {
                "page.tsx": "Registration for version control course",
              },
            },
            "operating-systems": {
              "page.tsx": "Operating systems course page",
              register: {
                "page.tsx": "Registration for operating systems course",
              },
            },
            "cloud-computing": {
              "page.tsx": "Cloud computing course page",
              register: {
                "page.tsx": "Registration for cloud computing course",
              },
            },
            "mobile-development": {
              "page.tsx": "Mobile development course page",
              register: {
                "page.tsx": "Registration for mobile development course",
              },
            },
            "database-management": {
              "page.tsx": "Database management course page",
              register: {
                "page.tsx": "Registration for database management course",
              },
            },
          },
        },
        "education-program-c": {
          "page.tsx": "Alternative education program page",
          "free-learning": {
            "page.tsx": "Free learning resources page",
            register: {
              "page.tsx": "Registration page for free learning",
            },
          },
          projects: {
            "page.tsx": "Projects overview page",
            methodology: {
              "page.tsx": "Project methodology page",
            },
            showcase: {
              "page.tsx": "Project showcase page",
              "sustainable-marketplace": {
                "page.tsx": "Sustainable marketplace project page",
              },
              mediconnect: {
                "page.tsx": "MediConnect project page",
              },
            },
            web: {
              "page.tsx": "Web projects page",
              ecommerce: {
                "page.tsx": "E-commerce project page",
              },
              cms: {
                "page.tsx": "CMS project page",
              },
              dashboard: {
                "page.tsx": "Dashboard project page",
              },
            },
            microsoft: {
              "page.tsx": "Microsoft projects page",
              "azure-migration": {
                "page.tsx": "Azure migration project page",
              },
              "m365-integration": {
                "page.tsx": "M365 integration project page",
              },
              "powershell-suite": {
                "page.tsx": "PowerShell suite project page",
              },
            },
            mobile: {
              "page.tsx": "Mobile projects page",
              "fitness-app": {
                "page.tsx": "Fitness app project page",
              },
              "food-delivery": {
                "page.tsx": "Food delivery app project page",
              },
              "language-app": {
                "page.tsx": "Language learning app project page",
              },
            },
          },
          mentorship: {
            "page.tsx": "Mentorship program page",
          },
          courses: {
            "web-development": {
              "page.tsx": "Web development course page",
              register: {
                "page.tsx": "Registration for web development course",
              },
            },
            "programming-languages": {
              "page.tsx": "Programming languages course page",
              register: {
                "page.tsx": "Registration for programming languages course",
              },
            },
            "powershell-automation": {
              "page.tsx": "PowerShell automation course page",
              register: {
                "page.tsx": "Registration for PowerShell course",
              },
            },
            "api-development": {
              "page.tsx": "API development course page",
              register: {
                "page.tsx": "Registration for API development course",
              },
            },
            "version-control": {
              "page.tsx": "Version control course page",
              register: {
                "page.tsx": "Registration for version control course",
                "someModule.tsx": "Additional module for version control course",
              },
            },
            "operating-systems": {
              "page.tsx": "Operating systems course page",
              register: {
                "page.tsx": "Registration for operating systems course",
              },
            },
            "cloud-computing": {
              "page.tsx": "Cloud computing course page",
              register: {
                "page.tsx": "Registration for cloud computing course",
              },
            },
            "mobile-development": {
              "page.tsx": "Mobile development course page",
              register: {
                "page.tsx": "Registration for mobile development course",
              },
            },
            "database-management": {
              "page.tsx": "Database management course page",
              register: {
                "page.tsx": "Registration for database management course",
              },
            },
          },
        },
        "social-initiatives": {
          "page.tsx": "Social initiatives overview page",
          "support-our-initiatives": {
            "page.tsx": "Page for supporting social initiatives",
          },
        },
        "environmental-development": {
          "page.tsx": "Environmental development overview page",
          "join-our-eco-efforts": {
            "page.tsx": "Page for joining eco-efforts",
          },
        },
        "news-and-media": {
          "page.tsx": "News and media page",
        },
        contact: {
          "page.tsx": "Contact page with form and information",
        },
        "privacy-policy": {
          "page.tsx": "Privacy policy page",
        },
        "terms-of-service": {
          "page.tsx": "Terms of service page",
        },
        faq: {
          "page.tsx": "Frequently asked questions page",
        },
        sitemap: {
          "page.tsx": "Sitemap page",
        },
        admin: {
          "page.tsx": "Admin dashboard page",
          login: {
            "page.tsx": "Admin login page",
          },
          management: {
            "page.tsx": "Management dashboard page",
            board: {
              "page.tsx": "Board management page",
            },
            team: {
              "page.tsx": "Team management page",
            },
          },
          "core-team": {
            login: {
              "page.tsx": "Core team login page",
            },
            dashboard: {
              "page.tsx": "Core team dashboard page",
            },
            profile: {
              "[id]": {
                "page.tsx": "Dynamic profile page for core team members",
              },
            },
            "pa-mcb001": {
              "page.tsx": "Specific core team member page",
            },
          },
          "activity-areas": {
            "loading.tsx": "Loading component for activity areas",
            "page.tsx": "Activity areas overview page",
            "[division]": {
              "page.tsx": "Dynamic division page",
              "[district]": {
                "page.tsx": "Dynamic district page",
              },
            },
            chittagong: {
              "page.tsx": "Chittagong division page",
              "coxs-bazar": {
                "page.tsx": "Cox's Bazar district page",
              },
            },
          },
        },
        "al-quran-journey": {
          "page.tsx": "Al-Quran Journey main page",
          "modern-science": {
            "page.tsx": "Modern science in Quran page",
          },
          "research-methodologies": {
            "page.tsx": "Research methodologies page",
          },
          "printing-distribution": {
            "page.tsx": "Printing and distribution page",
          },
          "global-network": {
            "page.tsx": "Global network page",
          },
          campus: {
            "page.tsx": "Campus page",
          },
          courses: {
            "page.tsx": "Quran courses page",
          },
          "printing-project": {
            "page.tsx": "Printing project page",
            volunteer: {
              "page.tsx": "Volunteer for printing project page",
            },
          },
          "research-tools": {
            "concept-mapping": {
              "ConceptMappingToolClientPage.tsx": "Client component for concept mapping tool",
              "page.tsx": "Concept mapping tool page",
            },
          },
          "printing-press-project": {
            "page.tsx": "Printing press project page",
            sponsor: {
              "page.tsx": "Sponsor overview page",
              founding: {
                "page.tsx": "Founding sponsor page",
              },
              major: {
                "page.tsx": "Major sponsor page",
              },
              supporting: {
                "page.tsx": "Supporting sponsor page",
              },
            },
            contact: {
              "page.tsx": "Contact page for printing press project",
            },
            "equipment-sponsorship": {
              "page.tsx": "Equipment sponsorship page",
            },
          },
          "permanent-campus": {
            "page.tsx": "Permanent campus page",
            sponsor: {
              "page.tsx": "Sponsor overview page",
              "campus-founder": {
                "page.tsx": "Campus founder sponsorship page",
              },
              building: {
                "page.tsx": "Building sponsorship page",
              },
              facility: {
                "page.tsx": "Facility sponsorship page",
              },
            },
            "building-sponsorship": {
              "page.tsx": "Building sponsorship details page",
            },
          },
          "printing-report": {
            "page.tsx": "Printing report page",
            donate: {
              "page.tsx": "Donation page for printing project",
              "loading.tsx": "Loading component for donation page",
            },
          },
        },
        "programs-overview": {
          "page.tsx": "Programs overview page",
        },
        "about-us": {
          "page.tsx": "About us page",
        },
        impact: {
          "page.tsx": "Impact page",
        },
        "get-involved": {
          "page.tsx": "Get involved page",
        },
        volunteer: {
          "page.tsx": "Volunteer main page",
          apply: {
            "page.tsx": "Volunteer application page",
          },
          landing: {
            "page.tsx": "Volunteer landing page",
          },
        },
        donate: {
          "page.tsx": "Donation main page",
          checkout: {
            "page.tsx": "Donation checkout page",
          },
          "thank-you": {
            "page.tsx": "Thank you page after donation",
          },
        },
        "transparency-policy": {
          "page.tsx": "Transparency policy page",
        },
        "transparency-portal": {
          "page.tsx": "Transparency portal page",
        },
        "workplace-policy": {
          "page.tsx": "Workplace policy page",
        },
      },
      components: {
        "scroll-button.tsx": "Reusable scroll button component",
        "schedule-form.tsx": "Form component for scheduling consultations",
        "password-policy-notice.tsx": "Password policy notice component",
        "core-team-auth-check.tsx": "Authentication check component for core team",
        "fallback-image.tsx": "Fallback image component",
        "simple-footer.tsx": "Simple footer component",
      },
      data: {
        "core-team-credentials.json": "Credentials data for core team members",
      },
      public: {
        images: {
          "cox1.svg": "SVG image for Cox's Bazar 1",
          "cox2.svg": "SVG image for Cox's Bazar 2",
        },
        img: {
          "cox1.svg": "SVG image for Cox's Bazar 1 (duplicate)",
          "cox2.svg": "SVG image for Cox's Bazar 2 (duplicate)",
        },
      },
      "tailwind.config.js": "Tailwind CSS configuration",
      "README.md": "Project documentation",
      "workplace-policy.md": "Workplace policy documentation",
    },
    mainFeatures: [
      "Education programs and courses",
      "Social initiatives",
      "Environmental development projects",
      "Al-Quran Journey program",
      "Volunteer opportunities",
      "Donation system",
      "Investment opportunities",
      "Consultation scheduling",
      "Admin dashboard",
      "Core team management",
    ],
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Server-side rendering"],
      styling: ["Tailwind CSS", "CSS animations", "Responsive design"],
    },
  },
}

export default function Home() {
  const [data, setData] = useState(jsonData)

  const handleUpdateJson = (newData) => {
    setData(newData)
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">JSON Project</h1>

      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Project JSON Data</CardTitle>
          <CardDescription>View, edit, and validate JSON data in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="view">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="view">View</TabsTrigger>
              <TabsTrigger value="edit">Edit</TabsTrigger>
            </TabsList>

            <TabsContent value="view" className="p-4 border rounded-md bg-muted/30">
              <JsonViewer data={data} />
            </TabsContent>

            <TabsContent value="edit">
              <JsonEditor initialData={data} onUpdate={handleUpdateJson} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  )
}
