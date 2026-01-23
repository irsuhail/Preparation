const rateLimitWindowMs = 60 * 1000; 
const maxRequests = 10;


const ipStore = new Map();

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!ipStore.has(ip)) {
    ipStore.set(ip, {
      count: 1,
      startTime: currentTime
    });
    return next();
  }

  const ipData = ipStore.get(ip);

  
  if (currentTime - ipData.startTime > rateLimitWindowMs) {
    ipStore.set(ip, {
      count: 1,
      startTime: currentTime
    });
    return next();
  }

  
  if (ipData.count >= maxRequests) {
    const retryAfter = Math.ceil(
      (rateLimitWindowMs - (currentTime - ipData.startTime)) / 1000
    );

    return res.status(429).json({
      message: 'Too many requests. Please try again later.',
      retryAfter: `${retryAfter}s`
    });
  }

  
  ipData.count += 1;
  next();
}

module.exports = rateLimiter;
