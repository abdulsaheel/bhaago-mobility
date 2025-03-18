export const trackVisit = async (): Promise<void> => {
    if (typeof window === "undefined") return; // Ensure this runs only in the browser
  
    const referrer: string = encodeURIComponent(document.referrer || "Direct");
    const pageURL: string = encodeURIComponent(window.location.href);
  
    const url = `https://script.google.com/macros/s/AKfycbzs-06pcGn4UNQS3pyDy7JytorpP8kZXTLSG80ziPqpnO5b9nUSsnz13FVTVTnfxtMJ/exec?referrer=${referrer}&pageURL=${pageURL}`;
  
    try {
      await fetch(url, {
        method: "GET",
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Visit tracking failed:", error);
    }
  };
  