import React, { useState, useEffect } from 'react';

// Placeholder SVG data URIs to replace missing asset imports
const musicPointer =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='90' viewBox='0 0 13 90'/%3E";
const mask =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='102' height='18' viewBox='0 0 102 18'/%3E";
const musicPointer1 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='90' viewBox='0 0 13 90'/%3E";
const mask1 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='102' height='18' viewBox='0 0 102 18'/%3E";
const musicPointer2 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='90' viewBox='0 0 13 90'/%3E";
const mask2 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='102' height='18' viewBox='0 0 102 18'/%3E";
interface TextProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const FancySmancyProjectTitle = ({ className, style, children }: TextProps) => (
  <h2
    className={className}
    style={{
      width: '100%',
      maxWidth: '480px',
      height: 'auto',
      color: 'rgba(0, 0, 0, 1)',
      boxSizing: 'content-box',
      fontSize: '21px',
      fontFamily: '"Whitney Book", sans-serif',
      fontWeight: 500,
      lineHeight: '23.9px',
      letterSpacing: '0px',
      textAlign: 'left',
      margin: 0,
      ...style,
    }}
  >
    {children || 'Fancy smancy project title'}
  </h2>
);
const ProjectDescription = ({ className, style, children }: TextProps) => (
  <p
    className={className}
    style={{
      width: '100%',
      maxWidth: '480px',
      height: 'auto',
      color: 'rgba(0, 0, 0, 0.5)',
      boxSizing: 'content-box',
      fontSize: '21px',
      fontFamily: '"Whitney Book", sans-serif',
      fontWeight: 500,
      lineHeight: '23.9px',
      letterSpacing: '0px',
      textAlign: 'left',
      margin: 0,
      ...style,
    }}
  >
    {children ||
      'An ever-present brilliant friend and conversationalist, keeping you informed and organized, helping you be a better version of yourself.'}
  </p>
);
const MusicPlayerButton = ({
  audioName,
  pointerImg,
  maskImg,
  pointerOffset = '-48.66px',
  href,
  linkLabel = 'Live Demo Link',
}: {
  audioName: string;
  pointerImg: string;
  maskImg: string;
  pointerOffset?: string;
  href?: string;
  linkLabel?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    const m = window.matchMedia('(hover: hover)');
    setCanHover(m.matches);
    const fn = () => setCanHover(m.matches);
    m.addEventListener('change', fn);
    return () => m.removeEventListener('change', fn);
  }, []);
  const inner = (
    <div
      role={href ? undefined : 'button'}
      tabIndex={href ? undefined : 0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: 'auto',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        padding: '6px',
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.24)',
        boxSizing: 'border-box',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        outline: 'none',
        border: 'none',
        overflow: 'visible',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '6px 12px',
          gap: '8px',
          boxSizing: 'border-box',
          overflow: 'visible',
        }}
      >
        <img
          src={isHovered ? '/pause.svg' : 'https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/9e4e9fb4-b63d-4a63-a731-667d01a792ae.svg'}
          alt={isHovered ? 'Pause' : 'Play'}
          style={{
            width: '7.07px',
            height: '9px',
          }}
        />
        <span
          style={{
            height: '9px',
            color: 'rgba(0, 0, 0, 0.5)',
            boxSizing: 'content-box',
            fontSize: '8px',
            fontFamily: '"Whitney Book", sans-serif',
            fontWeight: 500,
            lineHeight: '9.1px',
          }}
        >
          {audioName}
        </span>
      </div>
      <div
        style={{
          width: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6px 12px',
          gap: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          boxSizing: 'border-box',
          borderRadius: '6px',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <span
          style={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'visible',
          }}
        >
          <span
            style={{
              color: 'rgba(0, 0, 0, 0.2)',
              fontSize: '16px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
            }}
          >
            {linkLabel}
          </span>
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: isHovered ? '100%' : '0%',
              overflow: 'hidden',
              transition: 'width 0.25s ease',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                color: 'rgba(0, 0, 0, 1)',
                fontSize: '16px',
                fontFamily: '"Whitney Book", sans-serif',
                fontWeight: 500,
              }}
            >
              {linkLabel}
            </span>
          </span>
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: isHovered ? '100%' : '0%',
              overflow: 'visible',
              transition: 'width 0.25s ease',
              pointerEvents: 'none',
            }}
          >
            <img
              src="/music-pointer.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '-12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '18px',
                height: '95px',
                opacity: canHover && isHovered ? 1 : 0,
                transition: 'opacity 0.25s ease',
                pointerEvents: 'none',
              }}
            />
          </span>
        </span>
        <div
          style={{
            width: '114px',
            height: '90.04px',
            position: 'absolute',
            left: '0px',
            top: pointerOffset,
            zIndex: 1,
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <img
            src={pointerImg}
            alt=""
            style={{
              width: '13px',
              height: '90.04px',
              opacity: isHovered ? 1 : 0,
              position: 'absolute',
              left: '0px',
              top: '0px',
              transition: 'opacity 0.2s ease',
            }}
          />
          <img
            src={maskImg}
            alt=""
            style={{
              width: '102px',
              height: '18px',
              position: 'absolute',
              left: '12px',
              top: '54.66px',
            }}
          />
        </div>
      </div>
    </div>
  );
  return (
    <div
      style={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '28px',
        paddingBottom: '12px',
        boxSizing: 'border-box',
        overflow: 'visible',
      }}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
};
const ExperienceLine = ({
  name,
  date,
  isPresent = false,
}: {
  name: string;
  date?: string;
  isPresent?: boolean;
}) => (
  <div
    style={{
      height: '27px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 8px',
      boxSizing: 'border-box',
      width: '100%',
      position: 'relative',
    }}
  >
    <img
      src="https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/e2d8e1c5-eb18-4dbf-8b07-374d2f5906b2.svg"
      alt=""
      style={{
        width: '100%',
        height: '26.5px',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 0,
      }}
    />
    <span
      style={{
        zIndex: 1,
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '16px',
        fontFamily: '"Whitney Book", sans-serif',
        fontWeight: 500,
      }}
    >
      {name}
    </span>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        zIndex: 1,
      }}
    >
      <span
        style={{
          color: 'rgba(0, 0, 0, 0.5)',
          fontSize: '13px',
          fontFamily: '"Whitney Book", sans-serif',
          fontWeight: 500,
        }}
      >
        {isPresent ? 'Present' : date}
      </span>
      {isPresent && (
        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/b33b088a-5e6a-4ada-ab4c-3728833039d0.svg"
          alt=""
          style={{
            width: '10.6px',
            height: '13.1px',
          }}
        />
      )}
    </div>
  </div>
);
export const MusicPlayerShowcase = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: '210px',
        paddingBottom: '40px',
        backgroundColor: 'rgba(231, 231, 231, 1)',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      />

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '120px',
          width: '100%',
          maxWidth: '520px',
          paddingLeft: '20px',
          paddingRight: '20px',
          boxSizing: 'border-box',
        }}
      >
        <header
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <h1
                style={{
                  margin: 0,
                  color: 'rgba(0, 0, 0, 1)',
                  fontSize: '32px',
                  fontFamily: '"Whitney Book", sans-serif',
                  fontWeight: 500,
                  lineHeight: '32px',
                }}
              >
                Danny Lan
              </h1>
              <h1
                style={{
                  margin: 0,
                  color: 'rgba(0, 0, 0, 1)',
                  fontSize: '32px',
                  fontFamily: '"ToneDeaf BB", sans-serif',
                  fontWeight: 400,
                  lineHeight: '32px',
                }}
              >
                bef
              </h1>
            </div>
            <p
              style={{
                margin: 0,
                color: 'rgba(0, 0, 0, 0.5)',
                fontSize: '21px',
                fontFamily: '"Whitney Book", sans-serif',
                fontWeight: 500,
                lineHeight: '23.9px',
              }}
            >
              Front-End Engineer
            </p>
          </div>

          <nav
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '60px',
            }}
          >
            <a
              href="https://github.com/ddlan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.2)',
                fontSize: '16px',
                fontFamily: '"Whitney Book", sans-serif',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.2)')}
            >
              Github
            </a>
            <a
              href="mailto:L.danny18725@gmail.com"
              style={{
                textDecoration: 'none',
                color: 'rgba(0, 0, 0, 0.2)',
                fontSize: '16px',
                fontFamily: '"Whitney Book", sans-serif',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.2)')}
            >
              Email
            </a>
          </nav>
        </header>

        <div
          style={{
            width: '100%',
            height: '400px',
            overflow: 'visible',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            touchAction: 'pan-y',
          }}
          aria-label="Guitar container"
        >
          <div
            style={{
              width: '85%',
              maxWidth: '100%',
              margin: '0 auto',
              transform: 'translateX(-80px) scale(1.5)',
              transformOrigin: 'center center',
              touchAction: 'pan-y',
            }}
          >
            <iframe
              style={{
                border: 'none',
                width: '100%',
                aspectRatio: '1800 / 1200',
                minHeight: 0,
                display: 'block',
                touchAction: 'pan-y',
              }}
              src="https://rive.app/s/zN2hXH0i9EyW-cQRTacSRA/embed?runtime=rive-renderer"
              title="Rive"
              allowFullScreen
              allow="autoplay"
            />
          </div>
        </div>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
          }}
        >
          <p
            style={{
              margin: 0,
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '21px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
              lineHeight: '23.9px',
            }}
          >
            I believe in a future where computers are life-like. They will see, hear, and
            collaborate with us the way we’re used to.
          </p>
          <p
            style={{
              margin: 0,
              color: 'rgba(0, 0, 0, 1)',
              fontSize: '21px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
              lineHeight: '23.9px',
            }}
          >
            See how my brain works:
          </p>
        </section>

        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/7dcb634f-8765-4001-83f1-ccfa91e3bf4a.svg"
          alt="Divider"
          style={{
            width: '100%',
          }}
        />

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
          }}
        >
          <span
            style={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '21px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
            }}
          >
            01
          </span>
          <FancySmancyProjectTitle>Altocumulus Industries</FancySmancyProjectTitle>
          <ProjectDescription>
            ML app that identifies people in images by comparing uploads against a trained dataset.
            Python backend with Indicoio for facial localization and recognition, plus a public web
            frontend. Worked with ML APIs for security use cases.
          </ProjectDescription>
          <MusicPlayerButton
            audioName="btn-hover.mp3"
            pointerImg={musicPointer}
            maskImg={mask}
            href="https://devpost.com/software/altocumulus-industries"
            linkLabel="View on Devpost"
          />
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
          }}
        >
          <span
            style={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '21px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
            }}
          >
            02
          </span>
          <FancySmancyProjectTitle>InCite</FancySmancyProjectTitle>
          <ProjectDescription>
            Chrome extension one-click MLA, APA, Chicago, or Harvard citations for the current page;
            save multiple bibliographies and copy to clipboard. React + MobX, microlink metascraper.
          </ProjectDescription>
          <MusicPlayerButton
            audioName="btn-hover.mp3"
            pointerImg={musicPointer1}
            maskImg={mask1}
            href="https://github.com/brucejh99/inCite"
            linkLabel="View on GitHub"
          />
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
          }}
        >
          <span
            style={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '21px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
            }}
          >
            03
          </span>
          <FancySmancyProjectTitle>NightBall</FancySmancyProjectTitle>
          <ProjectDescription>
            iOS/Android game that rotates a central ball to match incoming star colors. iOS built
            with Swift, SpriteKit, and StoreKit (game modes, Game Center, in-app purchases); Android
            with GameMaker Studio.
          </ProjectDescription>
          <MusicPlayerButton
            audioName="btn-hover.mp3"
            pointerImg={musicPointer2}
            maskImg={mask2}
            pointerOffset="-48.66px"
            href="https://github.com/jeffreysfllo24/NightBall"
            linkLabel="View on GitHub"
          />
        </section>

        <img
          src="https://storage.googleapis.com/storage.magicpath.ai/user/368065211384610816/figma-assets/fd6a7edb-0ee8-48b6-8e22-cc6b6592ab75.svg"
          alt="Divider"
          style={{
            width: '100%',
          }}
        />

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
          }}
        >
          <h2
            style={{
              margin: 0,
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '21px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
            }}
          >
            Experience
          </h2>
          <ExperienceLine name="Snowflake" isPresent={true} />
          <ExperienceLine name="Instabase" date="Aug 2022 - May 2025" />
          <ExperienceLine name="Coffee Meets Bagel" date="Sep 2021 - Dec 2021" />
          <ExperienceLine name="Apple" date="Jan 2021 - Apr 2021" />
          <ExperienceLine name="Verizon Media" date="Jan 2019 - Apr 2019" />
        </section>

        <footer
          style={{
            paddingTop: '120px',
            paddingBottom: '40px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a
            href="#top"
            onClick={scrollToTop}
            style={{
              textDecoration: 'none',
              color: 'rgba(0, 0, 0, 0.2)',
              fontSize: '16px',
              fontFamily: '"Whitney Book", sans-serif',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.2)')}
          >
            Back to top
          </a>
        </footer>
      </main>

      <div
        style={{
          flex: 1,
        }}
      />
    </div>
  );
};
