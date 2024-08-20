import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Hi there, I'm Tim Charlier👋</>}
      description={
        <>
          You can view my personal projects on this page.
          {/* {' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. */}
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/photo_profil.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/timcharlier6/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/timcharlier6/">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
