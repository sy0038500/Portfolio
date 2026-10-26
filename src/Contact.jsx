import { useEffect, useRef } from "react";
import "./Contact.css";

// 메인 포트폴리오 마지막 섹션: Header의 #contact 메뉴와 연결
function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // 상세 프로젝트(#/projects/...)에서 Contact를 눌러 홈으로 돌아와도 위치 이동
    if (window.location.hash !== "#contact") return;

    const frame = window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ block: "start", behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact__inner">
        <p className="contact__eyebrow">LEE SOOYEON - PORTFOLIO</p>

        <div className="contact__main">
          <div className="contact__message">
            <h2 id="contact-title" className="contact__title">
              Thank you.
            </h2>
            <span className="contact__accent" aria-hidden="true" />
          </div>

          <div className="contact__visual">
            <img
              src="assets/about-art.png"
              alt="베이지색 건축물, 계단, 노란색 사각형이 어우러진 추상 일러스트"
              width="704"
              height="704"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="contact__footer">
          <p className="contact__role">UI/UX Design · Web Publishing</p>
          <a
            className="contact__email"
            href="mailto:sy.0038500@gmail.com"
            aria-label="이메일 sy.0038500@gmail.com으로 연락하기"
          >
            CONTACT: sy.0038500@gmail.com
          </a>
        </div>
        <div className="contact__bottom-rule" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Contact;
