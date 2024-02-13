import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
// publicRoutes: ["/", "/((?!api|trpc))(_next.*|.+\.[\w]+$)"], 
// ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)","/", "/api/tasks"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};


   