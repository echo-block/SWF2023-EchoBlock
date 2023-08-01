const Redis = require("ioredis");
const { REDIS_HOST, REDIS_PORT, REDIS_TTL, REDIS_TIMEOUT } = process.env;

let redis;
const _ttl = parseInt(process.env.REDIS_TTL) || 3600;
const _timeout = parseInt(process.env.REDIS_TIMEOUT) || 3000;

(async () => {
    redis = new Redis({
        host: REDIS_HOST,
        port: REDIS_PORT,
        commandTimeout: _timeout
    });
    redis.on("error", (err) => {
        console.log(err);
    });
})();

async function getCache(key) {
    try {
        const cacheData = await redis.get(key);
        return cacheData;
    } catch (err) {
        return null;
    }
}

function setCache(key, data, ttl = _ttl) {
    try {
        redis.set(key, JSON.stringify(data), "EX", ttl);
    } catch (err) {
        return null;
    }
}

function removeCache(key) {
    try {
        redis.del(key);
    } catch (err) {
        return null;
    }
}

module.exports = { getCache, setCache, removeCache };