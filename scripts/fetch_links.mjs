import https from 'https';

const urls = [
  'https://postimg.cc/zVyv3Khx',
  'https://postimg.cc/HVrnjXMN',
  'https://postimg.cc/BXjbtHD0',
  'https://postimg.cc/LnJ5hLPb'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let raw = '';
    res.on('data', c => raw += c);
    res.on('end', () => {
      const match = raw.match(/<meta property="?og:image"? content="([^"]+)"/i);
      console.log(url + ' -> ' + (match ? match[1] : 'Not found'));
    });
  });
});
