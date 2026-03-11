import React from "react";

const template = {
  slug: "software-architecture",
  title: "Software Architecture: The What and Why",
  subtitle: "You might have heard about Software Architecture recently without really knowing what it means-so let me simplify it for you.",
  author: "Jesús Ortiz",
  date: "March 10, 2026",
  readTime: "6 min read",
  content: (
    <div className="prose prose-lg prose-gray max-w-none mx-auto space-y-6 mb-10 text-justify">
      <p>
        One of the best pieces of advice I've ever received on understanding a concept deeply is to start by grasping its core. That's exactly what we'll do here: dig into the essence of what Software Architecture is, what problems it solves (if any), and why it matters. And let me tell you - there's a lot to unpack.
      </p>

      <h2 className="font-bold">The Principle - Architecting</h2>
      <p>
        <a
          href="https://dictionary.cambridge.org/dictionary/english/architecture"
          target="_blank"
          className="text-blue-600"
        >
          Cambridge Institute
        </a>{" "}
        defines architecture as:
      </p>

      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
        “The art and practice of designing and making buildings.”
      </blockquote>

      <p>And when related to IT:</p>

      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
        “The design and structure of a computer system, which controls what equipment can be connected to it and what software can operate on it.”
      </blockquote>

      <p>
        So we can intuitively agree on something: Software Architecture has to do with designing and building. And yes - but also no. See, if there's one thing IT does well, it's overengineering everything. And this topic is no exception. I'll explain later why both answers are true and why it's not a paradox. But for now, our question becomes...
      </p>

      <h2 className="font-bold">Designing and Building What?</h2>
      <p>
        This is the heart of architecting - understanding what we're actually designing and building. Imagine you've gone through the process of building or renovating a house. You know how critical planning is: deciding where the pillars should go so the roof's weight distributes evenly, how the layout allows air to flow, or the orientation that maximizes sunlight in winter and shade in summer. Every decision matters.
      </p>

      <p>
        All of this planning ensures a solid build, reduces future renovations, and even if the initial cost is high, it pays off long term. These core principles apply directly to software: just as a house is the final solution, so is the software we build.
      </p>

      <p>
        Whether it’s a web app, a native app, a SaaS product, or enterprise software — whatever the type — you have to ask key questions: Who is it for? Who's going to use it? What will the payload look like? Do users have a stable, fast internet connection, or do you need an app that works well under poor connectivity? This list goes on, and not surprisingly, it evolves over time.
      </p>

      <p>
        That’s where Architecture comes in — to maximize the chances of a proper build (and I say chances because perfect software doesn't exist, only working software). It's about meeting as many criteria as possible. If you want a cool house in summer, you wouldn’t place your living room facing the sunset, right? Similarly, if you expect heavy payloads, you’d better handle them properly instead of hoping your server doesn’t crash.
      </p>

      <p>
        A solid architecture goes far beyond these examples, but this gives a good introduction to the concept. For instance, a well-thought-out architecture is what allows{" "}
        <a
          href="https://openai.com/en-US/index/scaling-postgresql/"
          target="_blank"
          className="text-blue-600"
        >
          OpenAI to handle millions of users
        </a>{" "}
        using a relational database — without crashing or slowing down. (Yes, I was surprised too when I learned they use an RDB instead of a NoSQL one!)
      </p>

      <h2 className="font-bold">How Much Does It Cover?</h2>
      <p>
        So now we know - briefly - what Software Architecture means. But how far does it go? Before diving in, let me warn you: it touches almost every part of the software realm, at least to some extent.
      </p>

      <p>
        I mentioned a paradox earlier. When I first heard “architecture,” I thought of design — more like UI design (which, judging by this page's layout, clearly isn't my strongest skill — but hey, you should see my backend code). It took time for me to understand that it's not about colors or buttons... it's about building a house.
      </p>

      <p>See, when we talk about design here, we mean the structural design that the architecture will follow — not UI or UX design. This involves questions like: Do we need a relational database, or will a non-relational one do? Which programming language fits best for this project? Should we use a hexagonal architecture, a monorepo structure, or include a middleware layer? These are the kinds of questions that an architect ultimately answers. </p>

      <p>
        And believe it or not (though by now you probably can), these decisions ultimately affect how we, the developers, write our code. It might influence the way we structure and run tests, organize our folders, determine our level of abstraction, or decide how clean we want the code to be. Whatever the case, the architect's decisions will inevitably shape how we build.
      </p>
      <h2 className="font-bold">Wrapping Up</h2>

      <p>In the end, Software Architecture isn't about picking fancy patterns or overcomplicating diagrams - it's about making thoughtful decisions that give our software a solid foundation to grow, adapt, and perform. It's the invisible framework that shapes how teams build and collaborate, long before a single line of code runs in production. </p>
      <p>The more I've learned about it, the clearer it's become that good architecture isn't about perfection - it's about alignment. Aligning the product with the people who use it, the code with the developers who maintain it, and the vision with the constraints that guide it. </p>
      <p>So next time you start a new project, take a moment to think about your architecture. Because, whether you notice it or not, it'll define how everything else falls into place. </p>
      <p>   After all, a strong foundation might not always be visible — but it's what keeps everything standing tall. </p>
    </div>
  )
};

export default template;

