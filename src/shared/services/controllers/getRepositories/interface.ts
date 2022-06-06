

export interface RepositoriesInputModel {
  userName: string;
  skip?: number;
  take? : number;
}


export interface Project {
  id: number;
  name: string;
  full_name: string;
  private: string;  
  html_url: string;
  description: string;
  url: string;
  collaborators_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  clone_url: string;
  stargazers_count: number;
}