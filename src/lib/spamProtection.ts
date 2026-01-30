// Spam protection utilities

// Honeypot field name - should be hidden from users but visible to bots
export const HONEYPOT_FIELD_NAME = "website_url";

// Rate limiting - store submission timestamps in localStorage
const RATE_LIMIT_KEY = "form_submissions";
const MAX_SUBMISSIONS = 3; // Max submissions per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Minimum time a human would take to fill a form (in milliseconds)
const MIN_FORM_FILL_TIME = 3000; // 3 seconds

interface RateLimitData {
  timestamps: number[];
}

/**
 * Check if submission is within rate limit
 */
export const checkRateLimit = (): { allowed: boolean; message?: string } => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    
    if (!stored) {
      // First submission, store it
      const data: RateLimitData = { timestamps: [now] };
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
      return { allowed: true };
    }

    const data: RateLimitData = JSON.parse(stored);
    
    // Remove timestamps older than the rate limit window
    const recentTimestamps = data.timestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
    );

    if (recentTimestamps.length >= MAX_SUBMISSIONS) {
      const oldestTimestamp = recentTimestamps[0];
      const timeUntilNext = RATE_LIMIT_WINDOW - (now - oldestTimestamp);
      const minutesLeft = Math.ceil(timeUntilNext / (60 * 1000));
      
      return {
        allowed: false,
        message: `Твърде много изпращания. Моля, опитайте отново след ${minutesLeft} минути.`,
      };
    }

    // Add current timestamp
    recentTimestamps.push(now);
    const updatedData: RateLimitData = { timestamps: recentTimestamps };
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(updatedData));
    
    return { allowed: true };
  } catch (error) {
    // If there's an error with localStorage, allow submission
    console.error("Rate limit check error:", error);
    return { allowed: true };
  }
};

/**
 * Check if form was filled too quickly (likely a bot)
 */
export const checkFormFillTime = (formStartTime: number): { allowed: boolean; message?: string } => {
  const fillTime = Date.now() - formStartTime;
  
  if (fillTime < MIN_FORM_FILL_TIME) {
    return {
      allowed: false,
      message: "Формата е попълнена твърде бързо. Моля, проверете отново и опитайте.",
    };
  }
  
  return { allowed: true };
};

/**
 * Check if honeypot field is filled (indicates bot)
 */
export const checkHoneypot = (honeypotValue: string): { allowed: boolean; message?: string } => {
  if (honeypotValue && honeypotValue.trim() !== "") {
    // Honeypot was filled, likely a bot
    return {
      allowed: false,
      message: "Спам детектиран. Ако сте реална личност, моля свържете се директно.",
    };
  }
  
  return { allowed: true };
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check for common spam patterns in message
 */
export const checkSpamPatterns = (message: string, subject?: string): { allowed: boolean; message?: string } => {
  const spamPatterns = [
    /http[s]?:\/\/[^\s]+/gi, // URLs
    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi, // Multiple emails
    /(free|viagra|casino|loan|credit)/gi, // Common spam words
  ];

  const textToCheck = `${message} ${subject || ""}`.toLowerCase();
  
  // Allow 1 URL (might be legitimate)
  const urlMatches = textToCheck.match(/https?:\/\/[^\s]+/gi);
  if (urlMatches && urlMatches.length > 2) {
    return {
      allowed: false,
      message: "Съобщението съдържа твърде много линкове.",
    };
  }

  // Check for multiple emails
  const emailMatches = textToCheck.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi);
  if (emailMatches && emailMatches.length > 1) {
    return {
      allowed: false,
      message: "Съобщението съдържа твърде много email адреси.",
    };
  }

  return { allowed: true };
};
