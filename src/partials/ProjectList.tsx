import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <GradientText>My Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Alphabetical Piano"
        description="The Alphabetical Piano is an interactive typing practice tool that turns the keyboard into a piano. Users can practice typing while playing the famous Prelude in C major from Bach."
        link="https://alphabetical-piano.netlify.app/"
        img={{
          src: '/assets/images/alphabetical-piano.png',
          alt: 'Musical Front-End Appication',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Tone.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Calculator"
        description="A Simple Calculator"
        link="https://calculatrice-04374b.gitlab.io/"
        img={{
          src: '/assets/images/image-processor.png',
          alt: 'Calculator',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Webpack</Tags>
            <Tags color={ColorTags.EMERALD}>JavaScript</Tags>
            <Tags color={ColorTags.YELLOW}>HTML/CSS</Tags>
            <Tags color={ColorTags.LIME}>jQuery</Tags>
          </>
        }
      />

      <Project
        name="Sound Painting"
        description="
        Experiment with music scripting.
"
        link="https://timcharlier6.github.io/lilypond/"
        img={{
          src: '/assets/images/alphabetical-piano.png',
          alt: 'Musical Front-End Appication',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Tone.js</Tags>
            <Tags color={ColorTags.SKY}>Lilypond</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Simple Metronome"
        description="
This is a simple web-based metronome built using HTML, CSS, JavaScript, jQuery, and the Tone.js library. The application allows users to select a musical note, octave, and tempo to generate a metronome sound. The metronome also includes a stopwatch to track elapsed time while it is running.
"
        link="https://simple-metronome-app.netlify.app/"
        img={{
          src: '/assets/images/alphabetical-piano.png',
          alt: 'Musical Front-End Appication',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Tone.js</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Garden Database"
        description="A database table with a search box made with SQLite and PHP in a Docker container."
        link="https://garden-databasej.onrender.com/"
        img={{
          src: '/assets/images/garden-database.jpg',
          alt: 'Garden Database',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>SQLite</Tags>
            <Tags color={ColorTags.INDIGO}>PHP</Tags>
            <Tags color={ColorTags.ROSE}>Docker</Tags>
            <Tags color={ColorTags.YELLOW}>Bootstrap 5</Tags>
          </>
        }
      />
      <Project
        name="Brown Noise Generator"
        description="A simple brown noise generator with a friendly UI made with Tone.js and TypeScript."
        link="https://brown-noise-generator.vercel.app/"
        img={{
          src: '/assets/images/brown_noise.png',
          alt: 'Brown Noise Generator',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>TypeScript</Tags>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
            <Tags color={ColorTags.ROSE}>Tone.js</Tags>
          </>
        }
      />

      <Project
        name="Cookbook"
        description="A cookbook with markdown files converted to html"
        link="https://timcharlier6.github.io/recipes/"
        img={{
          src: '/assets/images/garden-database.jpg',
          alt: 'Cookbook',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Jekyll</Tags>
            <Tags color={ColorTags.INDIGO}>Markdown</Tags>
          </>
        }
      />
      <Project
        name="Bach Midi player"
        description="Midi score of Bach with a new voice that you can follow along."
        link="https://inventions-bach.netlify.app/"
        img={{
          src: '/assets/images/html.jpg',
          alt: 'Midi Player Bach',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>HTML</Tags>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
            <Tags color={ColorTags.ROSE}>Midi library</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
