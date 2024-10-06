import { useReducer, useCallback } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const initialState = {
  isDownloading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "START_DOWNLOADING":
      return { ...state, isDownloading: true, error: null };
    case "DOWNLOAD_SUCCESS":
      return { ...state, isDownloading: false };
    case "DOWNLOAD_ERROR":
      return { ...state, isDownloading: false, error: action.payload };
    default:
      return state;
  }
}

const PDFDownloader = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const downloadPDF = useCallback(() => {
    dispatch({ type: "START_DOWNLOADING" });
    const resumeElement = document.querySelector(".resume-container");

    if (resumeElement) {
      html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
      })
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/jpeg", 1.0);
          const pdf = new jsPDF("p", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 30;

          pdf.addImage(
            imgData,
            "JPEG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );
          pdf.save("Your Resume by Résumate.pdf");
          dispatch({ type: "DOWNLOAD_SUCCESS" });
        })
        .catch((error) => {
          console.error("PDF downloading failed:", error);
          dispatch({ type: "DOWNLOAD_ERROR", payload: error.message });
        });
    } else {
      dispatch({
        type: "DOWNLOAD_ERROR",
        payload: "Resume not found.",
      });
    }
  }, []);

  return children({
    downloadPDF,
    isDownloading: state.isDownloading,
    error: state.error,
  });
};

export default PDFDownloader;
