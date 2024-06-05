export interface Project {
  title: string;
  description: string;
  image: string;
  detail: ProjectDetail;
}
export interface ProjectDetail {
  descriptions: string;
  technologies: string;
  members: string;
  role: string;
  demo: string;
  github: string;
}
