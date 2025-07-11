"use client"
import { useEffect, useRef, useState } from "react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

// Extend HTMLIFrameElement to include our custom cleanup property
interface ExtendedHTMLIFrameElement extends HTMLIFrameElement {
  cleanup?: () => void;
}

export default function YouTubePlayer({ 
  videoId, 
  title = "YouTube video player",
  className = "py-16 bg-gradient-to-b from-gray-50 to-white"
}: YouTubePlayerProps) {
  const iframeRef = useRef<ExtendedHTMLIFrameElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // User interaction handler to enable audio (browser requirement)
    const enableAudio = () => {
      setUserInteracted(true);
      iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      iframe.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":"[100]"}', '*');
    };

    // Add event listeners for user interaction immediately
    document.addEventListener('click', enableAudio, { once: true });
    document.addEventListener('keydown', enableAudio, { once: true });
    document.addEventListener('touchstart', enableAudio, { once: true });

    // Add delay to ensure iframe is loaded
    const timer = setTimeout(() => {
      // Intersection Observer to detect when video is in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Video is visible, play it and ensure audio
              if (userInteracted) {
                iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
                iframe.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":"[100]"}', '*');
              }
              iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            } else {
              // Video is not visible, pause it
              iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
          });
        },
        {
          threshold: 0.3, // Trigger when at least 30% of video is visible
        }
      );

      observer.observe(iframe);

      // Page visibility API to handle tab switching
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // Tab is not active, pause video
          iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {
          // Tab is active, check if video is in viewport before playing
          const rect = iframe.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            if (userInteracted) {
              iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
              iframe.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":"[100]"}', '*');
            }
            iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Store cleanup functions
      iframe.dataset.observerActive = 'true';
      
      // Cleanup function
      const cleanup = () => {
        observer.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };

      // Store cleanup function on iframe for later use
      iframe.cleanup = cleanup;
    }, 2000); // 2 second delay

    return () => {
      clearTimeout(timer);
      if (iframe?.cleanup) {
        iframe.cleanup();
      }
    };
  }, [userInteracted]);

  return (
    <section className={className}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              <iframe 
                ref={iframeRef}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&mute=0&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1`}
                title={title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
