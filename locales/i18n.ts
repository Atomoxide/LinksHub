import zh from './zh.json';


export function ZH(text: string): string {
    return (zh as Record<string, string>)[text] || text;
}