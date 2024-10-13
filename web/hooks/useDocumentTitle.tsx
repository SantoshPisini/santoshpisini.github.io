import { useEffect } from "react";

/**
 * Custom hook to set the document title.
 * @param {string} title - The title to set for the document.
 */
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
