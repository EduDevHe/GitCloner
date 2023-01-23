var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from "chalk";
export function gitCloner() {
    return __awaiter(this, void 0, void 0, function* () {
        const repos = () => __awaiter(this, void 0, void 0, function* () {
            const getRepos = yield fetch("https://api.github.com/users/EduDevHe/repos");
            const allRepos = yield getRepos.json();
            return allRepos;
        });
        const data = yield repos();
        console.log(chalk.blue("hello world"));
        console.log(data);
    });
}
