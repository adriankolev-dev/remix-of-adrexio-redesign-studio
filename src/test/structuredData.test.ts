import { describe, expect, it } from "vitest";
import {
  ORG_ID,
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/structuredData";

describe("structured data", () => {
  it("does not advertise a search URL that does not exist", () => {
    const site = getWebSiteSchema();
    expect(site).not.toHaveProperty("potentialAction");
    expect(JSON.stringify(site)).not.toContain("/search");
  });

  it("uses one organization id and a PNG logo", () => {
    const org = getOrganizationSchema();
    const local = getLocalBusinessSchema();
    expect(org["@id"]).toBe(ORG_ID);
    expect(local["@id"]).toBe(ORG_ID);
    expect(org.logo.url).toBe("https://www.adrexio.com/og-image.png");
    expect(local.logo.url).toBe("https://www.adrexio.com/og-image.png");
  });
});
