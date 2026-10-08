<div align="center">

# Immemorial

*An animated, scroll-driven tribute to 1990s nostalgia, built with React and GSAP.*

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock&logoColor=black)
![Lenis](https://img.shields.io/badge/Lenis-1.0-111111)
![React Router](https://img.shields.io/badge/React_Router-6.16-CA4245?logo=reactrouter&logoColor=white)
![Create React App](https://img.shields.io/badge/Create_React_App-5.0-09D3AC?logo=createreactapp&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

</div>

---

## About

Immemorial is an art-direction piece about the 90s: telephones, cassette players, arcades, boomboxes and vinyl.
It is mostly an exercise in motion: text revealed by sliding "shutters", photos that drop in and float as you
scroll, gallery titles that slide in from the sides, all on top of Lenis smooth scrolling. Photos are loaded
from Pexels by URL.

## Features

- **Hero**: "Ethereal Canvas" headline uncovered by two GSAP shutters, five photos that drop in with a stagger
  and levitate on scroll (ScrollTrigger scrub)
- **Navbar**: links fall into place one after another on load
- **Featured**: two items (90s telephone, cassette player) revealed by left and right shutters on scroll
- **About**: a short text section
- **Gallery**: four captioned images (Arcade Games, TV, Boombox, Vinyl Record) whose image, title and category
  animate in as they reach the middle of the screen
- **Footer**: an animated "Bonjour" headline
- **Routes**: `/` (all sections), `/featured`, `/about`, `/gallery`, `/blog`, and a Not Found page
- **Smooth scrolling** with Lenis (custom easing, 1.5 s duration)

## Tech stack

| Layer | Technology |
|---|---|
| UI | React 18 (Create React App, `react-scripts` 5) |
| Animation | GSAP 3 with ScrollTrigger |
| Smooth scroll | Lenis (`@studio-freight/lenis`) |
| Routing | React Router 6 |
| Styling | Plain CSS with custom properties; Google Fonts (Poppins, Syncopate, Bai Jamjuree, Bodoni Moda) |

## Project structure

```text
src/
├── App.js                 # routes, smooth scroll
├── index.css              # all styles and colour variables
├── hooks/
│   ├── gsap.js            # one hook per animation (shutters, photo drop, levitate, gallery, footer)
│   └── useSmoothScroll.js # Lenis setup
└── components/
    ├── NavBar.jsx
    ├── Home.jsx           # Hero + Featured + About + Gallery
    ├── Hero.jsx
    ├── Featured.jsx
    ├── About.jsx
    ├── Gallery.jsx        # gallery data
    ├── GalleryItem.jsx
    ├── Blog.jsx
    ├── Foother.jsx        # footer
    └── NotFound.jsx
```

## Getting started

Prerequisites: Node.js 16+ and npm. No environment variables are needed.

```bash
git clone https://github.com/sami999khan999/immemorial.git
cd immemorial
npm install
npm start         # dev server at http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm start` | start the development server |
| `npm run build` | production build into `build/` |

## Status

Practice project. The home page, its sections and animations are done; the Blog page is only a heading.
The images are hot-linked from Pexels, so the page needs an internet connection to show them.
