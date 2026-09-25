# Authentication

All authentication and session handling in this app is handled by **Clerk**.
Do not introduce another auth method (NextAuth/Auth.js, Supabase Auth,
Firebase Auth, custom JWT/session code, etc.). If a feature needs auth, use
Clerk's APIs and components.

## Core rules

- **Clerk only.** Never add another auth library or hand-roll session/cookie
  logic.
- **`/dashboard` is a protected route.** It must not be reachable by a signed-out
  user.
- **Signed-in users are redirected away from the homepage.** Visiting `/` while
  authenticated redirects to `/dashboard`.
- **Sign in / sign up always open as modals**, never as a dedicated full-page
  navigation, when triggered from within the app UI.

## Protecting `/dashboard`

Enforce protection in `proxy.ts` (this project's Next.js 16 equivalent of
`middleware.ts` — never create `middleware.ts`) using `clerkMiddleware` with
`auth.protect()`:

```typescript
// proxy.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
```

`auth.protect()` redirects signed-out users to the sign-in flow automatically.
Do not duplicate this check with a hand-rolled cookie/session guard in layouts
or pages.

## Redirecting signed-in users away from the homepage

In the `/` Server Component, check `auth()` and redirect authenticated users:

```typescript
// app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) {
    redirect("/dashboard");
  }
  // ...signed-out homepage content
}
```

## Sign in / sign up as modals

Trigger auth from `<SignInButton>` / `<SignUpButton>` with `mode="modal"`
rather than linking to `/sign-in` or `/sign-up`:

```tsx
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal" />
<SignUpButton mode="modal" />
```

The catch-all `app/sign-in/[[...sign-in]]/page.tsx` and
`app/sign-up/[[...sign-up]]/page.tsx` routes must still exist as a fallback for
direct navigation and for Clerk's internal redirects, but in-app entry points
(header, CTAs, protect-route redirects) should use the modal buttons above, not
links to those pages.

## Reference

For deeper Clerk API/CLI usage, see the `.agents/skills/clerk-*` skills
(`clerk-setup`, `clerk-custom-ui`, `clerk-nextjs-patterns`, `clerk-orgs`,
`clerk-webhooks`).
