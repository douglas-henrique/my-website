export async function getPosts() {
  const res = await fetch('https://dev.to/api/articles?username=dougyoshii');
  if (!res.ok) {
    throw new Error('Failed to fetch Posts');
  }
  return res.json();
}
