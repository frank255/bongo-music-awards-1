import adminRoutes from "./admin";
import artistRoutes from "./artist";
import otherRoutes from "./others";

const routes = [
...adminRoutes,
...artistRoutes,
...otherRoutes,
];
export default routes
