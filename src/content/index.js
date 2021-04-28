// eslint-disable-next-line
export default {
  nav: {
    logo: 'OLD-G',
    links: [
      { text: 'Projects', to: 'myprojects' },
      { text: 'Stack', to: 'mystack' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',

    text: ['Hi!', "It's me Gleb Zavalov", "I'm "],
    typical: ['Frontend Developer. 🖥', 2000, 'Mobile Developer. 📱', 2000],
  },
  work: {
    projects: [
      {
        title: 'Netflix Clone (React JS)',
        img: process.env.PUBLIC_URL + '/assets/netflix.png',
        desc:
          'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected...',
        link: 'https://netflixxx-clone.netlify.app',
      },
      {
        title: 'Hulu Clone (Next JS)',
        img: process.env.PUBLIC_URL + '/assets/hulu.png',
        desc:
          'Hulu is the leading premium streaming service offering live and on-demand TV and movies, with and without commercials, both in and outside...',
        link: 'https://hulu-clone-vert.vercel.app/',
      },
      {
        title: 'Google Clone (Next JS)',
        img: process.env.PUBLIC_URL + '/assets/google.png',
        desc:
          'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
        link: 'https://google-clone-neon.vercel.app/',
      },
      {
        title: 'Spotify Clone (React JS)',
        img: process.env.PUBLIC_URL + '/assets/spotify.png',
        desc:
          'Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.',
        link: 'https://spotify-app-clone-9090a.firebaseapp.com/',
      },
      {
        title: 'Cloudbudget Langin page (HTML CSS JS)',
        img: process.env.PUBLIC_URL + '/assets/cloudbudget.png',
        desc:
          'Our software is made so you can access and manage your budget and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spendi',
        link: 'https://old-g.github.io/cloudbudget-landing/',
      },
      {
        title: 'Tesla Clone (React Native)',
        img: process.env.PUBLIC_URL + '/assets/tesla.png',
        desc:
          'Tesla is accelerating the worlds transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.',
        link: 'https://github.com/Old-G/tesla-clone-rn',
      },
      {
        title: 'Twitter Clone (React Native)',
        img: process.env.PUBLIC_URL + '/assets/twitter.png',
        desc:
          'Twitter is a "microblogging" system that allows you to send and receive short posts called tweets. Tweets can be up to 140 characters long and can include links to relevant websites and resources. Twitter users follow other users.',
        link: 'https://github.com/Old-G/twitter-clone-rn',
      },
    ],
  },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/html.png',
        alt: 'html',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/css.png',
        alt: 'css',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/js.png',
        alt: 'js',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/git.png',
        alt: 'git',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/github.png',
        alt: 'github',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/gitlab.png',
        alt: 'gitlab',
      },

      {
        img: process.env.PUBLIC_URL + '/assets/tailwind.png',
        alt: 'tailwind',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/gulp.png',
        alt: 'gulp',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/webpack.png',
        alt: 'webpack',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/rn.png',
        alt: 'rn',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
  contact: {
    title: 'Ping Me!',
    desc:
      'I did 3 startups, they all went closed. One in the field of medicine, the second with his own idea, the third in the team in the field of sustainability, took second place at the startup weekend Moscow 2020. Got a lot of experience, and most importantly useful, any experience, this is an experience, especially a negative one. I understood the mistakes and move on! I really enjoyed writing code and creating cool user interfaces, so I am Frontend Developer, on the way to a Full-stack.',
    socials: [
      {
        alt: 'facebook',
        img: process.env.PUBLIC_URL + '/assets/facebook.png',
        url: 'https://www.facebook.com/gleb.light',
      },
      {
        alt: 'github',
        img: process.env.PUBLIC_URL + '/assets/github.png',
        url: 'https://github.com/Old-G',
      },
      {
        alt: 'link',
        img: process.env.PUBLIC_URL + '/assets/link.png',
        url: 'https://www.linkedin.com/in/gleb-zavalov/',
      },
      {
        alt: 'gmail',
        img: process.env.PUBLIC_URL + '/assets/gmail.png',
        url: 'mailto:oldg590@gmail.com',
      },
      {
        alt: 'telegram',
        img: process.env.PUBLIC_URL + '/assets/telegram1.png',
        url: 'https://t.me/OLDG590',
      },
    ],
    img:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    btn: {
      text: 'Download CV',
      url:
        'https://drive.google.com/file/d/1n1Cm5qzGGtG056AWvRYw-f4Xulcj8yQd/view?usp=sharing',
    },
  },
}
