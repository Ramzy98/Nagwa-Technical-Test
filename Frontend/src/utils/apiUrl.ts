let DOMAIN = 'http://localhost:3000';

export default function apiUrl(path: string) {
  return `${DOMAIN}${path}`;
}
