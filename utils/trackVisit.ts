export const trackVisit = async (): Promise<void> => {
    if (typeof window === "undefined") return; // Ensure this runs only in the browser
  
    const referrer: string = encodeURIComponent(document.referrer || "Direct");
    const pageURL: string = encodeURIComponent(window.location.href);
  
    const url = `https://script.google.com/macros/s/AKfycbxtWqKrgY6DnUkmGqXegJRZ2i9KtIgL9oSfIg43VZ_G31G5FDDnXf6587_p1M18NsIL/exec?referrer=${referrer}&pageURL=${pageURL}`;
  
    try {
      await fetch(url, {
        method: "GET",
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Visit tracking failed:", error);
    }
  };
  