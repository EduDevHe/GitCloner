import chalk from "chalk";
import { RepoObject } from "./types/resposeGitApi";

export async function gitCloner() {
  const repos = async (): Promise<RepoObject[]> => {
    const getRepos = await fetch("https://api.github.com/users/EduDevHe/repos");
    const allRepos: RepoObject[] = await getRepos.json();
    return allRepos;
  };

  const data = await repos();
  console.log(chalk.blue("hello world"));
  console.log(data);
}
