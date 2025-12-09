import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

interface Props {
  pageNumber: number;
  currentPage:number
}

const Pagination = ({ pageNumber, currentPage }: Props) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {currentPage !==1 && <div className="w-9 aspect-square bg-gray-200 flex items-center justify-center rounded-sm hover:bg-amber-400">
        <MdNavigateNext size={20} />
      </div>}

      {[...Array(pageNumber)].map((_, index) => (
        <Link
          href={`/?page=${index + 1}`}
          key={index}
          className="w-9 aspect-square bg-gray-200 flex items-center justify-center rounded-sm hover:bg-amber-400"
        >
          {index + 1}
        </Link>
      ))}
      {currentPage !== pageNumber && <div className="w-9 aspect-square bg-gray-200 flex items-center justify-center rounded-sm hover:bg-amber-400">
        <MdNavigateBefore size={20} />
      </div>}
    </div>
  );
};

export default Pagination;
