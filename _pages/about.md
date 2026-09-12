---
layout: about
title: about
permalink: /
subtitle: >-
  Assistant Professor, <a href="https://www.utc.edu/">University of Tennessee at Chattanooga</a> ·
  Department of Computer Science and Engineering

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a tenure-track Assistant Professor in the Department of Computer Science and Engineering at the [University of Tennessee at Chattanooga](https://www.utc.edu/), where I joined in August 2025. Before that, I was a Postdoctoral Researcher in AI security at the University of Louisiana at Lafayette (2022–2025), where I also received my Ph.D. in Computer Science in 2022, advised by [Dr. Xiali Hei](https://www.xialihei.com/).

My research is in **offensive security for AI systems**: I break them — models, agents, and the CAPTCHA gates in front of them — to understand how they fail and to build ones that don't. Concretely:

- **Security of large language models and AI agents** — adversarial evaluation and red teaming of LLM-based systems, with a focus on code-generation and agentic workflows: jailbreaking, adversarial fine-tuning, and model-level compromise (backdoors, data poisoning) and their implications for software supply chain security.
- **CAPTCHA attacks and design** — machine-learning-based solvers against deployed human-verification systems (reCAPTCHA, hCaptcha, audio CAPTCHAs), and the design of next-generation schemes that stay usable while resisting adversarial ML — including verification anchored in the physical world.
- **Physical and side-channel attacks on ML systems** — attacks that exploit the physical world around a model, from acoustic side channels (e.g., precision keystroke tracking) to signal-injection attacks on biosensing pipelines, and defenses grounded in how these systems fail in practice.

Our CAPTCHA research has been covered by [The Register](https://www.theregister.co.uk/2019/09/04/recaptcha_robot_hack/) and [The Record](https://therecord.media/cloudflare-says-new-hcaptcha-bypass-doesnt-impact-its-implementation).

**Contact**

```bash
echo bWRpbXJhbi1ob3NzZW5AdXRjLmVkdQ== | base64 --decode
```

Or: {% al_email_protect_link site.contact_email %}

{% comment %}
Prospective-students notice — disabled (kept in source for when you want it live).
This whole block is stripped at build time and never appears in the served HTML,
not even in view-source. To publish, move the text outside this block.

I am currently looking for motivated Ph.D. and M.S. students interested in AI
security. If you are interested, please email me with a short statement of your
background and interests.
{% endcomment %}
