const GIVETH_URL = 'https://qf.giveth.io/project/the-red-guild';
const ARTICLE_URL = 'https://blog.theredguild.org/support-the-red-guild-in-the-ethereum-security-funding-round/';

interface GivethSupportCardProps {
  variant?: 'banner' | 'supporters';
  className?: string;
  onClose?: () => void;
}

const GivethSupportCard = ({
  variant = 'supporters',
  className = '',
  onClose,
}: GivethSupportCardProps) => {
  const isPopup = variant === 'banner';

  return (
    <section
      className={`relative w-full overflow-hidden rounded-[24px] border border-[#F7392F]/30 ${
        isPopup
          ? 'bg-[linear-gradient(145deg,rgba(247,57,47,0.22),rgba(0,0,0,0.92)_48%,rgba(247,57,47,0.1))] px-5 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:rounded-[28px] sm:px-7 sm:py-7'
          : 'bg-[linear-gradient(145deg,rgba(247,57,47,0.16),rgba(0,0,0,0.92)_44%,rgba(255,255,255,0.02))] p-5 sm:rounded-[28px] sm:p-6 md:p-7'
      } ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,57,47,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close support popup"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/16 bg-black/45 text-white/80 transition-colors hover:border-white/28 hover:text-white sm:right-4 sm:top-4"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      ) : null}
      {isPopup ? (
        <div className="relative z-10 mx-auto flex max-w-[38rem] flex-col items-center text-center">
          <h2 className="mt-3 text-xl font-spartan-title leading-tight text-white sm:text-2xl md:text-[2rem]">
            Fund public good security
          </h2>
          <p className="mt-3 max-w-[34rem] font-spartan-subtitle text-sm leading-relaxed text-white/82 sm:text-base">
            Support The Red Guild in the Ethereum Security QF Round
          </p>
          <p className="mt-3 max-w-[34rem] font-spartan-body text-sm leading-relaxed text-white/75 sm:text-[15px]">
            We do security research, education, and advocacy for Ethereum as a public good.
            Your support helps keep this work open and accessible to the whole ecosystem.
          </p>
          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-7 sm:flex-row sm:justify-center">
            <a
              href={GIVETH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-[#F7392F] px-6 py-3 text-sm font-spartan-subtitle text-white transition-colors hover:bg-[#ff564d]"
            >
              Support on Giveth
            </a>
            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-white/18 bg-white/6 px-5 py-3 text-sm font-spartan-subtitle text-white/88 transition-colors hover:bg-white/10 hover:text-white"
            >
              Read why
            </a>
          </div>
        </div>
      ) : (
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
          <div className="max-w-2xl">
            <h2 className="mt-2.5 text-[1.7rem] font-spartan-title leading-tight text-white sm:mt-3 sm:text-3xl">
              Fund public good security
            </h2>
            <p className="mt-3 font-spartan-subtitle text-sm leading-relaxed text-white/82 sm:text-base">
              Support The Red Guild in the Ethereum Security QF Round
            </p>
            <p className="mt-3 font-spartan-body text-sm leading-relaxed text-white/75 sm:text-base">
              We do security research, education, and advocacy for Ethereum as a public good.
              Your support helps keep this work open and accessible to the whole ecosystem.
            </p>
          </div>

          <div className="relative z-10 w-full rounded-2xl border border-white/12 bg-black/35 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={GIVETH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center text-center rounded-full bg-[#F7392F] px-4 py-3 text-sm font-spartan-subtitle text-white transition-colors hover:bg-[#ff564d] sm:w-auto sm:px-5 sm:py-2.5"
              >
                Support on Giveth
              </a>
              <a
                href={ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center text-center rounded-full border border-white/18 bg-white/6 px-4 py-3 text-sm font-spartan-subtitle text-white/88 transition-colors hover:bg-white/10 hover:text-white sm:w-auto sm:px-5 sm:py-2.5"
              >
                Read why
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GivethSupportCard;
