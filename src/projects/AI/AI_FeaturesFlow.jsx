import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./AI_FeaturesFlow.css";

const EMPTY_LINES = {
  stem: "",
  bar: "",
  direct: "",
  emotion: "",
  weather: "",
  toGemini: "",
  directToOutput: "",
  geminiToOutput: "",
  weatherToOutput: "",
};

export default function AI_FeaturesFlow() {
  const flowRef = useRef(null);
  const canvasRef = useRef(null);
  const nodesRef = useRef({});

  const [lines, setLines] = useState(EMPTY_LINES);
  const [bounds, setBounds] = useState({
    width: 1,
    height: 1,
  });

  // 실제 노드 위치를 측정해 연결선 생성
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frame = 0;

    const draw = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const root = canvas.getBoundingClientRect();

        const ids = [
          "input",
          "direct",
          "emotion",
          "weather",
          "gemini",
          "output",
        ];

        const rects = {};

        for (const id of ids) {
          const el = nodesRef.current[id];
          if (!el) return;

          // 등장 애니메이션과 무관한 원래 레이아웃 좌표
          const x = el.offsetLeft - el.offsetWidth / 2;
          const y = el.offsetTop;
          const w = el.offsetWidth;
          const h = el.offsetHeight;

          rects[id] = {
            x,
            y,
            w,
            h,
            cx: x + w / 2,
            cy: y + h / 2,
            bottom: y + h,
            right: x + w,
          };
        }

        const {
          input,
          direct,
          emotion,
          weather,
          gemini,
          output,
        } = rects;

        const forkY = (input.bottom + direct.y) / 2;

        const small = window.matchMedia(
          "(max-width: 767px)"
        ).matches;

        const bendY =
          output.y -
          Math.max(
            18,
            (output.y -
              Math.max(direct.bottom, weather.bottom)) *
              0.16
          );

        const outLeft = output.x + output.w * 0.2;
        const outRight = output.x + output.w * 0.8;

        setBounds({
          width: Math.max(root.width, 1),
          height: Math.max(root.height, 1),
        });

        setLines({
          stem:
            `M ${input.cx} ${input.bottom} V ${forkY}`,

          bar:
            `M ${direct.cx} ${forkY} H ${weather.cx}`,

          direct:
            `M ${direct.cx} ${forkY} V ${direct.y}`,

          emotion:
            `M ${emotion.cx} ${forkY} V ${emotion.y}`,

          weather:
            `M ${weather.cx} ${forkY} V ${weather.y}`,

          toGemini:
            `M ${emotion.cx} ${emotion.bottom} V ${gemini.y}`,

          directToOutput: small
            ? `M ${direct.cx} ${direct.bottom}
               V ${bendY} H ${outLeft} V ${output.y}`
            : `M ${direct.cx} ${direct.bottom}
               V ${output.cy} H ${output.x}`,

          geminiToOutput:
            `M ${gemini.cx} ${gemini.bottom} V ${output.y}`,

          weatherToOutput: small
            ? `M ${weather.cx} ${weather.bottom}
               V ${bendY} H ${outRight} V ${output.y}`
            : `M ${weather.cx} ${weather.bottom}
               V ${output.cy} H ${output.right}`,
        });
      });
    };

    draw();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(draw)
        : null;

    resizeObserver?.observe(canvas);

    Object.values(nodesRef.current).forEach((el) => {
      if (el) resizeObserver?.observe(el);
    });

    window.addEventListener("resize", draw);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", draw);
    };
  }, []);

  // 스크롤 진입 애니메이션
  useEffect(() => {
    const element = flowRef.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const setNode = (id) => (element) => {
    nodesRef.current[id] = element;
  };

  return (
    <section
      className="ai-features-flow"
      aria-label="Main Features and AI Flow"
    >
      {/* ================================
          01. Main Features
      ================================= */}

      <div className="ai-features-flow__features">
        <h2 className="ai-features-flow__eyebrow">
          Main Features
        </h2>

        <div className="ai-features-flow__cards">

          {/* AI Quote */}
          <article className="ai-feature-card ai-feature-card--quote">
            <div className="ai-feature-card__image ai-feature-card__image--quote">
              <img
                src="/assets/AI/pf_pro3_ai@2x.png"
                alt="AI 맞춤 명언 예시"
                loading="lazy"
              />
            </div>

            <div className="ai-feature-card__copy">
              <h3>AI Quote</h3>
              <p>
                기분과 오늘의 할 일을 바탕으로
                맞춤 명언을 제공합니다.
              </p>
            </div>
          </article>

          {/* Mood Theme */}
          <article className="ai-feature-card ai-feature-card--mood">
            <div className="ai-feature-card__image ai-feature-card__image--mood">
              <img
                src="/assets/AI/pf_pro3_mood@2x.png"
                alt="기분에 따른 테마 선택 화면"
                loading="lazy"
              />
            </div>

            <div className="ai-feature-card__copy">
              <h3>Mood Theme</h3>
              <p>
                입력한 감정에 따라 배경 테마와
                강조 색상이 변화합니다.
              </p>
            </div>
          </article>

          {/* Widget Control */}
          <article className="ai-feature-card ai-feature-card--widget">
            <div className="ai-feature-card__image ai-feature-card__image--widget">
              <img
                src="/assets/AI/pf_pro3_system@2x.png"
                alt="위젯 추가 및 레이아웃 편집 메뉴"
                loading="lazy"
              />
            </div>

            <div className="ai-feature-card__copy">
              <h3>Widget Control</h3>
              <p>
                위젯을 추가·숨김 처리하고
                크기와 위치를 조정할 수 있습니다.
              </p>
            </div>
          </article>

          {/* Focus & Task */}
          <article className="ai-feature-card ai-feature-card--focus">
            <div className="ai-feature-card__focus-images">
              <div className="ai-feature-card__image ai-feature-card__image--focus">
                <img
                  src="/assets/AI/pf_pro3_focus@2x.png"
                  alt="오늘의 핵심 목표 위젯"
                  loading="lazy"
                />
              </div>

              <div className="ai-feature-card__image ai-feature-card__image--memo">
                <img
                  src="/assets/AI/pf_pro3_memo@2x.png"
                  alt="오늘 할 일 위젯"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="ai-feature-card__copy">
              <h3>Focus &amp; Task</h3>
              <p>
                집중 타이머와 오늘 할 일을 함께
                확인하며 하루의 흐름을 관리합니다.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* ================================
          02. AI Flow
      ================================= */}

      <div
        className="ai-features-flow__flow"
        ref={flowRef}
      >
        <h2 className="ai-features-flow__eyebrow">
          AI Flow
        </h2>

        <div
          className="ai-features-flow__canvas"
          ref={canvasRef}
        >
          {/* 실제 노드 좌표 기반 SVG */}
          <svg
            className="ai-features-flow__svg"
            width="100%"
            height="100%"
            viewBox={`0 0 ${bounds.width} ${bounds.height}`}
            aria-hidden="true"
          >
            <defs>
              <marker
                id="ai-flow-arrowhead"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
                markerUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0 L10 5 L0 10 Z"
                  fill="#ffa500"
                />
              </marker>
            </defs>

            {/* Input → 3개 분기 */}
            <g className="ai-flow-paths ai-flow-paths--branch">
              <path pathLength="1" d={lines.stem} />
              <path pathLength="1" d={lines.bar} />
              <path
                pathLength="1"
                d={lines.direct}
                markerEnd="url(#ai-flow-arrowhead)"
              />
              <path
                pathLength="1"
                d={lines.emotion}
                markerEnd="url(#ai-flow-arrowhead)"
              />
              <path
                pathLength="1"
                d={lines.weather}
                markerEnd="url(#ai-flow-arrowhead)"
              />
            </g>

            {/* Emotion → Gemini */}
            <g className="ai-flow-paths ai-flow-paths--middle">
              <path
                pathLength="1"
                d={lines.toGemini}
                markerEnd="url(#ai-flow-arrowhead)"
              />
            </g>

            {/* 최종 Output */}
            <g className="ai-flow-paths ai-flow-paths--output">
              <path
                pathLength="1"
                d={lines.directToOutput}
                markerEnd="url(#ai-flow-arrowhead)"
              />
              <path
                pathLength="1"
                d={lines.geminiToOutput}
                markerEnd="url(#ai-flow-arrowhead)"
              />
              <path
                pathLength="1"
                d={lines.weatherToOutput}
                markerEnd="url(#ai-flow-arrowhead)"
              />
            </g>
          </svg>

          {/* 각 노드 독립 생성 */}

          <div
            ref={setNode("input")}
            className="ai-flow-node ai-flow-node--input"
          >
            <strong>User Input</strong>
            <span>기분 · 할 일 · 위치</span>
          </div>

          <div
            ref={setNode("direct")}
            className="ai-flow-node ai-flow-node--direct"
          >
            <strong>Direct Update</strong>
            <span>할 일·기분 즉시 반영</span>
          </div>

          <div
            ref={setNode("emotion")}
            className="ai-flow-node ai-flow-node--emotion"
          >
            <strong>Emotion Matching</strong>
            <span>감정 키워드 매칭</span>
          </div>

          <div
            ref={setNode("weather")}
            className="ai-flow-node ai-flow-node--weather"
          >
            <strong>Weather API</strong>
            <span>현재 날씨 연동</span>
          </div>

          <div
            ref={setNode("gemini")}
            className="ai-flow-node ai-flow-node--gemini"
          >
            <strong>Gemini API</strong>
            <span>맞춤 명언 생성</span>
          </div>

          <div
            ref={setNode("output")}
            className="ai-flow-node ai-flow-node--output"
          >
            <strong>Dashboard Output</strong>
            <span>
              명언 · 테마 · 날씨 · 위젯 정보 반영
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
