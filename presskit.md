---
layout: post
title: Press Kit
permalink: /presskit/
---

## Press release

The article on our news site kicking off the celebration of UCSC's 50th year.

## Origin story

###[The birth of UC Santa Cruz: Audacious and academic](/the-birth/)
{% img full-size /css/assets/images/post/dancing.jpg "Students dancing in the Field House, 1966" "Students dancing in the Field House, 1966" %}

## Photos

A selection of photos from the past 50 years.

## 50 years in a single page

A PDF with all of the information about our 50th anniversary.

## Upcoming events

{% for event in site.data.events.events limit:10 %}
- {{ event.event.event_date | date: "%B %-d" }}: [{{ event.event.title }}]({{ event.event.link }})
{% endfor %}
