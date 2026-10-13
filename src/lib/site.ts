export const CLIENT_PORTAL_URL = "https://password.paktaxdigitalinvoice.com.pk";
export const MAIL_SERVER_URL =
  "https://business500.mypowerfulserver.com/cpanel";
export const FBR_PORTAL_URL = "https://fbr.paktaxdigitalinvoice.com.pk";
export const STOCK_PORTAL_URL = "https://taxflow.flowezee.com";

export const WA_NUMBER = "923235090140";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type SignupForm = {
  business: string;
  person: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  category: string;
  sells: string;
  ntn: string;
  volume: string;
  notes: string;
};

export function buildSignupMessage(f: SignupForm) {
  const lines = [
    "Uncle Tax Digital Invoicing signup request",
    "",
    `Business: ${f.business}`,
    `Contact person: ${f.person}`,
    `Phone: ${f.phone}`,
    f.email ? `Email: ${f.email}` : "",
    `City: ${f.city}`,
    `Address: ${f.address}`,
    `Business type: ${f.category}`,
    `Kya bechte hain: ${f.sells}`,
    f.ntn ? `NTN / STRN: ${f.ntn}` : "",
    f.volume ? `Monthly invoices: ${f.volume}` : "",
    f.notes ? `Notes: ${f.notes}` : "",
  ].filter(Boolean);
  return lines.join("\n");
}
