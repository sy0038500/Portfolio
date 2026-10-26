import { useEffect, useRef, useState } from "react";
import W_Overview from "./W_Overview";
import W_Outcome from "./W_Outcome";
import "./W_Page.css";

/** 두 Figma 페이지를 순서대로 연결하고, 세 이미지의 공통 확대 팝업을 관리합니다. */
export default function W_Page() {
  const [preview, setPreview] = useState(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  const openPreview = (src, title, event) => {
    openerRef.current = event.currentTarget;
    setPreview({ src, title });
  };

  useEffect(() => {
    if (!preview) return undefined;

    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [preview]);

  const closePreview = () => dialogRef.current?.close();

  const handleDialogClose = () => {
    setPreview(null);
    requestAnimationFrame(() => openerRef.current?.focus());
  };

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) closePreview();
  };

  return (
    <main className="w-page" aria-label="WELL-Being 사월마을 도시설계 프로젝트">
      <W_Overview onPreview={openPreview} />
      <W_Outcome onPreview={openPreview} />

      <dialog
        ref={dialogRef}
        className="w-page__lightbox"
        aria-label={preview ? `${preview.title} 확대 이미지` : "이미지 확대"}
        onClose={handleDialogClose}
        onClick={handleBackdropClick}
      >
        <div className="w-page__lightbox-panel">
          <div className="w-page__lightbox-toolbar">
            <strong>{preview?.title}</strong>
            <button
              ref={closeRef}
              type="button"
              className="w-page__lightbox-close"
              onClick={closePreview}
              aria-label="확대 이미지 닫기"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {preview && (
            <img
              className={`w-page__lightbox-image${preview.src.endsWith("W_Panel.png") ? " w-page__lightbox-image--panel" : ""}`}
              src={preview.src}
              alt={`${preview.title} 전체 이미지`}
            />
          )}
        </div>
      </dialog>
    </main>
  );
}
