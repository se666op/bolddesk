import got from 'got';

const URL = 'https://www.bolddesk.com/?via=amine';
const CODE = 'ACTIVATE_DEAL';

async function fetchPage() {
  try {
    const response = await got(URL);
    console.log(`BoldDesk page fetched — status: ${response.statusCode}`);
    console.log(`Content length: ${response.body.length} bytes`);
  } catch (err) {
    console.error('Fetch failed:', err.message);
  }
}

console.log(`BoldDesk — Use code: ${CODE}`);
console.log(`URL: ${URL}`);
fetchPage();
