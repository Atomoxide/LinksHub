// import zh from './zh.json';

import { useGlobal } from "context/GlobalContext";


export function ZH(text: string): string {
    const zh = useGlobal().i18nZH;
    return (zh as Record<string, string>)[text] || text;
}