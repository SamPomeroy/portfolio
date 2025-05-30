import readingListImage from '../assets/images/desktop.avif';
import newsAggregatorImage from '../assets/images/newsAgg.gif';
import portfolioImage from '../assets/images/portfolioScreenshot.png';

export const projects = [
  {
    id: 1,
    title: 'News Aggregator',
    description: 'A React app that collects and displays the latest news articles from a third part API, allowing users to filter by category and search for specific topics.',
    image: newsAggregatorImage,
    link: 'https://github.com/SamPomeroy/news-aggregator',
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'Reading List Organizer',
    description: 'A tool to manage your reading list with search functionality that returns the Title, Author, ISBN and first sentence.',
    image: readingListImage,
    link: 'https://github.com/SamPomeroy/reading-list-organizer',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'This portfolio built with React and Tailwind CSS, showcasing my skills.',
    image: portfolioImage,
    link: 'https://github.com/SamPomeroy/portfolio',
    category: 'Frontend',
  },
];
