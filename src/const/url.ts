function gitReposUrl(str: string) {
  return `https://api.github.com/users/${str}/repos`;
}

export default gitReposUrl;
