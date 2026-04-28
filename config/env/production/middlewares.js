module.exports = [
    "strapi::errors",
    "strapi::security",
    {
        name: "strapi::cors",
        config: {
            origin: [
                "https://enginemover.com",
                "https://www.enginemover.com",
                "https://admin.enginemover.com", // optional, safe
                "http://localhost:3000",         // dev
                "https://matchworkers.com",
                "https://admin.matchworkers.com",
                "https://panel.matchworkers.com",
                "http://65.109.228.161:3000"

            ],
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            headers: [
                "Content-Type",
                "Authorization",
                "Origin",
                "Accept",
                "Strapi-Response-Format", // IMPORTANT (you’re sending this)
            ],
            credentials: true, // keep only if you really use cookies auth
            keepHeaderOnError: true,
        },
    },
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
