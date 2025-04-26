import ListButton, { ListButtonProps } from "./list_button";

interface ListProps {
  title: string;
  content: ListButtonProps[] | string;
}

export default function List({ title, content }: ListProps) {
  const isString = typeof content === "string";

  return (
    <section className="flex flex-col justify-start items-start w-[20%] h-[60%] gap-2">
      <p className="font-bold relative after:content-[''] after:block after:w-1/3 after:h-[2px] after:bg-primary after:mt-1">
        {title}
      </p>
      {isString ? (
        <p className="text-justify">{content}</p>
      ) : (
        content.map((button, index) => (
          <ListButton key={index} {...button} />
        ))
      )}
    </section>
  );
}
