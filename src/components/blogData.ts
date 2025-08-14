import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with Django and React',
    excerpt:
      'Learn how to seamlessly integrate Django REST Framework and React to build modern, maintainable, and scalable web applications.',
    date: '2024-12-15',
    readTime: '10 min read',
    image:
      'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `
## Introduction
In the fast-paced world of web development, scalability is not a luxury—it's a necessity.  
Combining **Django REST Framework** and **React** offers developers the flexibility to build applications that are not only responsive and modern but also maintainable in the long run.

## Why Django REST Framework?
- **Robust backend:** Django provides built-in ORM, authentication, and admin panel.
- **Rapid API creation:** DRF makes creating RESTful APIs seamless.
- **Security-first approach:** Protection against common vulnerabilities out of the box.

## Why React for the Frontend?
- **Component-based architecture:** Promotes reusability.
- **Fast rendering:** Virtual DOM ensures quick UI updates.
- **Vibrant ecosystem:** Thousands of libraries and tools.

## Steps to Build a Scalable App
1. **Design Your Database Models** in Django.
2. **Create REST Endpoints** with DRF.
3. **Set Up React Project** and integrate API calls.
4. **Implement State Management** with tools like Redux or Zustand.
5. **Optimize Performance** through code splitting and caching.

## Deployment Considerations
You can deploy:
- Both apps together (Django serving React build).
- Separately using services like **Vercel** (frontend) and **Render/Heroku** (backend).

> **Pro Tip:** Keep your backend and frontend loosely coupled to allow independent scaling.
    `,
  },
  {
    id: 2,
    title: 'My Journey: From Electrical Engineering to Software Development',
    excerpt:
      'From electrical circuits to JavaScript functions — my career shift taught me lessons that go beyond coding.',
    date: '2024-12-08',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `
## The Beginning
Like many engineering students, I started my journey surrounded by transformers, power systems, and circuit diagrams.  
While I enjoyed solving electrical problems, I was fascinated by the world of **software development**—a field where solutions could be built and deployed instantly.

## My First Step into Coding
I picked up **C programming** during my second year, and later moved to **Python** for its simplicity and versatility.  
Soon, I found myself exploring **web development** with HTML, CSS, and JavaScript.

## The Turning Point
The real shift happened when I built my first small web app. Watching it work in real time felt more exciting than running simulations on a breadboard. I began learning:
- **React** for interactive UIs.
- **Django** for powerful backend logic.
- **Databases** like MySQL for persistent storage.

## Challenges I Faced
- Overcoming the steep learning curve.
- Switching from hardware-focused problem-solving to software logic.
- Managing time while learning multiple tools.

## Lessons for Anyone Considering a Switch
1. **Start small** — build simple projects before complex ones.
2. **Stay consistent** — coding daily builds momentum.
3. **Seek a community** — forums, open-source contributions, and tech meetups.

> If you feel stuck in your current field but curious about another, start learning in your free time — you might surprise yourself.
    `,
  },
];
