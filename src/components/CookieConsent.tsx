import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const COOKIE_CONSENT_KEY = "adrexio_cookie_consent";
const COOKIE_PREFERENCES_KEY = "adrexio_cookie_preferences";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  // Initialize analytics/marketing tools based on saved preferences
  const initializeTools = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      // Example for Google Analytics:
      // if (typeof window !== 'undefined' && (window as any).gtag) {
      //   (window as any).gtag('consent', 'update', {
      //     analytics_storage: 'granted'
      //   });
      // }
      console.log("Analytics enabled");
    }
    if (prefs.marketing) {
      // Initialize marketing tools
      // Example: Initialize Facebook Pixel, etc.
      console.log("Marketing enabled");
    }
  };

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (!consent) {
      setShowBanner(true);
    } else if (savedPreferences) {
      const prefs = JSON.parse(savedPreferences);
      setPreferences(prefs);
      // Initialize tools if consent was already given
      initializeTools(prefs);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(onlyNecessary);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowSettings(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setShowBanner(false);
    
    // Initialize analytics/marketing tools based on preferences
    initializeTools(prefs);
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const openSettings = () => {
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
    setShowSettings(true);
  };

  // Expose function to open settings from outside (e.g., Footer)
  useEffect(() => {
    (window as any).openCookieSettings = openSettings;
    return () => {
      delete (window as any).openCookieSettings;
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="border-gradient bg-card/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {/* Header with icon and close button */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 shrink-0">
                        <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-display font-semibold mb-1 sm:mb-2">
                          Използваме бисквитки
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          Използваме бисквитки, за да подобрим вашето изживяване, да анализираме използването на сайта и да персонализираме съдържанието.{" "}
                          <Link
                            to="/privacy"
                            className="text-primary hover:underline font-medium whitespace-nowrap"
                          >
                            Научете повече
                          </Link>
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 -mt-1 -mr-1"
                      onClick={handleRejectAll}
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      variant="hero"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Приемам всички
                    </Button>
                    <div className="flex gap-2 sm:gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowSettings(true)}
                        className="flex items-center justify-center gap-2 flex-1 sm:flex-initial"
                      >
                        <Settings className="w-4 h-4" />
                        Настройки
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleRejectAll}
                        className="flex-1 sm:flex-initial"
                      >
                        Отхвърлям
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Settings className="w-5 h-5 text-primary" />
              Настройки на бисквитките
            </DialogTitle>
            <DialogDescription className="text-sm">
              Изберете кои бисквитки искате да приемете. Необходимите бисквитки са задължителни за функционирането на сайта.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border bg-card/50">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Label htmlFor="necessary" className="font-semibold cursor-pointer text-sm sm:text-base">
                    Необходими бисквитки
                  </Label>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded whitespace-nowrap">
                    Винаги активни
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Тези бисквитки са необходими за основното функциониране на сайта и не могат да бъдат деактивирани.
                </p>
              </div>
              <Switch
                id="necessary"
                checked={preferences.necessary}
                disabled
                className="shrink-0 sm:ml-4"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border bg-card/50">
              <div className="flex-1 min-w-0">
                <Label htmlFor="analytics" className="font-semibold cursor-pointer mb-2 block text-sm sm:text-base">
                  Аналитични бисквитки
                </Label>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Помагат ни да разберем как посетителите използват нашия сайт, като събират анонимна информация.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("analytics", checked)
                }
                className="shrink-0 sm:ml-4"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border bg-card/50">
              <div className="flex-1 min-w-0">
                <Label htmlFor="marketing" className="font-semibold cursor-pointer mb-2 block text-sm sm:text-base">
                  Маркетингови бисквитки
                </Label>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Използват се за показване на релевантна реклама и проследяване на ефективността на кампаниите.
                </p>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("marketing", checked)
                }
                className="shrink-0 sm:ml-4"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => setShowSettings(false)}
              className="w-full sm:w-auto"
            >
              Отказ
            </Button>
            <Button 
              variant="hero" 
              onClick={handleSavePreferences}
              className="w-full sm:w-auto"
            >
              Запази настройките
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
