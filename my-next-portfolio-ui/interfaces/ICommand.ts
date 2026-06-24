export interface ICommand {
    prefixes: Array<string>;
    path: string;
    flags: Array<string>;
    postFixes: Array<ICommand>;
}