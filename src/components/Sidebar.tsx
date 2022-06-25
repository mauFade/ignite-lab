import { useGetlessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

const Sidebar = () => {
  const { data } = useGetlessonsQuery();

  return (
    <aside className="w-[348px] bg-gray1-600 p-6 border-l border-gray1-500">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray1-500 block">Cronograma de aulas</span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
