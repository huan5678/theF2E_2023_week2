import Image from 'next/image';

type TipCardProps = {
  content: string;
  image: string;
  imageSize: {
    width: number;
    height: number;
  };
};

const TipCard = ({content, image, imageSize}: TipCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg bg-primary-light-hover">
      <div className="h-1/2">
        <p className="flex gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V12"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8H12.01"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2 text-xl font-semibold leading-6">小提示</span>
        </p>
        <p>{content}</p>
      </div>
      <div className="grid place-content-center h-[6.4375rem]">
        <Image src={image} width={imageSize.width} height={imageSize.height} alt={content} />
      </div>
    </div>
  );
};

export default TipCard;
