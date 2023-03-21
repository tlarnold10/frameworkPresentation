---
theme: dracula
---

# Frontend Framework Faceoff
_at least the 3 major frameworks_

#### Trevor Arnold: Software Engineer at FTI

---
transition: slide-up
---

# Origins | Use Cases
#### Where do they come from and why you would use them?

---
transition: slide-up
---

# Angular
<div>
  <div grid="~ cols-2 gap-4">
    <div>
      <img src="/assets/angular.png">
    </div>
    <div>
      <ul>
        <li>Created and maintained by Google, plus open-source community</li>
        <li>Built on Typescript and you are expected to use it</li>
        <li>"Javascript inserted into your HTML"</li>
        <li>Batteries included option. You need to build it the angular way
          <ul>
            <li>Benefit of standard development and structure --> Easy to find examples that work for your use case</li>
          </ul>
        </li>
        <li>Use-case: larger organizations with larger applications.
          <ul>
            <li>Some state this isn't great for new devs, but I disagree</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

---
transition: slide-up
---

# React
<div>
  <div grid="~ cols-2 gap-4">
    <div>
      <img src="/assets/react.png">
    </div>
    <div>
      <ul>
        <li>Created and maintained by Facebook (Meta), plus open-source community</li>
        <li>"HTML inserted into your Javascript"</li>
        <li>Not as much out of the box and a lot of flexibility. Means you may also need a lot of other libraries or tools with React
          <ul>
            <li>A lot of tutorials and examples online, however, they can often only work for the context of that example.s</li>
          </ul>
        </li>
        <li>Use-case: smaller applications with smaller teams (<i>meh...</i>)
          <ul>
            <li>Less experienced developers, a ton of documentation</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

---
transition: slide-up
---

# Vue.js
<div>
  <div grid="~ cols-2 gap-4">
    <div>
      <img src="/assets/vuejs.png">
    </div>
    <div>
      <ul>
        <li>Created and maintained by Evan You (ex-Google), plus open-source community</li>
        <li>Smallest community and similar to angular in that you can structure it how you want
          <ul>
            <li>Difficulties finding examples (compared to Angular and React)</li>
          </ul>
        </li>
        <li>Use-case: want to use something not run by a major tech company and newer. Great for early starters</li>
      </ul>
    </div>
  </div>
</div>

---
transition: slide-up
---

# Some Graphs - Stack Overflow Survey
<div>
  <div grid="~ cols-2 gap-4">
    <div>
      <img src="/assets/stackoverflow1.png">
    </div>
    <div>
      <img src="/assets/stackoverflow2.png">
    </div>
  </div>
</div>

---
transition: slide-up
---

# Some Graphs - Google Trends
<div>
  <img src="/assets/googletrends.png">
</div>

---
transition: slide-up
---

# Demo - Project Overview
<div>
  <h2>What I wanted</h2>
  <ul>
    <li>HTTP Request</li>
    <li>Styling</li>
    <li>State Management</li>
    <li>Lifecycle hooks</li>
  </ul>
  <p>Let us take a look.</p>
</div>

---
transition: slide-up
---

# Demo - Lessons Learned
<div>
  <ol>
    <li>Understanding that there are two different approaches to developing components in react is important. There would be times I would read an article, just to find out that it was in the wrong approach, ultimately moved to function components.</li>
    <li>Redux was a bit challenging as far as a state management library... This was much easier from Angular experience because we could just create Observables and then subscribe to those observables. This is a bit easier to understand than something like Redux, which is a full blown/master state management library.</li>
    <li>xstate was a bit easier to learn than redux. This could easily been because I did a lot of learning with redux that I was able to carry over to xstate.</li>
    <li>I like the fact that in both vue and react that everything can be easily integrated into a single file. With angular, it seems like you need to be jumping between a lot of different files.</li>
    <li>Angular can be nice because it removes some decision making that can easily get in the way. You can easily run into decision fatigue with the other options. Also means that online resources are a lot nicer to use because they all use the "angular way", vs vue and react have so many different ways that you can solve the same problem.</li>
  </ol>
</div>

---
transition: slide-up
---

# Bonus - Next.JS
<div>
  <div>
  <div grid="~ cols-2 gap-4">
    <div>
      <img src="/assets/next.svg">
    </div>
    <div>
      <ul>
        <li>Created by Vercel (formerly known as Zeit) and is currently open source.</li>
        <li>Uses React for server side rendering</li>
        <li>Is a true framework that has a lot of the functionality included that you would usually have to use another library for in React.</li>
        <li>Use-case: Require high performant web apps, given that the data doesn't change frequently.</li>
      </ul>
    </div>
  </div>
</div>
</div>

---
transition: slide-up
---

# Fun Experiment
<div>
  <h2>Chat GPT (If time allows)</h2>
  <p>See what happens when I ask chatgpt for my presentation, just for fun</p>
</div>

---
transition: slide-up
---

# Conclusion
- Easier than I thought to move from one to the other. A lot of the same principles across them all
- State management was definitely the most difficult part across the board
- I like different things about each of them
  - Angular, I like the structure and cli.
  - React, I liked all the resources available online and JSX/TSX
  - Vue, I everything in the same .vue file and broken up very neatly.

---
transition: slide-up
---

# Thank You!

### Connect: 
[LinkedIn](https://www.linkedin.com/in/trevorarnold/) · [GitHub](https://github.com/tlarnold10) · [Personal Website](https://tlarnold10.github.io/arnold-website/)
