import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'

const siteProps = {
  name: 'Dhanush Magham',
  role: 'Frontend Developer',
  tagline: 'Building modern React experiences with GitHub Copilot',
  primaryCta: 'View project source',
  primaryCtaLink:
    'https://github.com/DhanushMaghamAccenture/ReactJs-App-using-GitHub-Copilot',
  docsTitle: 'Documentation',
  docsSubtitle: 'Helpful resources for your React and Vite workflow',
  docsLinks: [
    {
      label: 'Explore Vite',
      href: 'https://vite.dev/',
      type: 'vite',
    },
    {
      label: 'Learn React',
      href: 'https://react.dev/',
      type: 'react',
    },
  ],
  socialTitle: 'Connect with me',
  socialSubtitle: 'Follow updates and collaborate across platforms',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/DhanushMaghamAccenture',
      icon: 'github-icon',
    },
    {
      label: 'Discord',
      href: 'https://chat.vite.dev/',
      icon: 'discord-icon',
    },
    {
      label: 'X.com',
      href: 'https://x.com/vite_js',
      icon: 'x-icon',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/vite.dev',
      icon: 'bluesky-icon',
    },
  ],
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="170"
            height="179"
            alt="Profile hero art"
          />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{siteProps.name}</h1>
          <p>{siteProps.role}</p>
          <p>{siteProps.tagline}</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <a href={siteProps.primaryCtaLink} target="_blank" rel="noopener noreferrer">
          {siteProps.primaryCta}
        </a>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>{siteProps.docsTitle}</h2>
          <p>{siteProps.docsSubtitle}</p>
          <ul>
            {siteProps.docsLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.type === 'vite' ? (
                    <img className="logo" src={viteLogo} alt="Vite logo" />
                  ) : (
                    <img className="button-icon" src={reactLogo} alt="React logo" />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>{siteProps.socialTitle}</h2>
          <p>{siteProps.socialSubtitle}</p>
          <ul>
            {siteProps.socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href={`/icons.svg#${link.icon}`}></use>
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
