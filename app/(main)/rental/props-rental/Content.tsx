"use client";
import Logo from "@/assets/rental-logo.svg";
import Container from "@/components/Container";
import Image from "next/image";
import { Cta } from "../../services/components/Cta";
import { useEffect, useState } from "react";
import { useGetPageContents } from "@/services/pages";
import { PropsRentalPageContent } from "@/types/pages";
import { Loader } from "@/components/Loader";
import clsx from "clsx";

export const Content = () => {
  const { data, isFetched } = useGetPageContents("props-rental");
  const page = data as PropsRentalPageContent;

  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    if (isFetched) {
      setTimeout(() => {
        setHideLoader(true);
      }, 100);
    }
  }, [isFetched]);

  return (
    <section>
      <Loader
        className={clsx({
          "opacity-0": hideLoader,
          "transition-opacity duration-500": true,
        })}
      />
      <Container className="mt-12 mb-12">
        <header>
          <div className="flex items-center justify-between mb-10">
            <div className="title">
              <h1 className="font-bold text-5xl leading-[100%] mb-2">
                {page?.sections?.hero?.headline?.value}
              </h1>
              <h2 className="font-normal text-xl leading-[100%]">
                {page?.sections?.hero?.subheadline?.value}
              </h2>
            </div>
            <Logo className="self-end max-md:hidden" />
          </div>
          <div
            className="text-2xl font-normal leading-[100%] md:w-[90%]"
            dangerouslySetInnerHTML={{
              __html: page?.sections?.hero?.description?.value as string,
            }}
          ></div>
        </header>
        <div className="flex gap-20 mt-[90px] max-md:gap-12 max-xl:flex-col">
          <Image
            src={
              page?.sections?.gallery?.firstImage?.value || "/rental/dummy.jpg"
            }
            width={1000}
            height={1000}
            className="w-full xl:w-[350px] h-[591px] object-cover"
            alt="image"
          />
          <Image
            src={
              page?.sections?.gallery?.secondImage?.value ||
              "/rental/dummy-2.png"
            }
            width={1000}
            height={1000}
            alt="image"
            className="w-full self-end h-[459px] object-cover"
          />
        </div>
        <div
          className="[&_ul]:list-[unset] [&_ul]:pl-6 mt-[90px] [&_ul]:m-0 [&_ul]:p-0 [&_li]:m-0 [&_li]:p-0 font-light text-2xl"
          dangerouslySetInnerHTML={{
            __html: page?.sections?.amenities?.amenitiesList?.value,
          }}
        ></div>
      </Container>
      <Cta
        data={{
          caption: page?.sections?.callToAction?.caption,
          title: page?.sections?.callToAction?.title as any,
        }}
      />
    </section>
  );
};
