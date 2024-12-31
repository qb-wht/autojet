export type ClassNameMods = Record<string, boolean | string | undefined>;

export function cn(className: string | Iterable<string>, ...classNames: string[]) {
  if (typeof className === 'string') {
    return new ClassName([className, ...classNames]);
  }

  return new ClassName([...className, ...classNames]);
}

export class ClassName {
  constructor(private classes: string[]) {}

  add(className: string): ClassName {
    this.classes.push(className);
    return this;
  }

  build(mods?: ClassNameMods): string {
    if (mods) {
      this.classes = this.classes.concat(
        Object.entries(mods)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, value]) => Boolean(value))
          .map(([className]) => String(className))
      );
    }

    return this.classes.join(' ');
  }
}
