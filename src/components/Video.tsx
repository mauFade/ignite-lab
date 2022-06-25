import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning, Image, FileArrowDown, CaretRight } from "phosphor-react";

import { useGetLessonBySlugQuery } from "../graphql/generated";

import "@vime/core/themes/default.css";
interface VideoProps {
  lessonSlug: string;
}

const Video = (props: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="text-gray1-300 mt-4 leading-relaxed">{data.lesson.description}</p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 rounded-full border-2 border-blueIsh-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="avatar"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray1-400 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green1-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green1-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>

            <a
              href=""
              className="p-4 text-sm bg-transparent flex items-center rounded font-bold uppercase gap-2 justify-center border border-blueIsh-500 text-blueIsh-500 hover:bg-blueIsh-500 hover:text-gray1-800 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="mt-20 gap-8 flex flex-row">
          <a className="rounded bg-gray1-700 flex items-stretch overflow-hidden gap-6 hover:bg-gray1-500 transition-colors hover:cursor-pointer">
            <div className="bg-green1-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray1-400 mt-2">
                Acesse o material complementar para acelerar seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center text-blueIsh-500">
              <CaretRight size={24} />
            </div>
          </a>

          <a className="rounded bg-gray1-700 flex items-stretch overflow-hidden gap-6 hover:bg-gray1-500 transition-colors hover:cursor-pointer">
            <div className="bg-green1-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers do evento</strong>
              <p className="text-sm text-gray1-400 mt-2">
                Baixe wallpapers exclusivo do Ignite Lab e personalize sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center text-blueIsh-500">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
