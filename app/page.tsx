import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const features = [
  {
    title: "Simple short links",
    description:
      "Turn long URLs into clean, shareable links in seconds with a straightforward flow.",
  },
  {
    title: "Secure access with Clerk",
    description:
      "Sign in securely and keep your link management experience protected behind authentication.",
  },
  {
    title: "Dashboard-first workflow",
    description:
      "Manage and organize your links from a dedicated dashboard built for everyday use.",
  },
];

export default async function Home() {
  const { isAuthenticated } = await auth();
  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-1 items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-4xl space-y-12 text-center">
        <section className="space-y-6">
          <p className="text-sm font-medium text-muted-foreground">LinkShortener Project</p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Shorten links, share faster, and stay organized.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            A modern link shortener built with Next.js, Clerk, and Neon Postgres to help
            you create and manage links with confidence.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <SignUpButton mode="modal">
              <Button size="lg">Get started</Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button variant="outline" size="lg">
                I already have an account
              </Button>
            </SignInButton>
          </div>
        </section>

        <section className="grid gap-4 text-left sm:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-border bg-card p-5 text-card-foreground"
            >
              <h2 className="text-base font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
