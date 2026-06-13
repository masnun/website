import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Path-based router built on the History API. Replaces the old hash router so
// every route is a real, crawlable URL (e.g. /projects) backed by a prerendered
// HTML file. Internal <a href="/..."> clicks are intercepted for SPA-style
// navigation; everything else (new tab, external, modified click) falls through
// to a normal browser navigation, which still works because each route is a
// static file.

type RouterCtx = { route: string; navigate: (to: string) => void };

const Ctx = createContext<RouterCtx>({ route: "/", navigate: () => {} });

// Normalize to "<pathname-without-trailing-slash><?search>". Keeps "/" as-is so
// the home route matches whether the server served "/" or "/index.html".
export function normalize(full: string): string {
  const [rawPath, search] = full.split("?");
  let pathname = rawPath || "/";
  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, "") || "/";
  return search ? `${pathname}?${search}` : pathname;
}

function currentRoute(): string {
  return normalize(window.location.pathname + window.location.search);
}

export function RouterProvider({
  initialPath,
  children,
}: {
  initialPath: string;
  children: ReactNode;
}) {
  // Initial value must match the server-rendered route for clean hydration.
  const [route, setRoute] = useState(() => normalize(initialPath));

  useEffect(() => {
    setRoute(currentRoute());
    const onPop = () => setRoute(currentRoute());
    window.addEventListener("popstate", onPop);

    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (
        !href ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        !href.startsWith("/") ||
        href.startsWith("//")
      ) {
        return;
      }
      e.preventDefault();
      const to = normalize(href);
      if (to !== currentRoute()) {
        window.history.pushState({}, "", href);
        setRoute(to);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setRoute(normalize(to));
    window.scrollTo(0, 0);
  };

  return <Ctx.Provider value={{ route, navigate }}>{children}</Ctx.Provider>;
}

export function useRoute(): string {
  return useContext(Ctx).route;
}

export function useNavigate(): (to: string) => void {
  return useContext(Ctx).navigate;
}
