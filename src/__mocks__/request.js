const images = [
  'https://images.unsplash.com/photo-1560410779-a931d1981ba8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc1NTI0fQ',
  'https://images.unsplash.com/photo-1560414239-dcdf7d8d0226?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc1NTI0fQ',
  'https://images.unsplash.com/photo-1560393927-5a94beeaac7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjc1NTI0fQ',
];

export default function request(url) {
  return new Promise((resolve, reject) =>
    process.nextTick(() => {
      if (url === '/unsplash') {
        return resolve(images);
      }
      return reject(new Error('Images not found'));
    })
  );
}
