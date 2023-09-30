import { FadeIn, FadeInStagger } from "@/components/motion/FadeIn";
import Parallax from "@/components/motion/Parallax";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-56">
        <h2 className="mb-10 text-5xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <FadeIn>
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae saepe ipsam quis perspiciatis modi sint assumenda alias
            voluptas unde neque.
          </p>
        </FadeIn>
        <FadeInStagger className="flex gap-8">
          <FadeIn className="aspect-square h-16 w-16 bg-red-700"></FadeIn>
          <FadeIn className="aspect-square h-16 w-16 bg-red-700"></FadeIn>
          <FadeIn className="aspect-square h-16 w-16 bg-red-700"></FadeIn>
          <FadeIn className="aspect-square h-16 w-16 bg-red-700"></FadeIn>
        </FadeInStagger>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-56">
        <h2 className="mb-10 text-5xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          saepe ipsam quis perspiciatis modi sint assumenda alias voluptas unde
          neque.
        </p>
        <Parallax className="aspect-square h-16 w-16 bg-red-700"></Parallax>
        <Parallax className="aspect-square h-16 w-16 bg-red-700"></Parallax>
        <Parallax className="aspect-square h-16 w-16 bg-red-700"></Parallax>
        <Parallax className="aspect-square h-16 w-16 bg-red-700"></Parallax>
      </div>

      <FadeInStagger className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-56">
        <FadeIn>
          <h2 className="mb-10 text-5xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae saepe ipsam quis perspiciatis modi sint assumenda alias
            voluptas unde neque.
          </p>
        </FadeIn>
        <FadeIn className="aspect-square h-16 w-16 bg-red-700">x</FadeIn>
        <FadeIn className="aspect-square h-16 w-16 bg-red-700">x</FadeIn>
        <FadeIn className="aspect-square h-16 w-16 bg-red-700">x</FadeIn>
        <FadeIn className="aspect-square h-16 w-16 bg-red-700">x</FadeIn>
      </FadeInStagger>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-56">
        <h2 className="mb-10 text-5xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          saepe ipsam quis perspiciatis modi sint assumenda alias voluptas unde
          neque.
        </p>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-56">
        <h2 className="mb-10 text-5xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          saepe ipsam quis perspiciatis modi sint assumenda alias voluptas unde
          neque.
        </p>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
        <div className="aspect-square h-16 w-16 bg-red-700"></div>
      </div>
    </main>
  );
}
