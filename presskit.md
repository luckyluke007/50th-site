---
layout: post
title: Press Kit
permalink: /presskit/
---

## Press release

<div class="post-list">
      {% for post in site.categories.press-release %}
       
          <div class="ourstories-content">
          <h4>
            <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          </h4>
          <p>{{ post.excerpt }}</p>
          </div>
       
        <div class="clear"></div>
      {% endfor %}
 </div>

***

## Origin story

####[The birth of UC Santa Cruz: Audacious and academic](/the-birth/)
[{% img full-size /css/assets/images/posts/birth-story/main.jpg "Students dancing in the Field House, 1966" "Students dancing in the Field House, 1966" %}](/the-birth/)

***

## Photos

A selection of photos from the past 50 years.

####[Pre Campus Photo](/press-photos/index.html) | [Download Photo](/css/assets/images/pre-campus.zip)

####[1965-1974](/press-photos/1965-1974.html) | [Download Photos](/css/assets/images/uc-santa-cruz-1965-74.zip)

####[1975-1984](/press-photos/1975-1984.html) | [Download Photos](/css/assets/images/uc-santa-cruz-1975-84.zip)

####[1985-1994](/press-photos/1985-1994.html) | [Download Photos](/css/assets/images/uc-santa-cruz-1985-94.zip)

####[1995-2004](/press-photos/1995-2004.html) | [Download Photos](/css/assets/images/uc-santa-cruz-1995-04.zip)

####[2005-2015](/press-photos/2005-2015.html) | [Download Photos](/css/assets/images/uc-santa-cruz-2005-14.zip)


***

## Upcoming events

{% for event in site.data.events.events limit:10 %}
- {{ event.event.event_date | date: "%B %-d" }}: [{{ event.event.title }}]({{ event.event.link }})
{% endfor %}
