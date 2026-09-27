---
layout: page
permalink: /teaching/
title: teaching
description: Current and previous courses.
nav: true
nav_order: 3
---

{% for group in site.data.teaching %}

<section class="man-section">
  <h2 class="man-sh">{{ group.institution }}</h2>
  {% if group.role %}<p class="courses-role">{{ group.role }}</p>{% endif %}
  <ul class="courses">
    {% for course in group.courses %}
      <li>
        <span class="course-term">{{ course.term }}</span>
        <span class="course-code">{{ course.code }}</span>
        <span class="course-title">{{ course.title }}</span>
      </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}

<p class="courses-note">Course materials will be posted here as they become available.</p>
