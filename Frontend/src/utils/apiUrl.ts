let DOMAIN = 'http://localhost:3000';

// apiUrl is a utility function that returns the URL for the API endpoint based on the environment.
// This is used to configure the API endpoint in the frontend.
// we only have one environment, so we can just return the domain.

export default function apiUrl(path: string) {
  return `${DOMAIN}${path}`;
}
