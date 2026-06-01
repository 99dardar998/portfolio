import { Injectable, signal } from '@angular/core';
import { Event } from '../../../shared/models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly eventsData: Event[] = [
    {
      id: 'tech-meet-1',
      title: 'Tech & Meet 1',
      date: '2025',
      location: 'Howest, Campus Brugge Station - Gebouw A, Spoorwegstraat 4, 8200 Brugge',
      type: 'tech-meet',
      shortDescription: 'A cybersecurity-focused seminar on threat intelligence — an unexpected but eye-opening first Tech & Meet.',
      overview: `The first Tech & Meet I attended was a rather unusual choice for a Software Engineering student. It was not completely unrelated to my field of study, but it certainly was not the type of seminar most people would expect me to choose. The event was an evening seminar focused on threat intelligence and the process of gathering information about cybersecurity threats and turning that information into actionable intelligence.`,
      whatHappened: `At the time, I had very little prior knowledge of the subject. Despite this, I was able to follow the presentation quite easily thanks to the speaker's clear explanations and well-structured approach. The seminar was designed in a way that made complex concepts accessible, allowing younger students and those with little experience in cybersecurity, like myself, to understand the material without feeling overwhelmed.

One of the most valuable aspects of the seminar was learning how many cyberattacks still occur and which weaknesses are commonly exploited by malicious actors. The presentation also covered the detection and investigation of security incidents — how attacks can be identified and traced back to their source.`,
      whatILearned: `As a programmer, understanding these vulnerabilities is useful because it allows me to design software with security in mind. The seminar highlighted how developers can make use of existing security tools, frameworks, and best practices to create safer applications and reduce the risk of attacks.

Although I do not see myself pursuing a career in cybersecurity, knowing how attacks can be identified and traced can still be beneficial. This knowledge may prove useful in personal projects or community-based applications where preventing abuse and protecting users are important concerns. Even a basic understanding of security can go a long way toward maintaining reliable and trustworthy software.`,
      reflection: `Although I enjoyed the content, I personally would not choose this particular seminar again if given the opportunity. This is not because the topic lacked value or because the speaker was unenthusiastic — on the contrary, the presentation was engaging and informative throughout. However, the long commute to and from campus, combined with having to skip dinner in order to arrive on time, made the overall experience less worthwhile for me than some of the later Tech & Meet events I attended.

That being said, this first seminar served as an excellent introduction to the Tech & Meet series. It helped me understand what to expect from future events and prepared me for the seminars that followed, many of which aligned more closely with my personal interests and academic background.`,
      keyTakeaways: [
        'Threat intelligence turns raw security data into actionable knowledge',
        'Many cyberattacks exploit well-known, preventable vulnerabilities',
        'Developers benefit from understanding security even outside a cybersecurity role',
        'Security-conscious design starts at the code level',
        'A broad understanding of the tech landscape has value even outside your specialty'
      ],
      gallery: [
        { alt: 'Threat intelligence presentation', placeholder: 'Seminar overview slide' },
      ],
      tags: ['Cybersecurity', 'Threat Intelligence', 'Security', 'Networking'],
      image: 'portfolio/images/tam1.webp'
    },
    {
      id: 'tech-meet-2',
      title: 'Tech & Meet 2',
      date: '2025',
      location: 'Howest, Campus Brugge Station - Gebouw A, Spoorwegstraat 4, 8200 Brugge',
      type: 'tech-meet',
      shortDescription: 'An IPv6 seminar with a twist — the speaker kept the audience engaged with fun facts about Bruges and alcohol.',
      overview: `One of the Tech & Meet events that I remember most clearly was a seminar that took a surprisingly creative approach to keeping its audience engaged. What made this particular session stand out was how the speaker combined a serious technical topic with entertaining facts about two subjects that many students, including myself, found interesting: the city of Bruges and the history of alcohol.`,
      whatHappened: `Throughout the presentation, the speaker regularly interrupted the more technical sections with short stories, fun facts, and humorous anecdotes. These moments acted as a way to recapture the audience's attention whenever concentration began to fade. While the comparison may sound funny, it felt somewhat like waving a shiny object in front of someone to regain their focus. Surprisingly, it worked extremely well.

The seminar took place late in the evening after a full day of classes, which naturally made it more difficult to remain fully concentrated for an extended period of time. The speaker clearly recognized this challenge and adapted his presentation style accordingly, making the entire experience much more enjoyable.

Beyond the entertaining elements, the technical topic itself was highly relevant. The seminar focused on IPv6 and the ongoing transition from IPv4 to IPv6 across the internet. We learned about the limitations of IPv4, particularly the shortage of available addresses, and how IPv6 was designed to solve this problem by providing a vastly larger address space.`,
      whatILearned: `The presentation covered additional advantages of IPv6, including improvements in network efficiency, scalability, and future-proofing internet infrastructure. Another interesting aspect was the discussion about why some organizations and developers have been slow to adopt IPv6 — many existing systems were originally built around IPv4, and updating infrastructure, software, and network configurations can require significant time and resources.

As a software engineering student, I found this information particularly valuable because networking concepts are an important part of modern software development. Understanding the challenges involved in adopting new technologies helped me appreciate the practical considerations that influence technical decisions in the industry.`,
      reflection: `Overall, this Tech & Meet became one of my favorites. The combination of a relevant technical subject, an engaging speaker, and a unique presentation style created a memorable experience. It demonstrated that even highly technical topics can be made entertaining when presented with creativity and enthusiasm.

I am not ashamed to admit that the technique of mixing fun facts with technical content definitely helped keep me engaged. It is a lesson in communication I have thought about since: knowing your audience and adapting your delivery style is just as important as the content itself.`,
      keyTakeaways: [
        'IPv6 solves the IPv4 address exhaustion problem with a vastly larger address space',
        'Many organizations run IPv4 and IPv6 simultaneously during the transition',
        'Presentation style and audience awareness matter as much as technical content',
        'Networking knowledge is relevant for every software developer',
        'Creative delivery can make even complex technical topics accessible and memorable'
      ],
      gallery: [
        { alt: 'IPv6 address space diagram', placeholder: 'Network diagram slide' },
      ],
      tags: ['IPv6', 'Networking', 'Internet Infrastructure', 'Protocols'],
      image: 'portfolio/images/tam2.webp'
    },
    {
      id: 'tech-meet-3',
      title: 'Tech & Meet 3',
      date: '2025',
      location: 'Howest, Campus Brugge Station - Gebouw A, Spoorwegstraat 4, 8200 Brugge',
      type: 'tech-meet',
      shortDescription: 'A deep dive into the evolution of C# and the .NET ecosystem — insightful even as a Java-first developer.',
      overview: `The second-to-last Tech & Meet I attended focused on the recent advancements and changes introduced in the .NET ecosystem for programmers working with languages in this category. The main emphasis of the seminar was on C# and how the language has evolved over time through continuous updates and improvements.`,
      whatHappened: `The speaker of the seminar was highly knowledgeable and clearly very experienced in the .NET ecosystem. This level of expertise made a noticeable difference, as the explanations were both technically accurate and easy to understand. During the session, we were introduced to several new language features and design changes in C#, along with the reasoning behind why those changes were implemented.

This included improvements aimed at making code more readable, more efficient, and easier to maintain. We also discussed smaller internal changes and fixes that improve how the language behaves under the hood — changes that are not always visible in everyday coding but still have a significant impact on the developer experience and application stability.`,
      whatILearned: `At the time, my preferred programming language for object-oriented programming was Java, and it still remains my primary choice. However, the Tech & Meet still provided valuable insights into how programming languages evolve in general. Languages like C# and Java are not static — they are continuously updated with new features, performance improvements, and syntactic changes.

The overlap between C# and Java in terms of structure and programming paradigms made it easier to follow and compare. Having a speaker closely connected to the technology being discussed meant he could translate complex updates into explanations even less experienced students could grasp, while still providing depth for more advanced listeners. This helped me reflect on how similar improvements might appear in Java and other languages I use.`,
      reflection: `Overall, it was a very insightful and educational Tech & Meet that improved my understanding of how modern programming languages evolve and how those changes affect real-world software development.

Even though C# was not my main focus language, attending this seminar reinforced something important: understanding the broader landscape of programming languages — even ones you don't use daily — makes you a more well-rounded developer. It also sparked my curiosity about exploring .NET further in future personal projects.`,
      keyTakeaways: [
        'C# and Java share many structural similarities despite coming from different ecosystems',
        'Programming languages evolve continuously — staying current matters',
        'Understanding why language features were added is as valuable as knowing what they do',
        'A knowledgeable speaker with real-world experience elevates any technical seminar',
        'Broadening your language knowledge makes you a more adaptable developer'
      ],
      gallery: [
        { alt: 'C# language features overview', placeholder: 'C# feature slide' },
      ],
      tags: ['C#', '.NET', 'Programming Languages', 'Software Engineering'],
      image: 'portfolio/images/tam3.webp'
    },
    {
      id: 'tech-meet-4',
      title: 'Tech & Meet 4',
      date: '2025',
      location: 'Howest, Campus Brugge Station - Gebouw A, Spoorwegstraat 4, 8200 Brugge',
      type: 'tech-meet',
      shortDescription: 'My favorite Tech & Meet — a passionate talk on DeepSeek and AI by lecturer Dimi Casier.',
      overview: `The last Tech & Meet event I attended was presented by someone I knew much better than any of the previous speakers. The speaker for this after-school seminar was none other than one of the lecturers who guided me throughout my three-year journey at PXL: Dimi Casier. During my studies, I had the pleasure of attending several of his courses, which made this Tech & Meet feel much more personal and engaging from the very beginning.`,
      whatHappened: `Just like in his lectures, Dimi delivered the seminar with an incredible amount of enthusiasm and genuine passion for the topic. His energy immediately captured the attention of everyone in the room and made even the more technical aspects easy to follow.

The seminar focused on artificial intelligence, specifically DeepSeek — the Chinese AI model that attracted worldwide attention because of its impressive capabilities and relatively low training and operating costs compared to major competitors such as ChatGPT and Microsoft Copilot. The presentation explored why DeepSeek became such an important player in the AI industry despite entering a market already dominated by large technology companies.

One of the main points discussed was the model's innovative approach to reasoning and problem-solving. DeepSeek introduced techniques that allowed it to achieve competitive results while using fewer resources than many of its rivals. Another major factor behind its success was its open-source philosophy, which enabled researchers and developers from around the world to study, improve, and contribute to the project.`,
      whatILearned: `Throughout the seminar, Dimi explained how these decisions helped DeepSeek establish itself as a serious competitor in the rapidly evolving AI landscape. He also discussed how the model influenced the broader industry, encouraging larger companies to rethink their own development strategies and focus more heavily on efficiency and reasoning capabilities.

What made the seminar particularly interesting was the way Dimi connected technical concepts to real-world developments. Rather than simply presenting facts and figures, he explained why these innovations mattered and how they affected the future direction of AI research. This made the topic much more accessible, even for audience members who were not deeply familiar with machine learning.`,
      reflection: `This Tech & Meet was not only the last one I attended, but also my favorite. While every speaker I listened to was passionate about their subject, Dimi brought an extra level of excitement that made the experience memorable. His ability to communicate complex topics with enthusiasm and clarity kept everyone engaged from start to finish.

Combined with my personal interest in artificial intelligence, this made the seminar both informative and enjoyable, leaving a lasting impression on me long after it had ended. Although newer AI systems have since appeared and pushed the technology even further, DeepSeek remains an important milestone in the history of modern artificial intelligence.`,
      keyTakeaways: [
        'DeepSeek achieved competitive AI performance at significantly lower cost than rivals',
        'Open-source AI development accelerates innovation through global collaboration',
        'Efficiency and reasoning capabilities are shaping the next generation of AI models',
        'A familiar and enthusiastic speaker transforms a technical seminar into a genuine experience',
        'AI is rapidly evolving — staying informed is essential for every software developer'
      ],
      gallery: [
        { alt: 'DeepSeek model overview', placeholder: 'src/resources/tam4.webp' },
      ],
      tags: ['Artificial Intelligence', 'DeepSeek', 'Machine Learning', 'Open Source'],
      image: 'portfolio/images/tam4.webp'
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
