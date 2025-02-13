// echo.js
import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Attach Pusher to the global window object for Echo to use
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "reverb",
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 8080,
    forceTLS: false,
    enabledTransports: ["ws"],
    disableStats: true,
    cluster: false,
});
