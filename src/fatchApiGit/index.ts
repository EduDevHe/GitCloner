import { RepoObject } from "../types/resposeGitApi.js";

const repos = async (): Promise<RepoObject[]> => {
  const getRepos = await fetch("https://api.github.com/users/EduDevHe/repos");
  const allRepos: RepoObject[] = await getRepos.json();
  return allRepos;
};

export default repos;
