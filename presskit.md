---
layout: post
title: Press Kit
permalink: presskit/
---

## News release

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

##[The birth of UC Santa Cruz: Audacious and academic](/birth-story/)
[{% img full-size /css/assets/images/posts/birth-story/main.jpg "Students dancing in the Field House, 1966" "Students dancing in the Field House, 1966" %}](/birth-story/)

***

## Photos

A selection of photos from the past 50 years.

####[View Pre Campus Photo](/press-photos/) | [Download high-res photo](/css/assets/images/uc-santa-cruz-pre-campus.zip)

####[View 1965-1974 photos](/press-photos/1965-1974/) | [Download high-res photo](/css/assets/images/uc-santa-cruz-1965-74.zip)

####[View 1975-1984 photos](/press-photos/1975-1984/) | [Download high-res photo](/css/assets/images/uc-santa-cruz-1975-84.zip)

####[View 1985-1994 photos](/press-photos/1985-1994/) | [Download high-res photo](/css/assets/images/uc-santa-cruz-1985-94.zip)

####[View 1995-2004 photos](/press-photos/1995-2004/) | [Download high-res photo](/css/assets/images/uc-santa-cruz-1995-04.zip)

####[View 2005-2014 photos](/press-photos/2005-2014/) | [Download high-res photo](/css/assets/images/uc-santa-cruz-2005-14.zip)


***

## Upcoming events

<ul class="post-list">
    {% for event in site.data.events.events %}
     {% assign eventdate = event.event.event_date | date: "%F" %}
     {% assign sitedate = site.time | date: "%F" %}
       {% if eventdate >= sitedate %}
          <li>
            <span class="post-meta event-date">{{ event.event.event_date | date: "%b" }}<br/ >{{ event.event.event_date | date: "%-d" }}</span>
            <div class="event-content">
            {% if event.event.thumbnail.src != "" %}
              <img src="{{ event.event.thumbnail.src }}" class="event-image" />
            {% endif %}
            <h2><a class="post-link" href="{{ event.event.link }}">{{ event.event.title }}</a></h2>        
            <p>
            <span class="event-location">{{ event.event.location }} {{ event.event.location_details }}</span>
            <span class="event-teaser">{{ event.event.teaser | strip_html | truncatewords:40 }}</span>
            </p>
            </div>
          </li>
          <div class="clear"></div>
          {% else %}
        {% endif %}
    {% endfor %}
  </ul>