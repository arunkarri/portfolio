import WorkExperience from './pages/work-exp/work-exp';
import About from './pages/about/about';
import SkillSet from './pages/skillset/skillset';
import Blogs from './pages/blogs/blogs';
import Projects from './pages/projects/projects';

const routes = [
  { route: 'about', component: About, label: 'About' },
  { route: 'work-ex', component: WorkExperience, label: 'Work Experience' },
  { route: 'skillset', component: SkillSet, label: 'SkillSet' },
  { route: 'blogs', component: Blogs, label: 'Blogs' },
  { route: 'projects', component: Projects, label: 'Projects' },
];

export default routes;
