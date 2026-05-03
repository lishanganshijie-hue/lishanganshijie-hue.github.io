var posts=["2026/05/03/这是测试内容/","2026/05/03/厉害厉害/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };