import { Injectable, signal } from '@angular/core';
import { Event } from '../../shared/models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly eventsData: Event[] = [
    {
      id: 'tech-meet-1',
      title: 'Tech & Meet 1',
      date: 'October 2023',
      location: 'PXL University of Applied Sciences, Hasselt',
      type: 'tech-meet',
      shortDescription: 'Our first Tech & Meet session – an introduction to the professional world of software engineering through guest speakers and networking.',
      overview: `The first Tech & Meet event of the academic year kicked off a tradition that would become one of the most valuable recurring experiences of my studies. Organized by PXL University of Applied Sciences, this evening brought together students from the Applied Computer Science program and a curated selection of professionals from the local tech industry. The format was designed to bridge the gap between academic education and real-world software development practice. Held in the main auditorium, the event opened with a welcome presentation from faculty, followed by two keynote talks from industry professionals, and concluded with an extended networking session.

The turnout was impressive – nearly all third-year students attended alongside colleagues from other years, creating an intergenerational mix of perspectives. For many of us, this was the first time we had the opportunity to engage directly with working software engineers in a semi-formal context. The atmosphere was energizing: people were genuinely curious, questions flew freely, and the conversations that started in the auditorium carried on long after the official program ended.`,
      whatHappened: `The evening opened with a brief welcome from the department head, who set the context for the Tech & Meet series: a recurring event series designed to give students direct exposure to the realities of the tech industry, beyond what any textbook can offer. The first speaker was a senior backend developer from a Hasselt-based fintech company. He walked us through the evolution of their architecture – from a monolithic Java Spring Boot application to a microservices ecosystem deployed on Kubernetes. He was candid about the growing pains: "The rewrite took 18 months and nearly broke the team," he admitted, before explaining how they eventually landed on a pragmatic hybrid approach.

The second speaker was a DevOps engineer who had transitioned from a developer background. Her talk focused on CI/CD pipelines, infrastructure as code, and how Docker and GitHub Actions transformed the way her team shipped software. She live-demonstrated a deployment pipeline, which was genuinely exciting for students who had only read about these concepts in course material. The networking session that followed was lively. Tables were set up with name tags and QR codes linking to company LinkedIn pages. I spoke with three engineers that evening – asking about their daily workflow, how they learned on the job, and what they wished they had known as students.`,
      whatILearned: `The most impactful insight from Tech & Meet 1 was the realization that real-world software engineering is defined far more by communication, iteration, and pragmatic decision-making than by raw technical prowess alone. The senior backend developer's story about the architectural rewrite stuck with me: technical decisions carry human costs, and the best engineers are the ones who can balance ideal solutions with practical constraints.

On a more technical level, I gained a clearer understanding of the operational side of software – the part that doesn't often get covered deeply in coursework. The DevOps presentation made CI/CD feel tangible for the first time. I had set up basic GitHub Actions pipelines in personal projects, but seeing a production pipeline with environment-specific configurations, automated testing gates, and rollback strategies showed me the scale and sophistication of real deployments.

I also came away with a better understanding of how to position myself as a student when talking to professionals. Being curious and prepared matters more than pretending to know everything. The engineers I spoke with responded most warmly to specific, genuine questions.`,
      reflection: `Tech & Meet 1 was a turning point in how I think about my own development as a software engineer. Before the event, I had a somewhat narrow view of what the job actually looked like – heavy on coding, lighter on everything else. The event disrupted that assumption and replaced it with a more nuanced picture: one where architecture decisions, team dynamics, DevOps culture, and continuous learning are just as central to the role as writing good code.

What surprised me most was how open the speakers were about failure and uncertainty. Both of them talked about projects that hadn't gone as planned, decisions they'd revisit, and gaps in their own knowledge. This honesty was more motivating than any polished success story would have been. It made the industry feel approachable – populated by people who are continually learning, not just experts who have it all figured out.

Going forward, I want to be more intentional about following up after events like this. I exchanged contact information with one of the engineers I met, but I haven't followed up meaningfully yet. That's something I want to change.`,
      keyTakeaways: [
        'Real-world engineering is as much about communication as code',
        'Architecture decisions have lasting human and organizational costs',
        'CI/CD pipelines are essential knowledge for modern developers',
        'Networking with honesty and curiosity builds better connections',
        'Failure and iteration are normal parts of professional development'
      ],
      gallery: [
        { alt: 'Keynote presentation Tech & Meet 1', placeholder: 'Auditorium keynote' },
        { alt: 'Networking session', placeholder: 'Students networking' },
        { alt: 'DevOps demo', placeholder: 'Live pipeline demo' }
      ],
      tags: ['Networking', 'Architecture', 'DevOps', 'CI/CD']
    },
    {
      id: 'tech-meet-2',
      title: 'Tech & Meet 2',
      date: 'December 2023',
      location: 'PXL University of Applied Sciences, Hasselt',
      type: 'tech-meet',
      shortDescription: 'Frontend-focused edition with deep dives into Angular, modern UI architecture, and accessibility in production applications.',
      overview: `The second edition of Tech & Meet arrived at the end of the first semester, timed perfectly to complement coursework we had been doing in web development. This iteration had a deliberate focus on frontend technologies and modern web architecture, which made it particularly relevant to my ongoing Angular projects. The organizing committee had clearly listened to student feedback from the first event and added more interactive components: a brief live coding segment, a panel Q&A, and a "speed networking" round where students rotated between tables of professionals every ten minutes.

The venue remained the same – PXL's auditorium and adjacent networking hall – but the energy felt different this time. Students came in more prepared, with questions thought out in advance. There was a sense of continuity, of being part of an ongoing conversation between the academic and professional worlds. Two speakers presented, both with frontend-heavy backgrounds, and the panel discussion at the end brought in a product manager who offered a complementary perspective on how design, development, and business needs intersect.`,
      whatHappened: `The first speaker, a senior Angular developer from a Belgian digital agency, opened with a question that instantly grabbed the room's attention: "How many of you are building SPAs without thinking about what happens after the JavaScript fails to load?" He proceeded to walk us through the concept of progressive enhancement and resilient frontend architecture – a perspective that cut against the grain of the "Angular-first, everything-else-second" approach many of us had internalized.

His deep dive into Angular's component architecture, lazy loading, and the new Signals API was particularly valuable. He demonstrated how replacing complex RxJS chains with signals reduced component complexity by roughly 40% in one of his recent projects, and he showed side-by-side code comparisons that made the benefit immediately clear. The second speaker shifted to accessibility – a topic that I, somewhat shamefully, had not thought deeply about before. She made the case that accessibility is not a feature but a fundamental quality attribute, and she walked through real examples of how poor ARIA labeling, missing keyboard navigation, and low color contrast actively exclude users. The speed networking round was my favorite part of this edition.`,
      whatILearned: `Tech & Meet 2 fundamentally changed how I approach frontend development. The talk on Angular Signals was technically illuminating – I had read the documentation but seeing the practical before/after comparison of reactive code showed me the real value. I've since started incorporating signals into my own Angular projects, and the reduction in boilerplate is noticeable. More importantly, it's made my components easier to reason about.

The accessibility session left a deep impression. I had always viewed accessibility as a "nice to have" that you'd add time permitting, but the speaker reframed it as a correctness issue. If your application doesn't work with a keyboard, it's broken for a significant portion of users. I've since started testing my own work with keyboard-only navigation and using browser accessibility audit tools as a standard part of my review process.

The panel discussion gave me insight into the product management perspective: how feature requests get prioritized, how technical debt is communicated to non-technical stakeholders, and how frontend developers can be more effective advocates for quality within a product team.`,
      reflection: `If Tech & Meet 1 broadened my perspective on software engineering as a profession, Tech & Meet 2 sharpened my focus on the craft of frontend development specifically. I came away with a list of concrete technical things to explore – Angular Signals, accessibility auditing tools, progressive enhancement patterns – and I've been working through that list ever since.

The speed networking format was stressful at first but turned out to be highly effective. The imposed time limit meant every conversation had to get to the point quickly, which actually made for more substantive exchanges. I practiced explaining my projects clearly and concisely, which is a skill I know I need for future job interviews. I left Tech & Meet 2 feeling more confident in my direction as a developer – solidly frontend-focused with a growing appreciation for the operational and accessibility dimensions of the role.`,
      keyTakeaways: [
        'Angular Signals dramatically simplify reactive state management',
        'Accessibility is a correctness concern, not a bonus feature',
        'Progressive enhancement makes SPAs more resilient',
        'Product thinking complements technical depth in frontend roles',
        'Speed networking sharpens communication under pressure'
      ],
      gallery: [
        { alt: 'Angular Signals live demo', placeholder: 'Code demo on screen' },
        { alt: 'Accessibility presentation', placeholder: 'Accessibility talk' },
        { alt: 'Speed networking tables', placeholder: 'Rotating networking' }
      ],
      tags: ['Angular', 'Signals', 'Accessibility', 'Frontend']
    },
    {
      id: 'tech-meet-3',
      title: 'Tech & Meet 3',
      date: 'March 2024',
      location: 'PXL University of Applied Sciences, Hasselt',
      type: 'tech-meet',
      shortDescription: 'Backend and database-focused edition covering Spring Boot microservices, MongoDB, and API design best practices.',
      overview: `The third Tech & Meet of the academic year arrived in the spring semester with a backend-heavy lineup that complemented the Java and database coursework we were deep in at the time. This edition drew a slightly larger crowd than the previous two, partly due to word spreading about the quality of the series, and partly because the topic – microservices and NoSQL databases – had become a hot discussion point in our courses. The format had by now matured into a familiar and comfortable rhythm: two main presentations, a networking break, a panel or Q&A, and a casual wind-down.

What made this edition distinctive was the level of technical depth. The speakers clearly anticipated a more knowledgeable audience than at the first event and calibrated their presentations accordingly. There was less time spent on basic definitions and more time on design decisions, trade-offs, and hard lessons learned. For students mid-way through their degree, it felt like being treated as near-professionals, which was genuinely motivating.`,
      whatHappened: `The first speaker was the lead architect of a logistics software company based in Limburg. He walked us through the journey of evolving a Spring Boot monolith into a microservices architecture, focusing specifically on the domain modeling decisions that drove service boundaries. His use of Domain-Driven Design concepts – bounded contexts, aggregates, and event sourcing – was the first time I had heard these ideas explained in a practical, applied context rather than as abstract theory.

He spent considerable time on Spring Boot's ecosystem: Spring Data, Spring Security, and the patterns for inter-service communication. One of his most memorable lines: "The hardest part of microservices isn't the technology. It's deciding where one service ends and another begins." The second speaker was a database specialist who had worked with both relational and document-oriented databases across several companies. Her MongoDB-focused presentation covered schema design, indexing strategies, aggregation pipelines, and when to choose document storage over relational – a question I'd been wrestling with in my own projects. She also touched on MongoDB Atlas and cloud-native database patterns.`,
      whatILearned: `Tech & Meet 3 clarified a lot of things I had been fuzzy on. Domain-Driven Design had appeared in reading materials before, but seeing it applied to actual service boundary decisions gave it meaning. The idea of using bounded contexts to define microservice scope is something I now apply when thinking about system design problems.

On the database side, the MongoDB talk was practically useful. I had been using MongoDB in projects but without a strong understanding of schema design trade-offs. The presentation on embedding versus referencing documents, and the performance implications of each choice, gave me a mental model I can apply going forward. I also learned about aggregation pipelines in more depth than our coursework covered, and I've since used them more confidently. The event reinforced that my backend knowledge – while growing – still has significant gaps. I left with a reading list and a clearer sense of what senior-level backend expertise looks like.`,
      reflection: `Tech & Meet 3 was probably the most technically dense of the series so far, and I appreciated that. It felt like a preview of the kind of conversations I'll be part of professionally. The DDD content in particular was a catalyst: I went home and spent the next weekend reading about bounded contexts and aggregate design, and I could feel my mental model of software architecture upgrading.

There was a moment during the Q&A when a student asked the architect how he handles disagreements about service boundaries within his team. His answer – that good architecture is always a negotiation, and that documentation and shared understanding matter more than being "right" – stuck with me. It reinforced something I'd heard at earlier events: the relational and communicative aspects of software engineering are not secondary to the technical ones. They're fundamental.`,
      keyTakeaways: [
        'Domain-Driven Design provides a principled approach to microservice boundaries',
        'MongoDB schema design requires deliberate thought about access patterns',
        'Spring Boot ecosystem offers powerful integration for enterprise applications',
        'Architecture decisions are always negotiations, not unilateral choices',
        'Good documentation is foundational to maintainable distributed systems'
      ],
      gallery: [
        { alt: 'Microservices architecture diagram', placeholder: 'Architecture whiteboard' },
        { alt: 'MongoDB aggregation demo', placeholder: 'Database demo' },
        { alt: 'Q&A session panel', placeholder: 'Panel discussion' }
      ],
      tags: ['Spring Boot', 'Microservices', 'MongoDB', 'DDD', 'Backend']
    },
    {
      id: 'tech-meet-4',
      title: 'Tech & Meet 4',
      date: 'May 2024',
      location: 'PXL University of Applied Sciences, Hasselt',
      type: 'tech-meet',
      shortDescription: 'Year-closing edition focused on cloud infrastructure, Docker, and career paths in software engineering.',
      overview: `The fourth and final Tech & Meet of the academic year arrived as we were preparing for exams and beginning to think seriously about internships and the next phase of our careers. Fittingly, this edition balanced technical content with more career-oriented discussion, creating a two-track program that addressed both where we were in our learning and where we were heading professionally. The event took on a slightly more celebratory tone – a recognition that we had made it through another year and were increasingly ready for the professional world.

The speakers chosen for this edition reflected that balance: a DevOps-focused cloud engineer discussed the practical infrastructure skills that employers look for, while the second speaker, an engineering manager at a mid-sized software house, shifted focus to career development, team dynamics, and how to present yourself as a junior developer. Together, they created a picture of the complete journey from student to working professional.`,
      whatHappened: `The cloud engineering talk opened with a visual overview of a typical modern deployment stack: code in GitHub, CI/CD via GitHub Actions, containerized with Docker, orchestrated on Kubernetes, deployed to AWS. He then walked through each layer in sequence, explaining the why behind each technology choice. His Docker segment was the most immediately relevant to me – he showed multi-stage builds, layer caching strategies, and security best practices for containerized applications that I hadn't encountered in coursework.

The second talk was unlike any previous Tech & Meet presentation. The engineering manager opened with a candid assessment of what most junior developers get wrong in interviews: "You focus on what you've built, but we want to know how you think." He walked through the attributes his team looks for – problem decomposition, communication clarity, intellectual curiosity, and the willingness to say "I don't know, but here's how I'd find out." He also addressed the internship period specifically, offering advice on how to make the most of it and how to turn it into a full-time opportunity. The networking session that followed had a noticeably different energy – students came with resume questions and internship anxiety, and professionals responded with genuine mentorship.`,
      whatILearned: `Docker clicked for me in a new way at this event. I had used it before – basic Dockerfiles, docker-compose for development environments – but the multi-stage build demonstration and the layer optimization discussion made it clear how much more there was to understand. I've since restructured the Dockerfiles in my projects using multi-stage patterns, and the reduction in image size has been significant.

The engineering manager's talk on interviewing was practically transformative. I've started practicing problem decomposition out loud, explaining my reasoning as I work through technical challenges rather than presenting only finished solutions. The reframe from "what have you built" to "how do you think" has changed how I present projects – I now try to explain the decisions and trade-offs behind each choice, not just the features.

I also internalized something about the internship itself: it's not a test you pass or fail, it's an extended conversation about fit and growth. Approaching it with curiosity and openness matters more than arriving with all the answers.`,
      reflection: `Tech & Meet 4 felt like a closing chapter and an opening door at the same time. The technical content was strong, but the career-focused thread running through the evening was what made it memorable. I've attended four of these events now, and looking back at the arc – from feeling like an outsider in industry conversations at Tech & Meet 1 to genuinely contributing to technical discussions at Tech & Meet 4 – is a concrete measure of how much I've grown.

The engineering manager's advice about internships landed at exactly the right moment. As I finalize my internship search, I'm approaching it with a different mindset: not as a student trying to prove I belong, but as someone with a foundation of real skills, genuine curiosity, and a clear direction. That shift in confidence is one of the most valuable things this series has given me.`,
      keyTakeaways: [
        'Multi-stage Docker builds significantly reduce image size and improve security',
        'Employers value thinking process and communication over built features',
        'Kubernetes orchestration is the natural next step after Docker proficiency',
        'Internships are conversations about fit, not auditions to pass',
        'The ability to say "I don\'t know, but I\'ll find out" is a professional strength'
      ],
      gallery: [
        { alt: 'Docker multi-stage build demo', placeholder: 'Container demo' },
        { alt: 'Career talk session', placeholder: 'Engineering manager talk' },
        { alt: 'Year-end networking', placeholder: 'End of year networking' }
      ],
      tags: ['Docker', 'Kubernetes', 'Cloud', 'Career', 'DevOps']
    }
  ];

  readonly events = signal<Event[]>(this.eventsData);

  getEventById(id: string): Event | undefined {
    return this.eventsData.find(e => e.id === id);
  }

  getAllEvents(): Event[] {
    return this.eventsData;
  }
}
