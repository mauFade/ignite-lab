import { Link, useParams } from "react-router-dom";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}
const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const formattedAvailableDate = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  });

  const isActive = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray1-400">{formattedAvailableDate}</span>

      <div
        className={classNames("rounded border border-gray1-500 p-4 mt-2 group-hover:border-green1-600", {
          "bg-green1-600": isActive,
        })}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames("text-sm text-blueIsh-500 font-medium flex items-center gap-2", {
                "text-white": isActive,
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={classNames("text-sm text-orange-500 font-medium flex items-center gap-2", {
                "text-white": isActive,
              })}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames("text-sm py-[2px] px-2 rounded border border-green1-500 font-bold", {
              "text-white border-white": isActive,
            })}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={classNames("block text-gray1-400 mt-5", {
            "text-white": isActive,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
