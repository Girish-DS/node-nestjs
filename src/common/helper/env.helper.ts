import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const filename: string = env ? `${env.trim()}.env` : 'development.env';
  const filePath: string = resolve(`${dest}/${filename}`);

  return filePath;
}
