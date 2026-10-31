
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const store = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return store.getAll();
        },
        setAll(
          items: Array<{
            name: string;
            value: string;
            options?: Record<string, unknown>;
          }>
        ) {
          try {
            items.forEach(({ name, value, options }) => {
              store.set(name, value, options as any);
            });
          } catch {
            // Les cookies ne peuvent pas toujours être modifiés pendant le rendu.
          }
        },
      },
    }
  );
}
