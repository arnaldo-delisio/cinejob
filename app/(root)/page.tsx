import Image from "next/image";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Cinema Senza Confini: Collabora, Crea, Conquista.</h1>
          <p className="p-regular-20 md:p-regular-24">Rivoluziona il mondo del cinema: connettiti con talenti e professionisti per trasformare in realtà le tue idee.</p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href={`/${userId}/dashboard/profile/personal-info`}>
                Explore Now
              </Link>
            </Button>
        </div>

        <Image 
          src="/assets/images/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />
      </div>
    </section>
    </>
  );
}
