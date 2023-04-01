const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-gray-500 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center sm:hover:dark:shadow-black sm:hover:shadow-lg">
      {image && <img className="sm:p-4" src={image} />}{" "}
      {/* se a imagem existir adicione esses atributos */}
      {image && alt && <span className="sr-only">{alt}</span>}{" "}
      {/* se a imagem tiver um texto alternativo ele vai aparecer somente para um leitor de tela -- acessibilidade */}
      <h3 className="text-xl text-sete-200 dark:text-gray-200 font-bold p-3">
        {title}
      </h3>
      <div className="w-full pr-5 flex gap-2 justify-end">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-sete-100 dark:bg-gray-100 px-4 py-1 rounded-full text-gray-200 dark:text-gray-900 text-xs font-bold uppercase hover:bg-sete-200 hover:scale-110"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p key={index} className="text-sete-200 dark:text-gray-300">
            {content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Article;
